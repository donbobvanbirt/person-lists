import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';

import * as ListActions from '../actions/ListActions';
import ImageCard from './ImageCard';

class List extends Component {
  constructor() {
    super();
    this.state = {};
  }

  removePerson = (id) => {
    this.props.removePerson(id);
  }

  editPerson = (id) => {
    // e.preventDefault();
    const { name, avatar, age, about } = this.state;
    const personObj = {
      name,
      avatar,
      age,
      about,
      id,
    };
    this.props.edit(personObj);
    this.setState({});
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { person } = this.props.list;
    let personCards = 'card';

    if (person) {
      personCards = person.map((per) => {
        return <ImageCard per={per} removePerson={this.removePerson} editPerson={this.editPerson} handleChange={this.handleChange} key={per.id} />
      })
    }

    // const { addPerson } = this.props;
    return (
      <div>
        <Header as="h1">Person List</Header>
        {personCards}
      </div>
    );
  }
}

const mapStateToProps = state => ({ list: state });

const mapDispatchToProps = dispatch => ({
  removePerson(id) {
    dispatch(ListActions.removePerson(id));
  },
  edit(obj) {
    dispatch(ListActions.editPerson(obj));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);

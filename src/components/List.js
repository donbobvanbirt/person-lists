import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';

import * as ListActions from '../actions/ListActions';
import ImageCard from './ImageCard';

class List extends Component {
  render() {
    console.log('this.props:', this.props)
    let { person } = this.props.list;
    let personCards = 'card';

    if (person) {
      personCards = person.map((per) => {
        return <ImageCard per={per} key={per.id} />
      }
    )

    }

    const { addPerson } = this.props;
    return (
      <div>
        <Header as="h1">Person List</Header>
        {personCards}
      </div>
    );
  }
}

const mapStateToProps = state => ({ list: state });

// const mapDispatchToProps = dispatch => ({
//   addPerson(person) {
//     dispatch(ListActions.addPerson(person));
//   },
// });

export default connect(mapStateToProps)(List);

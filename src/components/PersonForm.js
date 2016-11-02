import React, { Component } from 'react';
import { Form, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import uuid from 'uuid';

import * as ListActions from '../actions/ListActions';

class PersonForm extends Component {
  constructor() {
    super();
    this.state = {};
  }

  submitForm = (e) => {
    e.preventDefault();
    let { name, avatar, age, about } = this.state;
    const personObj = {
      name: name || 'Anonymous',
      avatar: avatar || 'https://pbs.twimg.com/profile_images/716059387735965696/_qYqY6BK.jpg',
      age: age || 'Unknown',
      about: about || 'Nothing to say',
      id: uuid(),
    };
    this.props.addPerson(personObj);
    // this.props.addPerson();
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <Header as="h3">Add New Person:</Header>
        <Form onSubmit={this.submitForm}>
          <Form.Group widths="equal">
            <Form.Input label="Name" name="name" onChange={this.handleChange} placeholder="Name" />
            <Form.Input name="avatar" label="Avatar" onChange={this.handleChange} placeholder="Image URL" />
            <Form.Input name="age" label="Age" onChange={this.handleChange} placeholder="Age" />
          </Form.Group>
          <Form.TextArea name="about" label="About" onChange={this.handleChange} placeholder="Tell us more about you..." />
          <Form.Checkbox name="checkbox" label="I agree to the Terms and Conditions" />
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addPerson(person) {
    dispatch(ListActions.addPerson(person));
  },
});

export default connect(null, mapDispatchToProps)(PersonForm);

import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import List from './List';
import PersonForm from './PersonForm';

export default class Layout extends Component {
  render() {
    return (
      <Container>
        <List />
        <PersonForm />
      </Container>
    );
  }
}

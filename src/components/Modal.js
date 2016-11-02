import React from 'react';
import { Button, Modal, Icon, Form } from 'semantic-ui-react';

const EditModal = (props) => {
  const { name, age, avatar, id, about } = props.person;
  const { editPerson, handleChange } = props;
  const submitEdit = (e) => {
    e.preventDefault();
    editPerson(id);
  };
  return (
    <Modal trigger={<Button icon primary floated="right"><Icon name="edit" /></Button>}>
      <Modal.Header>Edit {name}</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form onSubmit={submitEdit}>
            <Form.Group widths="equal">
              <Form.Input label="Name" name="name" onChange={handleChange} defaultValue={name} />
              <Form.Input name="avatar" label="Avatar" onChange={handleChange} defaultValue={avatar} />
              <Form.Input name="age" label="Age" onChange={handleChange} defaultValue={age} />
            </Form.Group>
            <Form.TextArea name="about" label="About" onChange={handleChange} defaultValue={about} />
            <Form.Checkbox name="checkbox" label="I agree to the Terms and Conditions" />
            <Form.Button>Submit</Form.Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default EditModal;

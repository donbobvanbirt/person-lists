import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

import EditModal from './Modal';

const ImageCard = (props) => {
  const { about, age, avatar, id, name } = props.per;
  const { removePerson, editPerson, handleChange } = props;
  return (
    <Card>
      <Image src={avatar} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{age} years old</Card.Meta>
        <Card.Description>{about}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        {/* <Button icon primary floated='right'><Icon name='edit' /></Button> */}
        <EditModal person={props.per} editPerson={editPerson} handleChange={handleChange}/>
        <Button icon secondary onClick={() => removePerson(id)} floated='right'><Icon name='remove' /></Button>
      </Card.Content>
    </Card>
  )
};

export default ImageCard

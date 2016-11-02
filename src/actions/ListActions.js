export function addPerson(person) {
  return {
    type: 'ADD_PERSON',
    payload: person,
  };
}

export function removePerson(id) {
  return {
    type: 'REMOVE_PERSON',
    payload: id,
  };
}

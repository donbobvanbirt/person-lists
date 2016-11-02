export default function (state = [], action) {
  switch (action.type) {
    case 'ADD_PERSON':
      return [...state, action.payload];
    case 'REMOVE_PERSON':
      return state.filter((person) => {
        return person.id !== action.payload;
      })
    default:
      return state;
  }
}

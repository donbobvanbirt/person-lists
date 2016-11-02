export default function (state = [], action) {
  switch (action.type) {
    case 'ADD_PERSON':
      return [...state, action.payload];
    default:
      return state;
  }
}

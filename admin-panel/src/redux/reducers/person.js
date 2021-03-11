export function persons(state = [], action) {
  switch (action.type) {
    case "PERSONS":
      return action.payload;
      break;

    default:
      return state;
  }
}

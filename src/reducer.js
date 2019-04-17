export default function reducer(state = [], action) {
  switch (action.type) {
    case "SET_LAST_SEARCH":
      return {
        ...state,
        lastSearch: action.lastSearch
      };
    default:
      return state;
  }
}

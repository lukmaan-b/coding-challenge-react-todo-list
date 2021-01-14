const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    case 'REMOVE_ITEM':
      return state.filter((i) => i.id !== action.payload.itemId);
    case 'TOGGLE_COMPLETE_ITEM':
      const itemIndex = state.findIndex((i) => i.id === action.payload.itemId);
      const newState = [...state];
      newState[itemIndex].isChecked = action.payload.checked;
      return newState;
    default:
      return state;
  }
};

export default reducer;

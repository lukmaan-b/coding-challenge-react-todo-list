import 'bootstrap/dist/css/bootstrap.min.css';
import { useReducer } from 'react';
import { Container } from 'react-bootstrap';
import InputForm from './components/InputForm';
import ItemList from './components/ItemList';

const initialState = [
  { id: 0, body: 'hello world', isChecked: true },
  { id: 1, body: 'hello world1', isChecked: false },
  { id: 2, body: 'hello world2', isChecked: false },
];

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

const actionTypes = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  TOGGLE_COMPLETE_ITEM: 'TOGGLE_COMPLETE_ITEM',
};

function App() {
  const [list, dispatch] = useReducer(reducer, initialState);

  const handleAddItem = (itemBody) => {
    const item = { id: list.length, body: itemBody, isChecked: false };
    dispatch({ type: actionTypes.ADD_ITEM, payload: item });
  };

  const handleRemoveItem = (itemId) =>
    dispatch({ type: actionTypes.REMOVE_ITEM, payload: { itemId } });

  const handleToggleItem = (itemId, checked) =>
    dispatch({
      type: actionTypes.TOGGLE_COMPLETE_ITEM,
      payload: { itemId, checked },
    });

  return (
    <Container>
      <h1 className="text-center">Todo List</h1>
      <InputForm handleAddItem={handleAddItem} />
      <ItemList
        handleToggleItem={handleToggleItem}
        handleRemoveItem={handleRemoveItem}
        list={list}
      />
    </Container>
  );
}

export default App;

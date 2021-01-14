import 'bootstrap/dist/css/bootstrap.min.css';
import { useReducer } from 'react';
import { Container } from 'react-bootstrap';
import InputForm from './components/InputForm';
import ItemList from './components/ItemList';
import actionTypes from './state/actionTypes';
import reducer from './state/reducer';

const initialState = [];

function App() {
  const [list, dispatch] = useReducer(reducer, initialState);

  const handleAddItem = (itemBody) => {
    const item = { id: list.length + 1, body: itemBody, isChecked: false };
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

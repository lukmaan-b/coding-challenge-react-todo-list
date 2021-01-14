import 'bootstrap/dist/css/bootstrap.min.css';
import { useReducer } from 'react';
import { Container } from 'react-bootstrap';
import InputForm from './components/InputForm';
import ItemList from './components/ItemList';

const initialState = [
  { id: 0, body: 'hello world' },
  { id: 1, body: 'hello world1' },
  { id: 2, body: 'hello world2' },
];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    case 'REMOVE_ITEM':
      return [...state, action.payload];
    case 'TOGGLE_COMPLETE_ITEM':
      return [...state, action.payload];
    default:
      return state;
  }
};

function App() {
  const [list, dispatch] = useReducer(reducer, initialState);
  return (
    <Container>
      <h1 className="text-center">Todo List</h1>
      <InputForm dispatch={dispatch} />
      <ItemList list={list} />
    </Container>
  );
}

export default App;

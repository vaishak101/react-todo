import Header from './components/Header/Header'
import Card from './components/Todo/Card';
import './App.css';
import { useReducer } from 'react';
import { todoReducer } from './assets/reducer';

const localData = JSON.parse(localStorage.getItem('todo'));
let data = []
if (localData) { data = localData }

function App() {
  const [todoState, dispatch] = useReducer(todoReducer, data)

  function handleAddTodo(text) {
    dispatch({ type: 'add_todo', val: text },)
  }

  function deleteTodo(removeTodoID) {
    dispatch({ type: 'delete_todo', remvId: removeTodoID },)
  }

  function updateTodo(todoId, newValue) {
    dispatch({ type: 'update_todo', searchId: todoId, newVal: newValue },)

  }

  localStorage.setItem('todo', JSON.stringify(todoState));

  return (
    <div className="container mx-auto">
      <Header />
      <Card todo={todoState} handleAddTodo={handleAddTodo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  );
}
export default App;

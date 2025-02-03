import Todos from "./components/Todos.jsx";
import AddTodo from "./components/AddTodo.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;

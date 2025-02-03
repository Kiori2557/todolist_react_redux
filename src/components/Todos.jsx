import { useSelector } from "react-redux";

function Todos() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => (
        <p key={todo.id} className="text-sm hover:text-primary transition-all">
          {todo.text}
        </p>
      ))}
    </>
  );
}
export default Todos;

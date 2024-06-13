import Todo from "../models/todo";

interface Props {
  todos: Todo[];
  onDeleteTodo: (id: string) => void;
}

const TodoList = ({ todos, onDeleteTodo }: Props) => {
  return (
    <div>
      <h1>Todo List</h1>
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo._id}>
            {todo.title}
            <button
              onClick={() => onDeleteTodo(todo._id)}
              className="btn btn-outline-danger m-2 rounded-pill"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

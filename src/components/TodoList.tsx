import TodoCard from "./TodoCard";

interface ITodoListProps {
  todos: string[];
  handleDeleteTodo: (index: number) => void;
  handleEditTodo: (index: number) => void;
}

export default function TodoList<T extends Props & ITodoListProps>(props: T) {
  const { todos } = props;

  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} key={todoIndex} index={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}

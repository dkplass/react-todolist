interface ITodoCardProps {
  index: number;
  handleDeleteTodo: (index: number) => void;
  handleEditTodo: (index: number) => void;
}

export default function TodoCard<T extends Props & ITodoCardProps>(props: T) {
  const { children, handleDeleteTodo, handleEditTodo, index } = props;

  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button
          onClick={() => {
            handleEditTodo(index);
          }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(index);
          }}
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}

import { Dispatch, SetStateAction } from "react";

interface ITodoInputProps {
  todoValue: string;
  setTodoValue: Dispatch<SetStateAction<string>>;
  handleAddTodo: (todoValue: string) => void;
}

export default function TodoInput<T extends Props & ITodoInputProps>(props: T) {
  const { todoValue, setTodoValue, handleAddTodo } = props;

  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="To do thing"
      />
      <button
        onClick={() => {
          handleAddTodo(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}

import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

type TodosType = string[];

function App() {
  const [todos, setTodos] = useState<TodosType>([]);

  const [todoValue, setTodoValue] = useState("");

  function persistData(newList: TodosType) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function handleAddTodo(newTodo: string) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index: number) {
    const newTodoList = todos.filter((todo: string, todoIndex) => {
      return todoIndex !== index;
    });
    setTodos(newTodoList);
  }

  function handleEditTodo(index: number) {
    const valueToBeEdit = todos[index];
    setTodoValue(valueToBeEdit);
    handleDeleteTodo(index);
  }

  useEffect(() => {
    if (!localStorage) return;

    const localTodos = localStorage.getItem("todos");
    if (!localTodos) return;

    const localTodosList = JSON.parse(localTodos).todos;
    setTodos(localTodosList);
  }, []);

  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodo={handleAddTodo}
      />
      <TodoList
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
        todos={todos}
      />
    </>
  );
}

export default App;

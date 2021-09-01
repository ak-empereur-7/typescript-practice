import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";
import { TodoType } from "./type/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./type/user";

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const user: User = {
    name: "Dan",
    hobbies: ["英語", "映画"]
  };
  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

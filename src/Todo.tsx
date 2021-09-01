import { VFC } from "react";
import { TodoType } from "./type/todo";

// Pick<TodoType, "userId", "title", "completed">で必要なプロパティを取る
// Omitは除く
export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark}${title}(ユーザーID：${userId})`}</p>;
};

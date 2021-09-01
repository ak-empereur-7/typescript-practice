import { TodoType } from "./type/todo";

// Pick<TodoType, "userId", "title", "completed">で必要なプロパティを取る
// Omitは除く
export const Todo = (props: Omit<TodoType, "id">) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark}${title}(ユーザーID：${userId})`}</p>;
};

import style from "./List.module.scss";
import Item from "./Item";
import { ITask } from "../../types/task";

interface Props {
  taskItem: ITask[];
  selectTask: (selectedTask: ITask) => void;
}

function ListTask({ taskItem, selectTask }: Props) {
  return (
    <aside className={style.listTasks}>
      <h2>Lista de estudos:</h2>
      <ul>
        {taskItem.map((item) => (
          <Item selectTask={selectTask} {...item} key={item.id} />
        ))}
      </ul>
    </aside>
  );
}
export default ListTask;

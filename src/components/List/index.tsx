import style from "./List.module.scss";
import Item from "./Item";
import { ITask } from "../../types/task";
import { Divider } from "antd";


interface Props {
  taskItem: ITask[];
  selectTask: (selectedTask: ITask) => void;
}

function ListTask({ taskItem, selectTask }: Props) {
  return (
    <aside className={style.listTasks}>
      <Divider orientation="left" plain>Lista de estudos:</Divider>
      <ul>
        {taskItem.map((item) => (
          <Item selectTask={selectTask} {...item} key={item.id} />
        ))}
      </ul>
    </aside>
  );
}
export default ListTask;

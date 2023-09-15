import React, { useState } from "react";
import Button from "../Button";
import style from "./Form.module.scss";
import { ITask } from "../../types/task";
import { v4 as uuidv4 } from "uuid";

interface Props {
  setTaskItem: React.Dispatch<React.SetStateAction<ITask[]>>;
}

function FormTask({ setTaskItem }: Props) {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("00:00");

  function addTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTaskItem((oldTasks) => [
      ...oldTasks,
      {
        task,
        time,
        selected: false,
        completed: false,
        id: uuidv4(),
      },
    ]);
    setTask("");
    setTime("00:00");
  }
  return (
    <form className={style.newtask} onSubmit={addTask}>
      <div className={style.inputContainerBox}>
        <div className={style.inputContainer}>
          <label htmlFor="task">Adicione uma nova tarefa</label>
          <input
            type="text"
            name="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            id="task"
            placeholder="Nome da tarefa:"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="time">Tempo para cada ciclo de estudo</label>
          <input
            type="time"
            step="1"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            id="time"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
      </div>
      
      <Button type="submit">Adicionar</Button>
    </form>
  );
}

export default FormTask;

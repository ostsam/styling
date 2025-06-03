import Tasks from "./Tasks";
import { type TaskData } from "./Tasks";
import { useState } from "react";

export default function TaskList() {
  const allTasks: TaskData[] = [
    {
      name: "Dishwashing",
      description: "Wash and dry dishes, pots, pans and utensils.",
      checked: false,
    },
    {
      name: "Laundry",
      description: "Wash, dry, fold, and put away clothes and linens.",
      checked: false,
    },
    {
      name: "Vacuuming",
      description: "Vacuum carpets, rugs, and floors throughout the house.",
      checked: false,
    },
    {
      name: "Dusting",
      description: "Dust furniture, shelves, and other surfaces.",
      checked: false,
    },
  ];

  const [tasks, setTasks] = useState(allTasks);

  console.log("tasks", tasks);

  const handleClick = (i: number) => {
    const newList = structuredClone(tasks);
    const task = newList[i];
    task.checked = !task.checked;
    setTasks(newList);

    newList.sort((a, b) => {
      if (a.checked == false) return 1;
      else return -1;
    });
  };

  return (
    <div className="flex flex-col flex-center items-center ">
      <Tasks allTasks={tasks} handleClick={handleClick} />
    </div>
  );
}

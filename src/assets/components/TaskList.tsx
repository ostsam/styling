import { useState } from "react";
import Tasks from "./Tasks";
import clsx from "clsx";

export default function TaskList() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-col flex-center items-center ">
      <Tasks setChecked={setChecked} checked={checked} />
    </div>
  );
}

import clsx from "clsx";

export type TaskData = {
  name: string;
  description: string;
};

export default function Task({ checked, setChecked }) {
  let kitchenTask: TaskData = {
    name: "Dishwashing",
    description: "Wash and dry dishes, pots, pans and utensils.",
  };

  return (
    <>
      <div className="m-auto flex flex-col gap-4">
        <div className="text-5xl font-[Inter] font-normal self-start mt-10">
          Task
        </div>
        <div
          className={clsx(
            "flex flex-row font-[Inter] items-center gap-4 p-5 rounded-lg border-1 border-[#D8D8D8] radius max-w-xl",
            {
              "bg-[#E2FFE5]": checked,
            }
          )}
        >
          <button
            className={clsx("w-8 h-8 rounded border border-[#D8D8D8]", {
              "border-[#359845] bg-[#359845]": checked,
            })}
            onClick={() => setChecked(!checked)}
          />
          <div className="flex flex-col">
            <div className="text-lg mb-3 font-normal">{kitchenTask.name}</div>
            <div className="text-sm font-light">{kitchenTask.description}</div>
          </div>
        </div>
      </div>
    </>
  );
}

/*
  let allTasks: TaskData = [
    {
      name: "Dishwashing",
      description: "Wash and dry dishes, pots, pans and utensils.",
    },
    {
      name: "Laundry",
      description: "Wash, dry, fold, and put away clothes and linens.",
    },
    {
      name: "Vacuuming",
      description: "Vacuum carpets, rugs, and floors throughout the house.",
    },
    {
      name: "Dusting",
      description: "Dust furniture, shelves, and other surfaces.",
    },
  ];

*/

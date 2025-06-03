import clsx from "clsx";

export type TaskData = {
  name: string;
  description: string;
  checked: boolean;
};

export type TasksProps = {
  allTasks: TaskData[];
  handleClick: (i: number) => void;
};

export default function Tasks({ allTasks, handleClick }: TasksProps) {
  return (
    <>
      <div className="m-auto flex flex-col gap-4">
        <div className="text-5xl font-[Inter] font-normal self-start mt-10">
          Task List
        </div>
        <div className="text-base font-normal font-[Inter]">
          Sorted by completion
        </div>
        {allTasks.map((task: TaskData, i: number) => (
          <div
            key={i}
            className={clsx(
              "flex flex-row font-[Inter] items-center gap-4 p-5 rounded-lg border-1 border-[#D8D8D8] radius max-w-xl",
              {
                "bg-[#E2FFE5]": task.checked,
              }
            )}
          >
            <button
              className={clsx("w-8 h-8 rounded border border-[#D8D8D8]", {
                "border-[#359845] bg-[#359845]": task.checked,
              })}
              onClick={() => handleClick(i)}
            />
            <div className="flex flex-col">
              <div className="text-lg mb-3 font-normal">{task.name}</div>
              <div className="text-sm font-light">{task.description}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

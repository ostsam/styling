import avatar1 from "/public/avatar1.png";
import avatar2 from "/public/avatar2.png";
import clsx from "clsx";

export type Message = {
  user: number;
  message: string;
  avatar: string;
};

export default function MessageThread() {
  const dms: Message[] = [
    {
      user: 1,
      message:
        "I just completed my first 10k run this morning, and I feel amazing! It was a bit of a struggle towards the end, but pushing through the last kilometer was so rewarding. Now, I'm enjoying a big breakfast to refuel. If anyone wants to join me for a run next week, let me know!",
      avatar: avatar1,
    },
    {
      user: 1,
      message:
        "I'm planning a weekend getaway to the mountains and can't wait to disconnect from the hustle and bustle of city life. I've booked a cozy cabin with a fireplace, and I'm looking forward to some hiking, stargazing, and simply enjoying the peace and quiet.",
      avatar: avatar1,
    },
    {
      user: 2,
      message:
        "I've decided to take up a new hobby and start learning how to play the piano. It's something I've always wanted to do, and I finally signed up for lessons. The first few sessions have been challenging, but I love the feeling of progress with each practice.",
      avatar: avatar2,
    },
    {
      user: 1,
      message:
        "I just completed my first 10k run this morning, and I feel amazing! It was a bit of a struggle towards the end, but pushing through the last kilometer was so rewarding. Now, I'm enjoying a big breakfast to refuel. If anyone wants to join me for a run next week, let me know!",
      avatar: avatar1,
    },
  ];

  function renderImage(dm: Message, index: number, dms: Message[]) {
    const prevDm = dms[index - 1];
    return (
      <img
        className={clsx("h-10 w-10 rounded-full", {
          "h-10 w-10 rounded-full invisible": prevDm && dm.user == prevDm.user,
        })}
        src={dm.avatar}
      />
    );
  }

  function corner(dm: Message, index: number, dms: Message[]) {
    const prevDm = dms[index - 1];
    const nextDm = dms[index + 1];
    if (prevDm && dm.user != prevDm.user) {
      return "rounded-lg";
    } else if (prevDm && dm.user == prevDm.user) {
      return "rounded-lg rounded-tr-none";
    } else if (nextDm && dm.user == nextDm.user) {
      return "rounded-lg rounded-br-none";
    }
  }

  return (
    <>
      <div className="m-auto flex flex-col gap-2 ml-10">
        <div className="font-[Inter] weight-400 text-5xl self-start mt-10 mb-8">
          Message Thread
        </div>
        {dms.map((dm, i) => (
          <div
            className={clsx("flex flex-row mr-25 max-width-[85] gap-3", {
              "flex-row-reverse": dm.user == 1,
            })}
          >
            {renderImage(dm, i, dms)}
            <div
              className={clsx(
                "flex flex-row font-medium text-sm p-4 bg-[#74C2FF] max-w-3xl",
                {
                  "bg-[#D8D8D8]": dm.user == 2,
                },
                corner(dm, i, dms)
              )}
            >
              <div className="flex flex-col font-[Inter] items-center">
                <div className="flex flex-row-reverse">
                  <div key={i} className="">
                    {dm.message}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

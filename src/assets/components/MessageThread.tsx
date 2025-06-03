import avatar1 from "/public/avatar1.png";
import avatar2 from "/public/avatar2.png";

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

  return (
    <>
      <div>
        <div className="font-[Inter] weight-400 text-5xl">Message Thread</div>
        <div className="font-[Inter]"></div>
      </div>
    </>
  );
}

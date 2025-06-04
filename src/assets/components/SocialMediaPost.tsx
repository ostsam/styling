import avatar1 from "/public/avatar1.png";
import flowers from "/public/flowers.jpg";
import heart from "/public/heart.svg";
import messageSquare from "/public/message-square.svg";

export default function SocialMediaPost() {
  return (
    <div className="m-auto flex flex-col gap-2 ml-10">
      <div className="font-[Inter] weight-400 text-5xl self-start mt-10 mb-8">
        Post
      </div>
      <div className="flex flex-row gap-4">
        <div>
          <img className="h-10 w-10 mt-1.75 rounded-full" src={avatar1} />
        </div>
        <div>
          <div className="font-[Inter] text-base font-normal text-[#828282]">
            <div>
              <span className="font-medium text-black">Helena</span> in Group
              name
            </div>
            <div className="mb-3">3 min ago</div>
            <img className="h-115 w-115 rounded-sm" src={flowers} />
            <div className="mt-3 text-xl text-black mb-3">Post description</div>
            <div className="font-medium text-black text-base">
              <div className="flex flex-row">
                <img className="h-5 w-5 mt-0.75" src={heart} />
                <div className="ml-1.5 mr-4">21 likes</div>
                <img className="h-5 w-5 mt-0.75" src={messageSquare} />
                <div className="ml-1.5">4 comments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

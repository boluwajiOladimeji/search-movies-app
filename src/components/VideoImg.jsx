import videoImg from "../assets/Icon.svg";

function VideoImg() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <img src={videoImg} alt="" />
      <h3 className="text-gray-400 text-2xl">Start exploring</h3>
    </div>
  );
}

export default VideoImg;

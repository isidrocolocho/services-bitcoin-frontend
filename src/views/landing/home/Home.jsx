import React from "react";

const Home = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="min-w-full min-h-full absolute object-cover"
          src="/images/vidBg.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
        ></video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
      </div>
      <div className="video-content space-y-2 z-10">
        <h1 className="font-light text-6xl">Full Hero Video</h1>
        <h3 className="font-light text-3xl">with TailwindCSS</h3>
      </div>
    </section>
  );
};

export default Home;

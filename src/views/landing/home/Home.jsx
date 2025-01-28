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
      </div>
      <div className="video-content space-y-2 z-10">
        <div class="text-center lg:text-left lg:w-1/2">
          <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Main title of your landing page
          </h1>
          <p class="text-xl lg:text-2xl mt-6 font-light">
            Free landing page template to promote your business startup and
            generate leads for the offered services
          </p>
          <p class="mt-8 md:mt-12">
            <button
              type="button"
              class="py-4 px-12 bg-[#0F3715] hover:bg-[#5E8F34] rounded text-white">
              Get Started
            </button>
          </p>
          <p class="mt-4 text-gray-600">Sed fermentum felis ut cursu</p>
        </div>
      </div>
      <style jsx>{`
        .video-docker video {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .video-docker::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.6);
          z-index: 1;
        }
      `}</style>
    </section>
  );
};

export default Home;

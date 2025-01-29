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
      <div class="relative px-6 lg:px-8 dark:bg-gray-800">
    <div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
        <div>
            <div>
                <h1 class="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl dark:text-gray-100">
                    SatoshiLab
                </h1>
                <p class="mt-6 text-lg leading-8 text-white sm:text-center dark:text-gray-200">
                    
SatoshiLab is your all-in-one platform to explore the world of Bitcoin. Access up-to-date information, seamlessly connect with your wallet, and discover innovative Bitcoin-related services. Explore, connect, and unlock the power of Bitcoin in one place.
                </p>
                <div class="mt-8 flex gap-x-4 sm:justify-center">
                    <a href="#"
                        class="inline-block rounded-lg bg-[#BF8D30] px-4 py-1.5 text-base font-semibold leading-7 text-black shadow-sm ring-1 ring-black hover:bg-indigo-700 hover:ring-indigo-700">
                        Get started
                        <span aria-hidden="true" class="text-black"> →</span>
                    </a>
                    
                </div>
            </div>
        </div>
    </div>
</div>
      </div>
    </section>
  );
};

export default Home;

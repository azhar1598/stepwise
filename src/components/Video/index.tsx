"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="See Stepwise in Action"
          paragraph="Watch how Stepwise transforms everyday challenges into opportunities for independence. Our AI-powered visual guides empower individuals with Down syndrome, autism, and other cognitive disabilities to master tasks with confidence."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image
                  src="/images/stepwise-assets/stepwise-video.jpg"
                  alt="Stepwise app demo video thumbnail"
                  fill
                />
                <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                  <button
                    aria-label="video play button"
                    onClick={() => setOpen(true)}
                    className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      className="fill-current"
                    >
                      <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Modal for Local Video */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-75"
          style={{ zIndex: 1000 }}
        >
          <div className="relative w-full max-w-4xl">
            <button
              aria-label="close video modal"
              onClick={() => setOpen(false)}
              className="absolute right-0 top-[-40px] text-3xl font-bold text-white"
            >
              &times;
            </button>
            <video
              controls
              autoPlay
              className="w-full rounded-md"
              src="/images/stepwise-assets/stepwisevideo.mp4" // Path to your local video file
              onEnded={() => setOpen(false)} // Optional: Closes modal when video ends
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;

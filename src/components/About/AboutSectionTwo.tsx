import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:px-28 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-start">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] p-24 text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/stepwise-assets/about2.webp"
                alt="Stepwise app interface"
                fill
                className="object-cover drop-shadow-three dark:hidden dark:drop-shadow-none md:max-w-[400px]"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="Stepwise app interface"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Visual Learning, Simplified
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Stepwise transforms real-world images into step-by-step visual
                  guides, making learning intuitive and engaging for individuals
                  with cognitive disabilities. No more confusing
                  instructions—just clear, easy-to-follow steps.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  AI-Powered Personalization
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Our AI tailors task instructions based on user needs, ensuring
                  guidance that adapts to different learning styles and
                  abilities. Whether at home, in school, or at work, Stepwise
                  provides the right support at the right time.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Empowering Independence
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  By enabling users to complete tasks confidently on their own,
                  Stepwise fosters greater independence and self-reliance,
                  reducing the need for constant caregiver intervention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;

import { ArrowRight } from "lucide-react";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CalltoAction = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    // Animate the heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    // Animate the paragraph
    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    // Animate the form
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="bg-white">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h2
            ref={headingRef}
            className="text-2xl font-bold text-[#8B2CB2] md:text-3xl"
          >
            Ready to Experience the Convenience?
          </h2>

          <p ref={paragraphRef} className="hidden text-gray-900 font-semibold sm:mt-4 sm:block">
            Enter your email for the latest updates.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <form ref={formRef} action="#" className="sm:flex sm:gap-4">
            <div className="sm:flex-1">
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-[#8B2CB2]"
              />
            </div>

            <button
              type="submit"
              className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-[#8B2CB2] px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-[#8B2CB2] sm:mt-0 sm:w-auto"
            >
              <span className="text-sm font-medium"> Book Fast! </span>
              <ArrowRight />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CalltoAction;

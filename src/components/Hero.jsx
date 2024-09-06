import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Animate title
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    // Animate text
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    // Animate buttons
    gsap.fromTo(
      buttonsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: buttonsRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    // Animate image
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className=" -z-0 overflow-hidden lg:mx-20 bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx- max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2
            ref={titleRef}
            className="text-2xl font-bold text-gray-900 md:text-3xl"
          >
            Why Choose{" "}
            <strong className="text-2xl font-bold text-[#8B2CB2] md:text-3xl">
              Home Delivery of Rental Cars?
            </strong>
          </h2>

          <p ref={textRef} className="text-gray-500 mt-3 md:mt-4 md:block">
            Get your rental car delivered right to your doorstep. Enjoy the
            ultimate convenience with Zymo’s home delivery service. Zymo’s
            home delivery service offers unparalleled convenience, allowing
            you to focus on what matters most while we handle the logistics.
          </p>

          <div
            ref={buttonsRef}
            className="mt-4 flex gap-4 items-center justify-center md:mt-8"
          >
            <a
              href="#"
              className=" rounded bg-[#d29be7] px-5 py-2 lg:px-12 lg:py-3 text-sm font-medium text-white transition hover:bg-[#8B2CB2] focus:outline-none focus:ring focus:ring-[#8B2CB2]"
            >
              Get Started Today
            </a>
            <a
              href="#"
              className="rounded bg-white lg:px-12 lg:py-3 px-5 py-2 text-sm font-medium text-black transition hover:bg-[#8B2CB2] hover:text-white focus:outline-none focus:ring focus:ring-[#8B2CB2]"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>

      <img
        ref={imageRef}
        alt=""
        src="/Hero_img.jpeg"
        className=" object-fit sm:h-[calc(100%_-_2rem)] ml-5 sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]"
      />
    </section>
  );
};

export default Hero;

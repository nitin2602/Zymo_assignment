import React, { useRef, useEffect } from "react";
import FeatureCard from "./Cards/FeatureCard";
import items from "./../Content/FeatureCardContent";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeatureListing = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const cardRefs = useRef([]);

  cardRefs.current = [];

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

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

    // Animate each card
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
          delay: index * 0.2, // Adds a stagger effect to each card
        }
      );
    });
  }, []);

  return (
    <section className="bg-purple-50 text-[#8B2CB2] mt-10 mx-5">
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="max-w-xl">
          <h2
            ref={headingRef}
            className="text-3xl font-bold sm:text-4xl"
          >
            <span className="text-gray-900">Why choose </span>
            <strong className="underline underline-offset-8 text-3xl text-[#8B2CB2] font-bold sm:text-4xl">
              Home Delivery ?
            </strong>
          </h2>

          <p ref={paragraphRef} className="mt-4 text-gray-900">
            Zymo’s home delivery service offers unparalleled convenience,
            allowing you to focus on what matters most while we handle the
            logistics.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {items.map((item, index) => (
            <FeatureCard
              key={item.id}
              title={item.title}
              description={item.description}
              bgColor={item.bgColor}
              ref={(el) => addToRefs(el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureListing;

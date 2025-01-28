"use client";

import Button from "../components/Button";
import Image from "next/image";
import Pointer from "../components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

export const Hero = () => {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    // Left Side Animation
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);
    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { x: 0, y: [0, 16, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);
    // Right Side Animation
    rightDesignAnimate([
      [rightDesignScope.current, {opacity: 1}, { duration: 0.5, delay: 1.5}],
      [rightDesignScope.current, {x: 0, y: 0}, {duration: 0.5}],
    ]);
    rightPointerAnimate([
      [rightPointerScope.current, {opacity: 1}, {duration: 0.5, delay: 1.5}],
      [rightPointerScope.current, {x: 175, y: 0}, {duration: 0.5}],
      [rightPointerScope.current, {x: 0, y: [0, 20, 0]}, {duration: 0.5}],
    ]);
  }, [leftDesignAnimate, leftDesignScope, leftPointerAnimate, leftPointerScope, rightDesignAnimate, rightDesignScope, rightPointerAnimate, rightPointerScope]);
  return (
    <section className="py-24 px-6 overflow-x-clip" style={{ cursor: `url(${'/cursor-you.svg'}), auto` }}>
      <div className="container relative">
        {/* Left Drag Animation */}
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          drag
          className="absolute -left-32 top-16 hidden lg:block"
        >
          <Image
            src={"/design-example-1.png"}
            alt="Design example 1 image"
            width={100}
            height={100}
            draggable
          />
        </motion.div>
        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className="absolute left-56 top-96 hidden lg:block"
        >
          <Pointer name="Andrea" />
        </motion.div>
        {/* Right Drag Animation */}
        <motion.div
          ref={rightDesignScope}
          initial={{opacity: 0, x: 100, y: 100}}
          drag
          className="absolute -right-64 -top-16 hidden lg:block"
        >
          <Image
            src={"/design-example-2.png"}
            alt="Design example 2 image"
            width={100}
            height={100}
            draggable={false}
          />
        </motion.div>
        <motion.div
          ref={rightPointerScope}
          initial={{opacity: 0, x: 275, y: 100}}
          className="absolute right-80 -top-4 hidden lg:block"
        >
          <Pointer name="Bryan" color="red" />
        </motion.div>

        <div className="flex items-center justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-neutral-950 font-semibold">
            ✨ $7.5M seed round raised
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
          Impactful design, created effortlessly
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
          Design tools shouldn&apos;t slow you down. Layers combines powerful
          features with an intuitive interface that keeps you in your creative
          flow.
        </p>
        <form
          name="form"
          className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent px-4 w-full md:flex-1"
          />
          <Button
            type="submit"
            variant="primary"
            size="sm"
            className="whitespace-nowrap"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
}

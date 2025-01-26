'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import React, { Fragment } from "react";

const logos = [
  { name: "Quantum", image: "/quantum.svg" },
  { name: "Acme Corp", image: "/acme-corp.svg" },
  { name: "Echo Valley", image: "/echo-valley.svg" },
  { name: "Pulse", image: "/pulse.svg" },
  { name: "Outside", image: "/outside.svg" },
  { name: "Apex", image: "/apex.svg" },
  { name: "Celestial", image: "/celestial.svg" },
  { name: "Twice", image: "/twice.svg" },
];

export const LogoTicker =() => {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container">
        <h3 className="text-white/50 text-xl text-center">
          Already chosen by these market leaders
        </h3>
        <div className="flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{ x: "-50%" }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            className="flex flex-none gap-24 pr-24"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <Fragment key={i}>
                {logos.map((item) => (
                  <Image
                    src={item.image}
                    alt={item.name}
                    key={item.name}
                    width={100}
                    height={100}
                  />
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

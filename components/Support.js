import { FadeContainer, popUp } from "@content/FramerMotionVariants";
import support from "@content/support";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedDiv from "@components/FramerMotion/AnimatedDiv";

export default function Support() {
  const [showUPIForm, setShowUPIForm] = useState(false);

  return (
    <section>
      <h3 className="my-5 font-bold text-2xl">Support me 💪</h3>

      <AnimatedDiv
        variants={FadeContainer}
        className="grid gap-5 sm:grid-cols-3"
      >
        {support.map((paymentMethod) => {
          return (
            <Link key={paymentMethod.name} href={paymentMethod.url} passHref>
              <motion.a
                variants={popUp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-darkSecondary dark:bg-darkSecondary dark:text-gray-300 grid place-items-center p-5 group rounded-xl hover:ring-1 shadow ring-gray-500 duration-200 active:ring"
              >
                <div className="flex flex-col items-center gap-5 select-none">
                  <paymentMethod.Icon className="text-3xl duration-150 group-hover:lg:scale-150 " />

                  <p className="font-semibold text-sm">{paymentMethod.name}</p>
                </div>
              </motion.a>
            </Link>
          );
        })}
      </AnimatedDiv>
    </section>
  );
}

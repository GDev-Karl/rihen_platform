import React from "react";

import { motion } from "framer-motion";

const Skills = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark
       text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
       lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold
       "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skill = () => {
  return (
    <>
      <h2
        className="font-bold text-6xl mt-64 w-full text-center
      md:text-6xl md:mt-32"
      >
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center rounded-full justify-center bg-circularLight dark:bg-circularDark lg:h-[80-vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Development
        </motion.div>
        <Skills name="HTML" x="-25vw" y="2vw"></Skills>
        <Skills name="CSS" x="5vw" y="-10vw"></Skills>
        <Skills name="Javascript" x="23vw" y="6vw"></Skills>
        <Skills name="ReactJs" x="0vw" y="12vw"></Skills>
        <Skills name="C++" x="-20vw" y="-15vw"></Skills>
        <Skills name="NextJs" x="15vw" y="-12vw"></Skills>
        <Skills name="C" x="32vw" y="-5vw"></Skills>
        <Skills name="C++" x="0vw" y="-20vw"></Skills>
        <Skills name="C#" x="0vw" y="-20vw"></Skills>
        <Skills name="Python" x="0vw" y="-20vw"></Skills>
        <Skills name="Java" x="-25vw" y="10vw"></Skills>
        <Skills name="Unity" x="20vw" y="-19vw"></Skills>
        <Skills name="Unreal" x="18vw" y="16vw"></Skills>
        <Skills name="VR and AR" x="-12vw" y="2vw"></Skills>
        <Skills name="Game development" x="-22vw" y="18vw"></Skills>
      </div>
    </>
  );
};

export default Skill;

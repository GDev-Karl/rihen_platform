import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-6xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top
           dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        ></motion.div>
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Creation of an Adventure Game"
            company="InnovateGames"
            companyLink="https://karl-gerard-portfolio.netlify.app/"
            time="2023-(January-March)"
            address=" Yaounde, Cameroon"
            work="Led the development of an interactive adventure game, incorporating immersive storylines, puzzle mechanics, and a dynamic open world. The game was built using Unity, with integrated multiplayer features and real-time player progression tracking. Collaborated closely with designers and sound engineers to create a captivating experience."
          ></Details>
          <Details
            position="DevelopeDevelopment of a Learning Management System"
            company="TechAcademy"
            companyLink="https://karl-gerard-portfolio.netlify.app/"
            time="2023-(April-June)"
            address=" Yaounde, Cameroon"
            work="Developed and implemented a Learning Management System (LMS) for TechAcademy, allowing educators to create, manage, and distribute courses. Integrated features such as progress tracking, assessment tools, and real-time collaboration for students, resulting in an efficient educational experience tailored to modern learning needs."
          ></Details>
          <Details
            position="Creation of a Collaborative Platform"
            company="DevInnovators"
            companyLink="https://karl-gerard-portfolio.netlify.app/"
            time="2023-(July-September)"
            address=" Yaounde, Cameroon"
            work="Built a project management and collaboration platform for DevInnovators, enabling teams to work seamlessly on projects with task assignment, progress tracking, and file management. Integrated real-time chat and collaboration tools to enhance teamwork and overall project efficiency."
          ></Details>
          <Details
            position="Design of a Business Management Mobile App"
            company="GreenSolutions"
            companyLink="https://karl-gerard-portfolio.netlify.app/"
            time="2024-(February-April)"
            address=" Yaounde, Cameroon"
            work="Led the development of a mobile app designed for business management, streamlining operations such as task delegation, time tracking, and project analysis. Integrated with backend servers to ensure data synchronization and real-time updates, providing GreenSolutions with a powerful tool to improve team productivity."
          ></Details>
          <Details
            position="Development of an Institutional Website"
            company="GlobalPartners"
            companyLink="https://karl-gerard-portfolio.netlify.app/"
            time="2023-(November-December)"
            address=" Yaounde, Cameroon"
            work="Developed a professional website for GlobalPartners, showcasing their portfolio, services, and corporate values. Included contact forms, interactive elements, and an SEO-optimized structure to enhance online visibility and engagement with potential clients."
          ></Details>
        </ul>
      </div>
    </div>
  );
};

export default Experience;

import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import MainLogo from "../../public/images/profile/MainLogo.png";
import Tech from "../../public/images/about/tech.jpeg";
import Gaming from "../../public/images/about/gaming.jpeg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skill from "@/components/Skill";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springvalue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springvalue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springvalue, value]);
  return <span ref={ref}></span>;
};
const about = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <TransitionEffect></TransitionEffect>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="let's dream bigger!!"
            className="mb-16 lg:!text-7xl !text-6xl sm:!text-5xl xs:!text-3xl sm:mb-8"
          ></AnimatedText>
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-2xl font-bold uppercase text-dark dark:text-light/75">
                Company presentation
              </h2>
              <p className="text-lg font-medium">
                Rihen is a multidisciplinary company at the crossroads of
                technology, art, and entertainment. It is distinguished by its
                ability to develop innovative solutions, ranging from graphics
                frameworks and animation engines to local tools for graphic
                design, 3D sculpting, and animation. Rihen also aims to build
                advanced software applications in various fields, including
                virtual and augmented reality, electronics, software security,
                and many others.
              </p>

              <p className="my-4 text-lg font-medium">
                With the ambition of becoming a key player, Rihen is developing
                a video game and animated film studio while expanding its
                horizons to sectors such as advertising, interactive electronic
                product design, and technological infrastructures. In the short
                term, it is focused on offering high-performance and accessible
                tools to creators and businesses. In the medium and long term,
                it aims to establish itself as a global reference by innovating
                in key areas such as mixed reality, software security, and
                technological integration.
              </p>

              <p className="text-lg font-medium">
                Rihen serves a wide variety of stakeholders, including creative
                studios, independent developers, technology and electronics
                companies, advertising agencies, and educational institutions,
                with a global vision of democratizing powerful solutions for
                each sector.
              </p>
            </div>
            <div
              className="col-span-3 relative h-max
            rounded-2xl border-2 border-solid border-dark bg-light p-8
             dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8"
            >
              <div
                className="absolute top-0 -right-3 -z-10
                w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light"
              />
              <Image
                alt="mihir"
                src={MainLogo}
                className="w-full h-auto rounded-2xl"
                property
                sizes="(max-width: 768px) 100vw, (max-width:120px) 50vw, 33vw"
              ></Image>
            </div>

            <div
              className="col-span-3 relative h-max
            rounded-2xl border-2 border-solid border-dark bg-light p-8
             dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8"
            >
              <div
                className="absolute top-0 -right-3 -z-10
                w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light"
              />
              <Image
                alt="mihir"
                src={Gaming}
                className="w-full h-auto rounded-2xl"
                property
                sizes="(max-width: 768px) 100vw, (max-width:120px) 50vw, 33vw"
              ></Image>
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3 ">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span
                  className="inline-block text-7xl
                 font-bold md:text-6xl sm:text-5xl xl:text-4xl"
                >
                  + <AnimatedNumber value={20} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Satisfied Clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span
                  className="inline-block text-7xl
                 font-bold md:text-6xl sm:text-5xl xl:text-4xl"
                >
                  + <AnimatedNumber value={20} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xl:text-4xl">
                  + <AnimatedNumber value={10} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  year of experience
                </h2>
              </div>
            </div>
          </div>
          <Skill></Skill>
          <Experience></Experience>
        </Layout>
      </main>
    </>
  );
};

export default about;

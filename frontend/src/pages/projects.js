import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icon";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/project1img1.png";
import project2 from "../../public/images/projects/project2img1.png";
import project3 from "../../public/images/projects/project3img1.png";
import TransitionEffect from "@/components/TransitionEffect";
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between dark:bg-dark dark:border-light 
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10
                w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light
                xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
                "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          alt={title}
          src={img}
          className="w-full h-auto"
          property
          sizes="(max-width: 768px) 100vw, (max-width:120px) 50vw, 50vw"
        ></Image>
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-1"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon></GithubIcon>
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 
          px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div
        className="absolute top-0 -right-3 -z-10
                w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl
                 dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          alt={title}
          src={img}
          className="w-full h-auto"
          property
          sizes="(max-width: 768px) 100vw, (max-width:120px) 50vw, 50vw"
        ></Image>
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-1"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className=" text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon></GithubIcon>
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects Page</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <TransitionEffect></TransitionEffect>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light ">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Engine"
            className="mb-16 lg:!text-6xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          ></AnimatedText>
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Tech Exchange"
                title="Resale Market site"
                summary="Tech exchange is a website for buying old mobiles. Buyers can buy old mobiles through this website. the first home page has 3 categories, if you click on the category button we can see the category products."
                img={project1}
                link="https://used-products-resale-45da8.web.app/"
                github="https://github.com/Mihir160/b612-used-products-resale-clients-side"
              ></FeaturedProject>
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Projects
                type="XtreameClean"
                title="cleaning service website"
                img={project2}
                link="https://b6a11-service-review.web.app/"
                github="https://github.com/Mihir160/b6a11-service-review-client-side"
              ></Projects>
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Projects
                type="Code Stack"
                title="Online Learning platform site"
                img={project3}
                link="https://code-stack-1a5a8.web.app/"
                github="https://github.com/Mihir160/b610-learning-platform-client-side"
              ></Projects>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;

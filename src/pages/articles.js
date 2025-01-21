import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import React from "react";

const articles = () => {
  return (
    <>
      <Head>
        <title>Article Page</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <TransitionEffect></TransitionEffect>
      <main>
        <Layout>
          <AnimatedText
            text="Comming Soon"
            className="mb-16 lg:!text-6xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          ></AnimatedText>
        </Layout>
      </main>
    </>
  );
};

export default articles;

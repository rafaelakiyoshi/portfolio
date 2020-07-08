import React from "react";
import Head from "next/head";
import MyParticles from "../components/particles";
import About from "../components/about"
import Projects from "../components/projects";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Rafael Akiyoshi</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <MyParticles />
      <div className="main-container">
        <About />
        <Projects />
      </div>
    </React.Fragment>
  );
}

import React from "react";
import Head from "next/head";
import MyParticles from "../components/particles";
import About from "../components/about";
import Projects from "../components/projects";
import Education from "../components/education";

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
      <About />
      <Projects />
      <Education />
      {/* <img
        src="./planet2.svg"
        style={{
          width: "400px",
          height: "300px",
          position: "absolute",
          left: 0,
        }}
      /> */}
    </React.Fragment>
  );
}

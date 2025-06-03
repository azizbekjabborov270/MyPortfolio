import React from "react";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import AboutMe from "../components/AboutMe";
import LatestProjects from "../components/LatestProjects";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const Home = () => {
  return (
    <>
      <Hero />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{ background: "#0a0a0a", padding: "0 2rem" }}
      >
        <AboutMe />
        <Skills />
        {/* <LatestProjects /> */}
        <LatestProjects />

      </motion.div>
    </>
  );
};

export default Home;

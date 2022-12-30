import React from "react";
import { motion } from "framer-motion";
import { AiFillDatabase } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const Services = () => {

    const animations = {
        whileInView: {
            x: 0,
            y:0,
            opacity: 1,
        },
        one: {
            opacity: 0,
            x: "-100%"
        },
        twoAndThree: {
            opacity: 0,
            y: "-100%"
        },
        four: {
            opacity: 0,
            x: "100%"
        }
    }

  return (
    <div id="services">
      <h2>Services</h2>
      <section>
        <motion.div className="serviceBox1" whileInView={animations.whileInView}  initial={animations.one} >
          <h3>{"<"}1</h3>
          <p>Year Experience</p>
        </motion.div>
        <motion.div className="serviceBox3" whileInView={animations.whileInView}  initial={animations.twoAndThree} >
          <FaReact />
          <span>Frontened Development</span>
        </motion.div>
        <motion.div className="serviceBox2" whileInView={animations.whileInView} initial={animations.twoAndThree} transition={{delay: 0.2}} >
          <AiFillDatabase />
          <span>Backened Development</span>
        </motion.div>
        <motion.div className="serviceBox4" whileInView={animations.whileInView}  initial={animations.four} >
          <CgWebsite />
          <span>Web Design</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;

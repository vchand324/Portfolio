import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/logo1.png";

const Home = ({ ratio }) => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientCount = () => {
    animate(100, 10, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };

  const animatetionProjectCount = () => {
    animate(500, 10, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          {
            ratio < 2 && <motion.h1 {...animations.h1}>Hi, I am Ashish</motion.h1>
          }

          <Typewriter
            options={{
              strings: ["A Full-Stack Developer", "A Designer"],
              autoStart: true,
              loop: true,
              wrapperClassName: "typewriterpara",
            }}
          />

          <div className="hire">
            <a href="mailto:rashish1313@gmail.com ">Hire Me</a>
            <a href="#work">
              Project <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p>
              +
              {ratio < 2 && (
                <motion.span
                  whileInView={animationClientCount}
                  ref={clientCount}
                >
                  10
                </motion.span>
              )}
            </p>
            <span>Clients Worlwide</span>
          </article>

          <aside>
            <article>
              <p>
                +
                {ratio < 2 && (
                  <motion.span
                    whileInView={animatetionProjectCount}
                    ref={projectCount}
                  >
                    10
                  </motion.span>
                )}
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>rashish1313@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Ashish" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;

import React from "react";
import { motion } from "framer-motion";

const Testimonial = () => {

  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Abhishek"}
          feedback={
            "I am delighted with the web development services provided by you."
          }
        />
        <TestimonialCard
          name={"shivam"}
          feedback={
            "You're doing great, just keep going. This site is also looking awesome👌."
          }
        />
        <TestimonialCard
          name={"Shanky"}
          feedback={
            "Thank you, for a website that truly represents my vision and my expectations."
          }
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => {
  const animation = {
    article: {
      initial: {
        x: "-100%",
        opacity: 0,
      },

      whileInView: {
        x: 0,
        opacity: 1,
      },

      transition: {
        delay: 0.3
      }
    },
  };

  return (
    <motion.article {...animation.article}>
      <img
        src="https://i.graphicmama.com/uploads/2019/3/5c822b20e1f09-stylish-man-cartoon-vector-character-2.png"
        alt="User"
      />
      <h4>{name}</h4>
      <p>{feedback}</p>
    </motion.article>
  );
};

export default Testimonial;

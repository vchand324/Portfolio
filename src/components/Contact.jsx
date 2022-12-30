import React, { useState } from "react";
import { toast } from "react-hot-toast";
import vg from "../assets/vg.png";
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const Contact = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [message, setMessage] = useState("");

  //   const submitHandler = (e) => {
  //     e.preventDefault();
  //     console.log({ name, email, message });
  //     toast.success("Messege Sent");
  //     setName("");
  //     setEmail(""); 
  //     setMessage("");
  //   };

  const animation = {
    form: {
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
        x: "100%",
        opacity: 0,
      },

      whileInView: {
        x: 0,
        opacity: 1,
      },

      // transition: {
      //   delay: 0
      // }
    },
  };

  const [inputs, setInputs] = useState({ name: "", email: "", message: "" });
  const [disableBtn, setDisableBtn] = useState(false);

  const changeHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setDisableBtn(true)
    try {
      await addDoc(collection(db, "contacts"), {
        ...inputs,
      });
      toast.success("Messege Sent");
      setInputs({ name: "", email: "", message: "" });
      setDisableBtn(false)
    } catch (error) {
      toast.error("Error")
      console.log(error);
      setDisableBtn(false);
    }
  };

  return (
    <div id="contact">
      <section>
        <motion.form {...animation.form} onSubmit={submitHandler}>
          <h2>Contact Me</h2>
          <input
            type="text"
            name="name"
            value={inputs.name}
            onChange={changeHandler}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={inputs.email}
            onChange={changeHandler}
            placeholder="Your Email"
            required
          />
          <input
            type="text"
            name="message"
            value={inputs.message}
            onChange={changeHandler}
            placeholder="Your Message"
            required
          />
          {/* <textarea placeholder="Type Here" rows="2"></textarea> */}

          <motion.button className={disableBtn ? "disableBtn" : ""} {...animation.button} disabled={disableBtn} type="submit">
            Send
          </motion.button>
        </motion.form>
      </section>
      <aside>
        <img src={vg} alt="vectorGraphic" />
      </aside>
    </div>
  );
};

export default Contact;

import React from "react";
import { AiOutlineArrowUp, AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import phot from '../assets/portfoliodp.png'

const Footer = () => {
  return (
    <footer>
      <div>
      <img src={phot} alt="vishal" />

        <h2>Vishal</h2>
        <p>Everything is Figureoutable ^_^</p>
      </div>

      <aside>
      <h2>Social Media</h2>
        <article>
            <a href="#" target={"blank"}>
                <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/vishal324/" target={"blank"}>
                <AiFillLinkedin />
            </a>
            <a href="https://www.instagram.com/its_arrey/" target={"blank"}>
                <AiFillInstagram /> 
            </a>
        </article>
      </aside>
      <a href="#home"><AiOutlineArrowUp /></a>
    </footer>
  );
};
export default Footer;

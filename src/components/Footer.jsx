import React from "react";
import { AiOutlineArrowUp, AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src="https://vercel.com/api/www/avatar/2642e545030466002f33f7ff3a1b53e781a32ab5?s=160"
          alt="Founder"
        />

        <h2>Ashish</h2>
        <p>Everything is Figureoutable ^_^</p>
      </div>

      <aside>
      <h2>Social Media</h2>
        <article>
            <a href="https://github.com/Ash-0002" target={"blank"}>
                <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/ashish-rajput-720b031a1/" target={"blank"}>
                <AiFillLinkedin />
            </a>
            <a href="https://www.instagram.com/factsnotice/?hl=en" target={"blank"}>
                <AiFillInstagram /> 
            </a>
        </article>
      </aside>
      <a href="#home"><AiOutlineArrowUp /></a>
    </footer>
  );
};
export default Footer;

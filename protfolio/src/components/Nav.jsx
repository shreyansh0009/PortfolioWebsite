import logo from "../assets/logo2.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function Nav() {
  return (
    <div className="flex items-center justify-between py-6">
      <div className="flex shrink-0 items-center ">
        <a href="/" aria-label="Home">
          <img className="logo w-14 h-12" src={logo} alt="logo" />
        </a>
      </div>
      <div className="mx-1 [@media(min-width:900px)]:mx-8 flex items-center justify-center gap-4 text-2xl ">
        <a
          href="https://linkedin.com/in/shreyansh0009"
          target="blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/shreyansh0009"
          target="blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/shreyansh0009/"
          target="blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="https://x.com/saurabhshreyan1"
          target="blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaXTwitter />
        </a>
      </div>
      
    </div>
  );
}

export default Nav;

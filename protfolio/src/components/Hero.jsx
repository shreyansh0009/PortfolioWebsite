import profile from "../assets/saurabhKumarProfile.jpg";
import { HERO_CONTENT } from "../constants";
import "../index.css";
import "../App.css";

function Hero() {
  return (
    <div className="pb-4 lg:mb-20">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-end pr-0 sm:pr-8 pt-8">

            <img
              src={profile}
              alt="profile"
              className="border w-[30vw] border-stone-900 rounded-3xl"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mt-10">
            <h2 className=" bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text pb-2 text-4xl tracking-tight text-transparent lg:text-8xl ">
              Saurabh Shreyansh
            </h2>
            <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-lg  py-6 text-xl leading-relaxed tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

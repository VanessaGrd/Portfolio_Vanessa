import Image from "next/image";
import Container from "./container";
import OIG from "../public/img/OIG.png";


const Hero = () => {
  return (
    <div>
      <Container className="flex flex-wrap mb-40 lg:mt-20 ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <span className="text-4xl font-normal leading-snug tracking-tight text-primary-50 lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white-50 drop-shadow-xl">Vanessa GIRAUD</span>

            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white-50 mt-4">
              Explore my web universe, where code is the star 🌠
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Transitioning from a 15-year career in healthcare, I dived headfirst into web development. <br></br>With a intensive training and a web agency internship, I now combine my coding
              passion, teamwork, and creativity to navigate the digital landscape.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="#projects"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white-50 bg-primary-50 rounded-md  hover:bg-blue-800 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] "
              >
                Explore my projects
              </a>
              <a href="https://www.linkedin.com/in/vanessagiraud/" target="_blank" rel="noopener" className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
                </svg>
                <span> View my Linkedin</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image src={OIG} width="500" height="500" className={"object-cover rounded-full"} alt="Hero Illustration" loading="eager" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;

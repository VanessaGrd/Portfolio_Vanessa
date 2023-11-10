import Html from "../public/img/html";
import Css from "../public/img/css.png";
import Javascript from "../public/img/js.png";
import Typescript from "../public/img/typescript.png";
import Node from "../public/img/node.png";
import Express from "../public/img/express.png";
import Tailwind from "../public/img/tailwind.png";
import Next from "../public/img/nextjs.png";
import MySql from "../public/img/mysql.png";
import Git from "../public/img/git.png";
import Image from "next/image";
import React from "../public/img/react";
import Hero3 from "../public/img/hero3";

const Stack = () => {

  return (
    <div id="stack" className="flex h-[100vh]  justify-center items-center lg:snap-start ">
      <div className="w-full bg-primary-50 dark:bg-transparent flex justify-center">
        <div
          className=" bg-gray-200 
  bg-clip-padding backdrop-filter backdrop-blur-sm w-full bg-opacity-10 
 py-16 px-8 m-8 dark:bg-grey-50 border border-gray-100
 rounded-2xl shadow-xl z-50"
        >
          <div className="flex flex-row items-center  w-full justify-around flex-wrap">
            <div className="hidden lg:flex">
              <Hero3 />
            </div>
            <div className="flex flex-col ">
              <div className="text-center text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-dark-50">My stack 🚀</div>

              <div className="flex flex-row max-w-3xl flex-wrap justify-center gap-5 mt-10 md:justify-around">
                <div className="pt-2 text-gray-400 dark:text-gray-400">
                  <React />
                </div>
                <div className="pt-2 text-gray-400 flex justify-center items-center dark:text-gray-400">
                  <Image src={Next} width="100" height="100" className="text-center" alt="Hero Illustration" loading="eager" />{" "}
                </div>
                <div className="text-gray-400 dark:text-gray-400">
                  <Image src={Javascript} width="100" height="100" className={"object-cover"} alt="Hero Illustration" loading="eager" />
                </div>
                <div className="pt-1 text-gray-400 dark:text-gray-400">
                  <Image src={Typescript} width="93" height="93" className={"object-cover"} alt="Hero Illustration" loading="eager" />
                </div>
                <div className="pt-2 text-gray-400 dark:text-gray-400">
                  <Image src={Node} width="100" height="100" className={"object-cover"} alt="Hero Illustration" loading="eager" />
                </div>
                <div className="pt-2 flex justify-center items-center text-gray-400 dark:text-gray-400">
                  <Image src={Express} width="100" height="100" className={"object-cover"} alt="Hero Illustration" loading="eager" />
                </div>
                <div className="pt-2 flex justify-center items-center text-gray-400 dark:text-gray-400">
                  <Image src={MySql} width="100" height="100" className={"object-cover"} alt="Hero Illustration" loading="eager" />
                </div>
                <div className="pt-2 text-gray-400 dark:text-gray-400">
                  <Html />
                </div>
                <div className="text-gray-400 dark:text-gray-400">
                  {" "}
                  <Image src={Css} width="90" height="90" className={"object-cover"} alt="Hero Illustration" loading="eager" />
                </div>

                <div className="pt-2 text-gray-400 dark:text-gray-400">
                  <Image src={Tailwind} width="100" height="100" className={"object-cover"} alt="Hero Illustration" loading="eager" />{" "}
                </div>
                <div className="pt-2 text-gray-400 dark:text-gray-400">
                  <Image src={Git} width="100" height="100" className={"object-cover"} alt="Hero Illustration" loading="eager" />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;

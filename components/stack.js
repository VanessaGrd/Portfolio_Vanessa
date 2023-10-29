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

const Stack = () => {
  return (
    <div id="stack" className="flex h-[100vh] justify-center items-center lg:snap-start">
      <div className="pt-16 pb-16 m-8 dark:bg-grey-50 max-w-3xl dark:rounded-2xl">
        <div className="flex flex-col max-w-3xl justify-center  ">
          <div className="text-center text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-dark-50">My stack 🚀</div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
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
  );
};

export default Stack;

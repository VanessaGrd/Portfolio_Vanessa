import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import Vanessa_Giraud from "../public/img/Vanessa_GIRAUD.png";

export default function Navbar() {
  const navigation = ["About Me", "Stack", "Recommendations","Projects"];

  const onButtonClick = () => {
    fetch("CV Vanessa GIRAUD - Développeuse (2).pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CV Vanessa GIRAUD - Alternance Développeuse Web.pdf";
        alink.click();
      });
    });
  };

  return (
    <div id="about me" className="w-full lg:snap-start">
      <nav className="container relative flex flex-wrap items-center justify-between mt-4 mx-auto lg:justify-between xl:px-0 ">
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <div className="flex flex-col lg:flex-row w-auto">
                  <span className="flex items-center space-x-2 text-2xl font-normal flex-row text-grey-500 dark:text-gray-100">
                    <Image src={Vanessa_Giraud} alt="N" width="170" height="100" className=" drop-shadow-xl " />
                  </span>
                </div>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto  text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap justify-center flex-col w-full my-5 lg:hidden">
                  <>
                    {navigation.map((menu, index) => (
                      <li className="list-none	" key={index}>
                        <Link
                          href={`#${menu.toLowerCase()}`}
                          className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-primary-50 focus:text-primary-50 focus:bg-primary-100 focus:outline-none dark:focus:bg-gray-800"
                        >
                          {menu}
                        </Link>
                      </li>
                    ))}
                  </>
                  <button onClick={onButtonClick} className="px-6 py-2 text-white-50 bg-primary-50 rounded-md hover:bg-blue-800  md:ml-5">
                    Download my resume
                  </button>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div
          className="hidden text-center lg:flex lg:items-center 
       "
        >
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href={`#${menu.toLowerCase()}`}
                  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-primary-50 focus:text-primary-50 focus:bg-primary-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <button onClick={onButtonClick} className="px-6 py-2 text-white-50 bg-primary-50 rounded-md hover:bg-blue-800  md:ml-5">
            Download my resume
          </button>
          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}

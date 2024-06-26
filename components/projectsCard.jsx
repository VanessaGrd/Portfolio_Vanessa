import Image from "next/image";
import { useState } from "react";

export default function ProjectsCard({picture, title, subtitle, techno, github, link, modalImages}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };
  return (
    <div className="lg:flex lg:flex-col  lg:snap-start justify-between bg-secondary-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 lg:w-[30rem] lg:h-[40rem]">
      <div className="  flex justify-center">
        <Image lstyle={{ objectFit: "contain" }} className="rounded-t-lg" src={picture} alt={title} />
      </div>
      <div className="p-5 flex justify-between flex-col items-center">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white-50">{title}</h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {subtitle} <br></br>
          <br /> <span className="italic	">{techno}</span>
        </p>
        <div className="flex flex-row w-full justify-around">
          <a href={github} target="_blank">
            <svg width="30px" height="30px" viewBox="0 -0.5 24 24" id="meteor-icon-kit__solid-github" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.2047 0.00001C6.56031 -0.005731 1.74628 4.08615 0.842541 9.6577C-0.061195 15.2293 3.2126 20.6331 8.56941 22.4118C9.14823 22.5177 9.35294 22.1577 9.35294 21.8541C9.35294 21.5506 9.35294 20.8588 9.35294 19.8988C6.14117 20.5977 5.46353 18.3529 5.46353 18.3529C5.25046 17.6572 4.79779 17.0595 4.18588 16.6659C3.14823 15.96 4.27059 15.96 4.27059 15.96C5.00761 16.0641 5.65578 16.5014 6.02823 17.1459C6.34368 17.7179 6.87393 18.1406 7.50179 18.3208C8.12965 18.5009 8.8034 18.4236 9.37411 18.1059C9.41842 17.5252 9.66876 16.9794 10.08 16.5671C7.5247 16.2777 4.84235 15.2894 4.84235 10.92C4.82481 9.7786 5.24688 8.67412 6.02117 7.8353C5.67632 6.84285 5.71662 5.7571 6.13412 4.79295C6.13412 4.79295 7.10117 4.48236 9.29647 5.97177C11.1816 5.45419 13.1713 5.45419 15.0565 5.97177C17.2518 4.48236 18.2118 4.79295 18.2118 4.79295C18.6351 5.74689 18.6854 6.82486 18.3529 7.81412C19.1272 8.65294 19.5493 9.7574 19.5318 10.8988C19.5318 15.3177 16.8424 16.2847 14.28 16.5459C14.8359 17.1047 15.1218 17.8774 15.0635 18.6635C15.0635 20.2024 15.0635 21.4447 15.0635 21.8188C15.0635 22.1929 15.2682 22.4824 15.8541 22.3694C21.1473 20.5447 24.3569 15.1728 23.4554 9.6469C22.5539 4.1211 17.8034 0.04779 12.2047 0.00001z"
                fill="#758CA3"
              />
            </svg>
          </a>
          {modalImages ? (
            <button
              onClick={openModal}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary-50 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-primary-50 dark:hover:bg-primary-50 dark:focus:ring-blue-800"
            >
              View more
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </button>
          ) : (
            <a
              href={link}
              target="_blank"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary-50 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-primary-50 dark:hover:bg-primary-50 dark:focus:ring-blue-800"
            >
              Visit website
            </a>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center  overflow-auto bg-white-50">
          <div className="grid lg:grid-cols-2 gap-2 p-16 	">
            {modalImages.map((image, index) => (
              <Image className="rounded-lg" src={image} alt={title} />
            ))}
          </div>
          <button className="text-secondary-50 bg-dark-100 rounded-md text-3xl p-2 fixed top-10 right-10" onClick={closeModal}>
            X
          </button>
        </div>
      )}
    </div>
  );
}

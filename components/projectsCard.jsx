import Image from "next/image";
import { useState } from "react";

export default function ProjectsCard({picture, title, subtitle, link, modalImages}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };
  return (
    <div className="lg:flex lg:flex-col  lg:snap-start justify-around bg-white-50 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2 w-[30rem] h-[40rem]">
      <div className="  flex justify-center">
        <Image layout="responsive" className="rounded-lg" src={picture} alt={title} />
      </div>
      <div className="p-5 flex justify-between flex-col items-center">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white-50">{title}</h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{subtitle}</p>
        {modalImages ? (
          <button
            onClick={openModal}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary-50 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-primary-50 dark:focus:ring-blue-800"
          >
            View more
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </button>
        ) : (
          <a
            href={link}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary-50 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-primary-50 dark:focus:ring-blue-800"
          >
            Visit Site
          </a>
        )}
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center  bg-white-50">
          <div className="grid grid-cols md:grid-cols-3 gap-2">
             {modalImages.map((image, index) => (
            <Image layout="responsive" className="rounded-lg" src={image} alt={title} />))}
          </div>
          <button className="text-grey-900 text-4xl fixed top-10 right-10" onClick={closeModal}>
            X
          </button>
        </div>
      )}
    </div>
  );
}

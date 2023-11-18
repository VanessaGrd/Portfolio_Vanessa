export default function Recommendations () {

    return (
      <div id="recommendations" className=" lg:snap-start h-[100vh] flex justify-center flex-col lg:p-60">
        <div className="text-center text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white-50 mb-12">
          Recommendations 🛸
        </div>
        <div class="grid  rounded-lg dark:border-gray-700 md:mb-12 md:grid-cols-2   gap-4">
          <figure class="flex  bg-gray-100 flex-col items-center justify-center p-8 text-center  rounded-t-lg md:rounded-t-none md:rounded-ss-lg  dark:bg-gray-800 shadow-md ">
            <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white-50">Internship "WebInCompany" 07/2023-09/2023</h3>

              <p class="my-4">
                "Congratulations Vanessa,you were able to adapt perfectly and learn all the technologies very quickly.I hope you find an employer quickly.And if anyone ever reads this, go ahead with
                your eyes closed.Vanessa is curious, proactive, efficient and attentive. Good luck to you😊"
              </p>
            </blockquote>
            <figcaption class="flex items-center justify-center ">
              <img
                class="rounded-full w-9 h-9"
                src="https://img.freepik.com/photos-gratuite/vue-homme-affaires-confiant-3d_23-2150709932.jpg?w=740&t=st=1700339215~exp=1700339815~hmac=64877e9c75ecda8db62c0df096c1acad78088b8356a3c9196e11b4e11956276c"
                alt="profile picture"
              />
              <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Vincent COTTALORDA </div>
                <div class="text-sm text-gray-500 dark:text-gray-400 ">Web Developer - Web In company</div>
              </div>
            </figcaption>
          </figure>
          <figure class="flex flex-col items-center justify-center p-8 text-center  md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700  bg-gray-100 shadow-md ">
            <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white-50">My future employer</h3>
              <p class="my-4"></p>
            </blockquote>
            <figcaption class="flex items-center justify-center ">
              <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture" />
              <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div></div>
                <div class="text-sm text-gray-500 dark:text-gray-400"></div>
              </div>
            </figcaption>
          </figure>
          <figure class="flex flex-col items-center justify-center p-8 text-center bg-white  md:rounded-es-lg  dark:bg-gray-800  bg-gray-100 shadow-md ">
            <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white-50">My future employer</h3>
              <p class="my-4"></p>
            </blockquote>
            <figcaption class="flex items-center justify-center ">
              <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
              <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div></div>
                <div class="text-sm text-gray-500 dark:text-gray-400"></div>
              </div>
            </figcaption>
          </figure>
          <figure class="flex flex-col items-center justify-center p-8 text-center  bg-gray-100 border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 shadow-md ">
            <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white-50">My future employer</h3>
              <p class="my-4"></p>
            </blockquote>
            <figcaption class="flex items-center justify-center ">
              <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture" />
              <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div></div>
                <div class="text-sm text-gray-500 dark:text-gray-400"></div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    );
}
import wildkedin1 from "../public/img/Wildkedin1.png";
import applevolunteers from "../public/img/applevolunteers.png";
import dailyexpat from "../public/img/dailyexpat.png";
import emmaus from "../public/img/emmaus.png";
import emmaus2 from "../public/img/emmaus2.png";
import innovin from "../public/img/innovin.png";
import innovin2 from "../public/img/innovin2.png";
import innovin3 from "../public/img/innovin3.png";
import innovin4 from "../public/img/innovin4.png";
import innovin5 from "../public/img/innovin5.png";
import innovin6 from "../public/img/innovin6.png";
import innovin7 from "../public/img/innovin7.png";
import stockholm1 from "../public/img/stockholm1.png";
import stockholm2 from "../public/img/stockholm2.png";
import stockholm4 from "../public/img/stockholm4.png";
import stockholm5 from "../public/img/stockholm5.png";
import stockholm6 from "../public/img/stockholm6.png";
import stockholm7 from "../public/img/stockholm7.png";
import stockholmeasy from "../public/img/stockholmeasy.png";
import ProjectsCard from "./projectsCard";

import emmaus5 from "../public/img/E1.png";
import emmaus3 from "../public/img/E2.png";
import emmaus4 from "../public/img/E3.png";
import movie from "../public/img/movie+.png";
import portfolio from "../public/img/portfolio.png";

import PR_addMember from "../public/img/PR_CheckerAddMember.png";
import PR_notification from "../public/img/PR_CheckerNotification.png";
import PR_changePR from "../public/img/PR_checkerChangePR.png";
import PR_connection from "../public/img/PR_checkerConnection.png";
import PR_addProject from "../public/img/PR_checkerCreateProject.png";
import PR_joinProject from "../public/img/PR_checkerJoinProject.png";
import PR_login from "../public/img/PR_checkerLogin.png";
import PR_projects from "../public/img/PR_checkerProjects.png";
import PR_settins from "../public/img/PR_checkerSettings.png";

export default function Projects() {
  return (
    <div
      id="projects"
      className="flex justify-center mt-20 items-center flex-col lg:snap-start"
    >
      <div className="text-center text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white-50 my-16">
        My projects 🪐
      </div>
      <div className=" items-center grid grid-cols md:grid-cols-3 gap-4">
        <div>
          <ProjectsCard
            title="PR_Checker"
            subtitle="Collaborative project with 3 other developers which allows easier management of pull requests. 
            Application used by Wild Code School trainers!👨‍🏫 "
            techno="            Technologies used :
            JavaScript, React, Supabase, HTML, CSS, Figma"
            picture={PR_login}
            modalImages={[
              PR_login,
              PR_connection,
              PR_addProject,
              PR_projects,
              PR_joinProject,
              PR_changePR,
              PR_notification,
              PR_settins,
              PR_addMember,
            ]}
            github="https://github.com/VanessaGrd/Stockholm-easy.git"
          />
        </div>
        <div>
          <ProjectsCard
            title="Stockholm Easy"
            subtitle="My personal project is dedicated to Stockholm, helping tourists generate customized program. With user and admin authentication, visitors can easily discover the best food, attractions, and accommodations in the city. This project reflects my love for Sweden🇸🇪. "
            techno="            Technologies used :
            HTML, SCSS, JavaScript, React, NodeJs, ExpressJs, MySQL, Figma"
            picture={stockholmeasy}
            modalImages={[
              stockholm5,
              stockholm6,
              stockholm1,
              stockholm2,
              stockholm7,
              stockholm4,
            ]}
            github="https://github.com/VanessaGrd/PR-checker"
          />
        </div>
        <div>
          <ProjectsCard
            title="Porfolio Vanessa G."
            subtitle="My Web Developer Portfolio showcases my educational and personal projects, showcasing my web development expertise. This portfolio is available in darkmode and responsive. Explore my work and feel free to contact me for collaboration opportunities."
            techno="            Technologies used :
            HTML, SCSS, JavaScript, React, NextJs13, Tailwind"
            picture={portfolio}
            github="https://github.com/VanessaGrd/Portfolio_Vanessa.git"
          />
        </div>
        <div>
          <ProjectsCard
            title="Innovin"
            subtitle="3rd educational project (group of 3): an application with user and administrator access for wine tasting and personalized wine creation workshops🍷."
            techno="            Technologies used :
            HTML, CSS, JavaScript, React, NodeJs, ExpressJs, Git/Github, MySQL, MUI, Formik, Yup, Scrum, Trello, Figma"
            picture={innovin}
            modalImages={[
              innovin2,
              innovin3,
              innovin4,
              innovin5,
              innovin6,
              innovin7,
            ]}
            github="https://github.com/VanessaGrd/2023-02-JS-FT-Lyon-P3-InnoVin.git"
          />
        </div>
        <div>
          <ProjectsCard
            title="Emmaüs Connect"
            subtitle="48-hours hackathon project in a group of 3: a website designed for smartphone resale based on conditions with authentication 📱."
            techno="
            Technologies used :
            HTML, CSS, JavaScript, React, NodeJs, ExpressJs, Git/Github, MySQL"
            picture={emmaus}
            modalImages={[emmaus5, emmaus2, emmaus3, emmaus4]}
            github="https://github.com/VanessaGrd/Hackathon2-EmmausConnect.git"
          />
        </div>
        <div>
          <ProjectsCard
            title="Movie +"
            subtitle="My first project, developped during my web development studies, a smart platform showcasing movies, offering seamless sorting by release date, suggesting similar films.🍿"
            techno="
Technologies used :
HTML, CSS, React, JavaScript, API, NodeJS, Express, Git/Github."
            picture={movie}
            link="https://movieplusapp.netlify.app/"
            github="https://github.com/VanessaGrd/Movie_Plus.git"
          />
        </div>
        <div>
          <ProjectsCard
            title="Apple Volunteers"
            subtitle=" 
          Group project (POC) of 3, carried out in 24 hours during a hackathon. 

Site of an association which proposes to reserve free tours of New York 🗽."
            techno="
Technologies used :
HTML, CSS, React, JavaScript, API, NodeJS, Express, Git/Github, Figma, Trello."
            picture={applevolunteers}
            link="https://apple-volunteers.netlify.app/"
            github="https://github.com/VanessaGrd/hackathon1.git"
          />
        </div>

        <div>
          <ProjectsCard
            title="Daily Expat"
            subtitle="Educational project in groups of 3. Website for expatriates who wish to reconnect with their
                      country of origin.
                      They can find images, music, recipes and news
                      from their country 🌍."
            techno="
                      Technologies used: HTML, CSS, React, JavaScript,
                      API, NodeJS, Git/Github, Figma, Trello."
            picture={dailyexpat}
            link="https://daily-expat.netlify.app/"
            github="https://github.com/VanessaGrd/2023-02-JS-FT-Lyon-P2-TheNomads.git"
          />
        </div>
        <div>
          <ProjectsCard
            title="Wildkedin"
            subtitle="Educational project (group of 4).
WCS students portfolio for recruiters which can filter based on hardskills and softskills sought. 
You can find my picture on this site!😉"
            techno="Technologies used :HTML, CSS, JavaScript, Git/Github, Figma, Trello."
            picture={wildkedin1}
            link="https://wildcodeschool.github.io/2023-02-JS-FT-Lyon-P1-WeWildin/"
            github="https://github.com/VanessaGrd/2023-02-JS-FT-Lyon-P1-WeWildin.git"
          />
        </div>
      </div>
    </div>
  );
}

import user1 from "../public/img/user1.jpg";
import ProjectsCard from "./projectsCard";
import wildkedin1 from "../public/img/Wildkedin1.png";
import dailyexpat from "../public/img/dailyexpat.png";
import applev from "../public/img/applev.png";
import applev2 from "../public/img/applev2.png";
import applev3 from "../public/img/applev3.png";
import applevolunteers from "../public/img/applevolunteers.png";

export default function Projects() {
  return (
    <div className="flex justify-center items-center flex-col lg:snap-start">
      <div className="text-center text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-dark-50 my-20">My projects 🪐</div>
      <div class="h-[100vh] items-center grid grid-cols md:grid-cols-3 gap-2 ">
        <div>
          <ProjectsCard
            title="Wildkedin"
            subtitle="Educational project in groups of 4.

WCS student portfolio for recruiters which can filter based on hardskills and softskills sought.

Technologies used :
HTML, CSS, JavaScript, Git/Github, Figma, Trello."
            picture={wildkedin1}
            link="https://wildcodeschool.github.io/2023-02-JS-FT-Lyon-P1-WeWildin/"
          />
        </div>
        <div>
          <ProjectsCard
            title="Daily Expat"
            subtitle="Site for expatriates who wish to reconnect with their
                      country of origin.
                      They can find images, music, recipes and news
                      from their country. 
                      Technologies used: HTML, CSS, React, JavaScript,
                      API, NodeJS, Git/Github, Figma, Trello."
            picture={dailyexpat}
            link="https://daily-expat.netlify.app/"
          />
        </div>
        <div>
          <ProjectsCard
            title="Apple Volunteers"
            subtitle=" 
          Group project (POC) of 3, carried out in 24 hours during a hackathon. .

Site of an association which proposes to reserve free tours of New York.

Technologies used :
HTML, CSS, React, JavaScript, API, NodeJS, Git/Github, Figma, Trello."
            picture={applevolunteers}
            link="https://apple-volunteers.netlify.app/"
            modalImages={[applev, applev2, applev3]}
          />
        </div>
        <div>
          <ProjectsCard title="Hello" subtitle="World" picture={user1} />
        </div>

        <div>
          <ProjectsCard title="Hello" subtitle="World" picture={user1} />
        </div>
        <div>
          <ProjectsCard title="Hello" subtitle="World" picture={user1} />
        </div>
      </div>
    </div>
  );
}

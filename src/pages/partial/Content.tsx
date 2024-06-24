import React from "react";
import charredImage from "../../img/charred-project.png";
import compro from "../../img/compro.png";

const Content: React.FC = () => {
  const events = [
    "2022: Bachelor Degree of Biomedical Engineering",
    "2022: Project-Based Intern: VIX FE Core Initiative Studio",
    "2023: RevoU Fundamental Course Software Engineering",
    "2023: Telkom Intern: Making Yii Framework Projects",
    "2024: Full-stack Web Development Bootcamp Purwadhika",
  ];
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      {/* Timeline */}

      <div className="timelines flex flex-col mb-4" id="timeline">
        <h2 className="text-center mb-4 text-3xl font-bold">Timeline</h2>
        <div className="block max-xl:hidden">
          <ul className="timeline">
            {events.map((event, index) => (
              <li key={index}>
                <div className="timeline-start">{event.split(": ")[0]}</div>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box">
                  {event.split(": ")[1]}
                </div>
                {index < events.length - 1 && <hr />}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden max-xl:block">
          <ul className="list-disc pl-5">
            {events.map((event, index) => (
              <li key={index} className="mb-2">
                {event}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Others Project */}
      <div className="flex flex-col" id="projects">
        <h2 className="text-center mb-3">Projects</h2>
        <div className="flex flex-row max-md:flex-col gap-4">
          {/* Card 1 Charred Project Book */}
          <div className="card w-96 bg-base-200 shadow-xl">
            <figure className="max-h-[12.5rem]">
              <img src={charredImage} alt="website-charred" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Charred Project Website</h2>
              <p>
                Website of Noir Rosetea's books those published by One PEACH
                Media.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">
                  <a
                    href="https://nadirras.github.io/charred-project/"
                    target="_blank"
                  >
                    See Details
                  </a>
                </button>
              </div>
            </div>
          </div>
          {/* Card 2 Company Profile */}
          <div className="card w-96 bg-base-200 shadow-xl">
            <figure className="max-h-[15rem]">
              <img src={compro} alt="compro" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Company Profile</h2>
              <p>
                Company profile serves as a comprehensive overview of a company
                intending to execute a sequence of coordinated promotions via a
                website. Our task is to tackle a code challenge aimed at
                showcasing my front-end development skills. The task involved
                creating a company profile website to fulfill specific
                requirements. Leveraging HTML, CSS, and JavaScript, alongside
                frameworks like Next.js. The resulting website, hosted on
                Vercel, effectively communicated the company's ethos and
                offerings.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">
                  <a
                    href="https://mangroveshield-corp.vercel.app/"
                    target="_blank"
                  >
                    See Details
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

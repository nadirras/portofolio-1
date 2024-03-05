import React from "react";
import charredImage from "../../img/charred-project.png";
import vueImage from "../../img/vue-project.png";

const Content: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      {/* Timeline */}

      <div className="timelines flex flex-col mb-4" id="timeline">
        <h2 className="text-center">Timeline</h2>
        <div>
          <ul className="timeline">
            <li>
              <div className="timeline-start timeline-box w-4/5 text-center">
                2022: Bachelor Degree of Biomedical Engineering
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box w-4/5 text-center">
                2022: Project-Based Intern: VIX FE Core Initiative Studio
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start timeline-box w-4/5 text-center">
                2023: RevoU Fundamental Course Software Engineering{" "}
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box w-4/5 text-center">
                2023: Telkom Intern: Making Yii Framework Projects
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Others Project */}
      <div className="flex flex-col" id="projects">
        <h2 className="text-center mb-3">Projects</h2>
        <div className="flex flex-row max-md:flex-col gap-4">
          {/* Card 1 Charred Project Book */}
          <div className="card w-96 bg-base-200 shadow-xl">
            <figure>
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
          {/* Card 2 Vue Project */}
          <div className="card w-96 bg-base-200 shadow-xl">
            <figure>
              <img src={vueImage} alt="vue-project" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Vue Project E-commerce</h2>
              <p>
                Making Vue Project E-commerce as a final project of Project
                Intern VIX in Rakamin Academy.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">
                  <a
                    href="https://github.com/nadirras/ecommerce-catalog"
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

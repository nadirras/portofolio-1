import React from "react";
import htmlLogo from "../../img/html-logo.png";
import cssLogo from "../../img/css-logo.png";
import jsLogo from "../../img/js-logo.png";

const Skill: React.FC = () => {
  return (
    <div id="skills">
      {/* <div className="line h-px" style={{ background: "white" }}></div> */}
      <h2 className="text-center mb-4">Tools and Skills</h2>
      <div className="flex justify-center items-center">
        <div className="flex flex-row gap-2 max-w-[30rem] ">
          <div className="card w-96 bg-base-200 shadow-xl">
            <div className="card-body">
              <img src={htmlLogo} />
            </div>
          </div>
          <div className="card w-96 bg-base-200 shadow-xl">
            <div className="card-body">
              <img src={cssLogo} />
            </div>
          </div>
          <div className="card w-96 bg-base-200 shadow-xl">
            <div className="card-body">
              <img src={jsLogo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skill;

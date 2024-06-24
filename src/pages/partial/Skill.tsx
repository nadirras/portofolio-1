import React from "react";

const Skills = () => {
  const skills = {
    "Programming Languages": ["Python", "Pascal", "Javascript", "TypeScript"],
    "Frameworks & Libraries": [
      "ReactJS",
      "NextJS",
      "TailwindCSS",
      "ExpressJS",
      "Prisma",
    ],
    "Tools & Platforms": [
      "Machine Learning",
      "Git & Github",
      "Visual Studio Code",
    ],
    Languages: ["English (Intermediate)", "Japanese Language (Beginner)"],
  };

  return (
    <div id="skills" className="py-10">
      <h2 className="text-3xl text-center mb-8 font-bold">Tools and Skills</h2>
      <div className="flex flex-col items-center gap-8">
        {Object.entries(skills).map(([category, skillList]) => (
          <div
            key={category}
            className="card w-full md:w-3/4 bg-base-200 shadow-xl p-5"
          >
            <h3 className="card-title text-xl mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill) => (
                <div
                  key={skill}
                  className="card bg-base-100 w-36 shadow-xl p-3"
                >
                  <p className="text-center">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

// src/pages/Home.tsx

import React, { useEffect, useState } from "react";

import Hero from "./partial/Hero";
import Content from "./partial/Content";
import Skill from "./partial/Skill";
import Loader from "./partial/Loader";
import Navbar from "./partial/Navbar";

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Scroll-linked animation values
  // const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  // const translateY = useTransform(scrollY, [0, 500], [0, -100]);
  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div data-theme="sunset" className="overflow-x-hidden">
      {/* Loader or actual content based on loading state */}
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* Navbar Section */}
          <Navbar />
          <div className="container2 flex flex-col gap-4" id="home">
            {/* Hero Section */}
            <Hero />
            {/* Content Section */}
            <Content />
            {/* Skill Section */}
            <Skill />
            {/* Footer Section */}
            <footer className="footer items-center p-4 bg-neutral text-neutral-content">
              Nadirra. All Right Reserved
            </footer>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import sopanImage from "../../img/sopan.png";
import linkedIn from "../../img/LinkedIn_logo.png";
import gitHub from "../../img/github_logo2.png";
import catImage from "../../img/kucing-cibiru.png";
const Hero: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    const modal = document.getElementById("my_modal_2") as HTMLDialogElement | null;

    if (modal) {
      if (isModalOpen) {
        modal.showModal();
      } else {
        modal.close();
      }
    }
  }, [isModalOpen]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="hero min-h-screen bg-base-200 flex flex-row gap-2 justify-center items-center bg-gradient-to-t from-[#121c22] to-[#2b4960] h-[10px]">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            よう<span className="text-[#fc845a]">こそ、</span>
          </h1>

          <h1>
            <span className="text-[#fc845a]">Nadirra</span> is here!
          </h1>
          <p className="py-6">I'm actually a Biomedical Engineering undergraduate who stumbled upon on web development. I'm looking forward to collaborate with you!</p>
          <button className="btn btn-primary" onClick={openModal}>
            Contact Me
          </button>
          {/* Open the modal using document.getElementById('ID').showModal() method */}

          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg mb-3">Contact Me</h3>
              <div className="flex flex-row gap-10 justify-center items-center">
                <a href="https://www.linkedin.com/in/nadirra-s-3a36b0118/" target="_blank" className="card w-[7rem] h-auto">
                  <img src={linkedIn} />
                </a>
                <a href="https://github.com/nadirras" target="_blank" className="card w-[7rem] h-auto">
                  <img src={gitHub} />
                </a>
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button onClick={closeModal}>close</button>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Hero;

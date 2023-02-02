import React, { useState } from "react";
import Modal from "react-modal";
import { GrClose } from "react-icons/gr";

function Sidebar() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const openModal = () => {
    setModalIsOpen(true);
  };

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <aside className="sidebar">
        <div className="logo">
          <a>
            Brand <span>Colors</span>
          </a>
        </div>

        <div className="descriotion">
          <p>
            Brand Colors is a simple tool for picking contrasting colors for
            your UI design. It generates a color palette from a single color and
            provides the color codes in HEX, RGB and HSL formats.
          </p>
        </div>

        <nav className="menu">
          <ul>
            <li>
              <a onClick={openModal}>About Brand Colors</a>
            </li>
          </ul>
        </nav>
      </aside>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        contentLabel="Example Modal"
        className="about-modal"
        overlayClassName="about-modal-overlay"
      >
        <button className="modal-close-btn" onClick={toggleModal}>
            <GrClose />
        </button>
        <h2>About Brand Colors</h2>
        <p>
          Brand Colors is a simple tool for picking contrasting colors for your
          UI design. It generates a color palette from a single color and
          provides the color codes in HEX, RGB and HSL formats.

          Brand Colors is a simple tool for picking contrasting colors for your
          UI design.    
        </p>
        <br></br>
     
        <br></br>
      </Modal>
    </>
  );
}

export default Sidebar;

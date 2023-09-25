import React from "react";
import "./slidebars.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const SlideBar = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    return (
        <div className="App">
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
            <Modal isOpen={modalIsOpen}>
                <button onClick={() => setIsOpen(false)}>Close Modal</button>
            </Modal>
        </div>
    );
}
export default SlideBar;
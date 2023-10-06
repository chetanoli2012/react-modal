import { useState } from "react";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow((prevVal) => !prevVal);
  };

  return (
    <div className="app">
      <button onClick={handleShow}>{show ? "hide" : "show"} modal</button>
      <Modal show={show} title={"Modal title"} onClose={handleShow}>
        <h1>This is modal's body</h1>
      </Modal>
    </div>
  );
}

const Modal = ({ show, onClose, title, children }) => {
  return (
    show && (
      <>
        <div className="modal-backdrop" onClick={onClose}></div>
        <div className={`modal-wrapper ${show ? "active" : ""}`}>
          <div className="modal-header">
            <div className="modal-title"> {title}</div>
            <span className="modal-close" onClick={onClose}>
              x
            </span>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </>
    )
  );
};

export default App;

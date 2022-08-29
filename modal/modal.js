const { useState } = React;

const ModalButton = function ({ handlerModal, btnText }) {
  return (
    <button className="btn btn-open" onClick={handlerModal}>
      {btnText}
    </button>
  );
};

const Modal = function ({ btnText }) {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <div className="block-modal">
      <ModalButton handlerModal={toggleModal} btnText={"Say Hello!"} />
      <div className={modalOpen ? "modal modal-show" : "modal"}>
        <div className="modal-body">
          <p className="modal-content">{btnText}</p>
          <button className="btn btn-close" onClick={toggleModal}>
            Bye
          </button>
        </div>
      </div>
    </div>
  );
};

const App = function () {
  return (
    <div className="container">
      <Modal btnText={"Hi, I am a react modal"} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

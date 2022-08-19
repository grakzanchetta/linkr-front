import { useState } from "react";
import Modal from "react-modal";
import { useGlobal } from "../../../../context/globalContext";
import deletePost from "../../../../services/api/deletePost";
import createRePost from "../../../../services/api/createRePost";
import { RotatingLines } from "react-loader-spinner";
import { modalStyle, divStyle, buttonStyle1, buttonStyle2 } from "./styles";

const loadingSpinner = <RotatingLines strokeColor="#fff" width="120" />;

function Dialog({ modalIsOpen, setIsOpen, posts, setPosts, id, msg }) {
  const [loading, setLoading] = useState(false);
  const { global } = useGlobal();
  Modal.setAppElement("#modal");

  function delPost() {
    if (loading === true) return;

    setLoading(true);

    if (msg !== undefined) {
      createRePost(global, id, setIsOpen);
    } else {
      deletePost(id, global, posts, setPosts);
    }
  }

  const contentModal = (
    <>
      <h6>
        {msg === undefined ? "Are you sure you want to delete this post?" : msg}
      </h6>
      <div style={divStyle}>
        <button style={buttonStyle1} onClick={() => setIsOpen(false)}>
          {msg === undefined ? "No, go back" : "No, cancel"}
        </button>
        <button style={buttonStyle2} onClick={delPost}>
          {msg === undefined ? "Yes, delete it" : "Yes, share!"}
        </button>
      </div>
    </>
  );

  const hanleModal = () => (loading === false ? contentModal : loadingSpinner);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setIsOpen(false)}
      style={modalStyle}
    >
      {hanleModal()}
    </Modal>
  );
}

export default Dialog;

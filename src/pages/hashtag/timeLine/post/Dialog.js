import { useState } from "react";
import Modal from "react-modal";
import { useGlobal } from "../../../../context/globalContext";
import deletePost from "../../../../services/api/deletePost";
import { RotatingLines } from "react-loader-spinner";
import { modalStyle, divStyle, buttonStyle1, buttonStyle2 } from "./styles";

const loadingSpinner = <RotatingLines strokeColor="#fff" width="120" />;

function Dialog({ modalIsOpen, setIsOpen, posts, setPosts, id }) {
  const [loading, setLoading] = useState(false);
  const { global } = useGlobal();
  Modal.setAppElement("#modal");

  function delPost() {
    if (loading === true) return;

    setLoading(true);

    deletePost(id, global, posts, setPosts);
  }

  const contentModal = (
    <>
      <h6>Are you sure you want to delete this post?</h6>
      <div style={divStyle}>
        <button style={buttonStyle1} onClick={() => setIsOpen(false)}>
          No, go back
        </button>
        <button style={buttonStyle2} onClick={delPost}>
          Yes, delete it
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

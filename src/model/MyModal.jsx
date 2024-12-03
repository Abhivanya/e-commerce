import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Style from "./MyModal.module.css";
function MyModal() {
  return (
    <div className={`modal show`}>
      <Modal.Dialog className={`${Style.container}modal show`}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default MyModal;
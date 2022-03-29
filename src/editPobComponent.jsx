import React from "react";
import { Modal } from "react-bootstrap";
import EditForm from "./editeForm";

export default function MyVerticallyCenteredModal(props) {
  const { updatelsttodo, ...others } = props;
  return (
    <Modal
      {...others}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edite Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditForm
          // props={props}
          hidePopUp={props.onHide}
          selecteditem={props.choosenitem}
          mylist={props.list}
          myindex={props.index}
          updatelsttodo={updatelsttodo}
        />
      </Modal.Body>
    </Modal>
  );
}

import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { ModalXSvg } from "../svg";
import "./modal.css";
export default function Modals({
  children,
  title,
  componentModal,
  setComponentModal,
}) {
  return (
    <Modal
      open={componentModal}
      onClose={() => setComponentModal(!componentModal)}
      center
      closeIcon={<ModalXSvg />}
      showCloseIcon={false}
    >
      <div className="modalHeader">
        <p>{title}</p>
        <div
          className="cancelModalHeader"
          onClick={() => {
            setComponentModal(false);
          }}
        >
          <ModalXSvg />
        </div>
      </div>
      {children}
    </Modal>
  );
}

import React, { CSSProperties } from "react";
import ReactDom from "react-dom";
import "./Modal.css";

const MODAL_STYLES = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "rgb(21, 21, 21)",
  width: "25vw",
  // height: "70vh",
  zIndex: 1000,
  alignItems: "center",
} as React.CSSProperties;
const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
} as React.CSSProperties;

type Props = {
  children: any;
  isOpen: boolean;
  onClose: () => void;
};
const Modal: React.FC<Props> = ({ isOpen, children, onClose }) => {
  if (!isOpen) return null;
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose}>
        <div style={MODAL_STYLES}>{children}</div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;

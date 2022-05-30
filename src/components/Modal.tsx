import React from "react";
import ReactDOM from "react-dom";
import "../styles/modal.scss";
export function Modal(props: any) {
  const [display, setDisplay] = React.useState(true);

  function openModal() {
    setDisplay(true);
  }
  function closeModal() {
    setDisplay(false);
  }

  if (display) {
    return (
      <div className={"modal-wrapper"}>
        <div onClick={closeModal} className={"modal-backdrop"} />
        <div className={"modal-box"}>{props.children}</div>
      </div>
    );
  }
  return null;
}

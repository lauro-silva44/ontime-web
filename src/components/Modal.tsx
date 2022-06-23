import React, { createContext, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/slices/modalSlice";
import "../styles/modal.scss";

export function Modal(props: any) {
  const { open, display } = useSelector((state: any) => state.modal);
  const dispatch = useDispatch();

  if (open || display) {
    return (
      <div className={"modal-wrapper"}>
        <div
          onClick={() => dispatch(closeModal())}
          className={"modal-backdrop"}
        />
        <div className={"modal-box"}>{props.children}</div>
      </div>
    );
  }
  return null;
}

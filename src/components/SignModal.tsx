import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/slices/modalSlice";
import { LoginModal } from "./LoginModal";
import "../styles/modal.scss";

export function SignModal(props: any) {
  const { display } = useSelector((state: any) => state.sign);
  const dispatch = useDispatch();

  if (display) {
    return (
      <div className={"modal-wrapper"}>
        <div className={"modal-backdrop"} />
        <div className={"modal-box"}>
          <LoginModal />
        </div>
      </div>
    );
  }
  return null;
}

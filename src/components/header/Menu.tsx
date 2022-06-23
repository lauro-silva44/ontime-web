import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddUserSvg from "../../assets/addUser.svg";
import BookingSvg from "../../assets/booking.svg";
import LoginSvg from "../../assets/login.svg";
import LogoSvg from "../../assets/logo.svg";
import "../../styles/menuItems.scss";
import "../../styles/modal.scss";
import { LoginModal } from "../LoginModal";
import { Modal } from "../Modal";
import { SignModal } from "../SignModal";

export function Menu() {
  const [display, setDisplay] = useState(false);

  function showModal() {
    if (display)
      return (
        <div className={"modal-wrapper"}>
          <div className={"modal-backdrop"} onClick={() => setDisplay(false)} />
          <div className={"modal-box"}>
            <LoginModal />
          </div>
        </div>
      );

    return null;
  }

  let navigate = useNavigate();
  function takeMeHome() {
    navigate("/", { replace: true });
  }
  function login() {
    navigate("/login");
  }

  return (
    <div className="container-header">
      <div>
        <button onClick={takeMeHome}>
          <img src={LogoSvg} alt="logo" id="logo" />
        </button>
      </div>
      <nav>
        <ul id="menuItems">
          <li>
            <button className="animation-button">
              <img src={BookingSvg} alt="" />
              <h3>My Booking</h3>
            </button>
          </li>
          <li>
            <button
              className="animation-button"
              onClick={() => {
                setDisplay(true);
              }}
            >
              <img src={LoginSvg} alt="" />
              <h3>Sign In</h3>
            </button>
          </li>
          <li>
            <button className="animation-button" onClick={login}>
              <img src={AddUserSvg} alt="" />
              <h3>Create your Account</h3>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

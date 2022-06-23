import { Menu } from "../../components/header/Menu";
import WomanPc from "../../assets/login-page/woman-pc.png";
import Apple from "../../assets/login-page/apple.svg";
import Google from "../../assets/login-page/google.svg";
import Arrow from "../../assets/login-page/forwar-arrow.svg";
import "../../styles/login.scss";

export function Login() {
  return (
    <div>
      <Menu />
      <div className="login-container">
        <div className="info-wrapper">
          <div>
            <h1>Login to your Account</h1>
          </div>
          <div className="buttons">
            <div>
              <button>
                <img src={Apple} alt="" />
                <p>Login with AppleID</p>
                <img src={Arrow} alt="" className="forward" />
              </button>
            </div>
            <div>
              <button>
                <img src={Google} alt="" />
                <p>Login with Google</p>
                <img src={Arrow} alt="" className="forward" />
              </button>
            </div>
          </div>
        </div>
        <div className="border">
          <div className="image-container">
            <img src={WomanPc} alt="girl-pc" />
          </div>
        </div>
      </div>
    </div>
  );
}

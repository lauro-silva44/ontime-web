import GoogleSvg from "../assets/loginIcons/google.svg";
import AppleSvg from "../assets/loginIcons/apple.svg";
import PhonePic from "../assets/loginIcons/phone.png";
import "../styles/loginModal.scss";
export function LoginModal() {
  return (
    <div className="containerLogin">
      <div className="imageContainer">
        <img src={PhonePic} alt="phonePhoto" />
        <h2>
          Get full experience <br />
          with our mobile app
        </h2>
      </div>
      <div className="buttonsContainer">
        <button>
          <img src={GoogleSvg} alt="googleIcon" />
          <h3>Login with Google</h3>
        </button>
        <button>
          <img src={AppleSvg} alt="AppleIcon" />
          <h3>Login with Apple</h3>
        </button>
      </div>
    </div>
  );
}

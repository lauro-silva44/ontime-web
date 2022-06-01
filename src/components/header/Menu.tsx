import AddUserSvg from "../../assets/addUser.svg";
import BookingSvg from "../../assets/booking.svg";
import LoginSvg from "../../assets/login.svg";
import LogoSvg from "../../assets/logo.svg";
import "../../styles/menuItems.scss";

export function Menu() {
  return (
    <div className="container">
      <div>
        <button>
          <img src={LogoSvg} alt="logo" id="logo" />
        </button>
      </div>
      <nav>
        <ul id="menuItems">
          <li>
            <button>
              <img src={BookingSvg} alt="" />
              <h3>My Booking</h3>
            </button>
          </li>
          <li>
            <button>
              <img src={LoginSvg} alt="" />
              <h3>Sign In</h3>
            </button>
          </li>
          <li>
            <button>
              <img src={AddUserSvg} alt="" />
              <h3>Create your Account</h3>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

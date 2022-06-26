import "../../styles/dashBoard.scss";
import AdminPhoto from "../../assets/dash-board/admin.png";
import DriversSvg from "../../assets/dash-board/icons/wheel.svg";
import MinibusSvg from "../../assets/dash-board/icons/bus.svg";
import RoutesSvg from "../../assets/dash-board/icons/route.svg";
import PassengersSvg from "../../assets/dash-board/icons/passenger.svg";
import BookingsSvg from "../../assets/dash-board/icons/bookmark.svg";
export function DashBoard() {
  return (
    <div className="container">
      <div className="menu">
        <img src="" alt="" />

        <button>
          <img src="" alt="" />
          <p>Login</p>
        </button>
      </div>
      <div className="admin-info">
        <div className="admin-photo">
          <img src={AdminPhoto} alt="Admin Photo" />
        </div>
        <div className="admin-name">
          <h3>Quemily Spínola</h3>
        </div>
        <h4>Admin</h4>
        <p>kemilyemail@exemple.com</p>

        <div className="icon-list">
          <div className="drivers">
            <img src={DriversSvg} alt="" />
            <h3>Drivers</h3>
          </div>
          <div className="drivers">
            <img src={MinibusSvg} alt="" />
            <h3>Minibus</h3>
          </div>
          <div className="drivers">
            <img src={RoutesSvg} alt="" />
            <h3>Routes</h3>
          </div>
          <div className="drivers">
            <img src={PassengersSvg} alt="" />
            <h3>Passengers</h3>
          </div>
          <div className="drivers">
            <img src={BookingsSvg} alt="" />
            <h3>Bookings</h3>
          </div>
        </div>
      </div>
      <div className="content-containet"></div>
    </div>
  );
}

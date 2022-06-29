import "../../styles/dashBoard.scss";
import AdminPhoto from "../../assets/dash-board/admin.png";
import DriversSvg from "../../assets/dash-board/icons/wheel.svg";
import MinibusSvg from "../../assets/dash-board/icons/bus.svg";
import RoutesSvg from "../../assets/dash-board/icons/route.svg";
import PassengersSvg from "../../assets/dash-board/icons/passenger.svg";
import BookingsSvg from "../../assets/dash-board/icons/bookmark.svg";
import LoginSvg from "../../assets/dash-board/login-icon.svg";
import LogoSvg from "../../assets/logo.svg";
import BlueWheelSvg from "../../assets/dash-board/wheel-2.svg";
import PassengerSvg from "../../assets/dash-board/passengers.svg";
import BookmarkSvg from "../../assets/dash-board/bookmark.svg";

import { DriverDash } from "../../components/DriverDash";
import FullnameIconSvg from "../../assets/dash-board/menu-icons/fullname.svg";
import MinibusIconSvg from "../../assets/dash-board/menu-icons/bus.svg";
import RoutesIconSvg from "../../assets/dash-board/menu-icons/routes.svg";
import { drivers } from "../../utils/driverTest4Dash";
import { PassengersDash } from "../../components/PassengersDash";
import { Reservation } from "../../components/Reservation";
export function DashBoard() {
  return (
    <div className="container">
      <div className="menu">
        <img src={LogoSvg} alt="logo" />

        <button className="login-button">
          <img src={LoginSvg} alt="login" />
          <p>Log Out</p>
        </button>
      </div>
      <div className="dash">
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
        <div className="content-container">
          <div className="info-name">
            <div className="info-image">
              <div className="container-icon">
                <img src={BlueWheelSvg} alt="" />
              </div>
            </div>
            <h2>Drivers</h2>
          </div>

          <div>
            <div className="menu-icons">
              <div className="icon-menu">
                <img src={FullnameIconSvg} alt="fullname" />
                <p>Fullname</p>
              </div>
              <div className="icon-menu">
                <img src={MinibusIconSvg} alt="minibus" />
                <p>Minibus</p>
              </div>
              <div className="icon-menu">
                <img src={RoutesIconSvg} alt="routes" />
                <p>Routes</p>
              </div>
            </div>
            <div className="drivers-list">
              {drivers.map((driver) => (
                <DriverDash data={driver} />
              ))}
              {drivers.map((driver) => (
                <DriverDash data={driver} />
              ))}
            </div>
          </div>

          <div className="info-name" style={{ marginTop: "50px" }}>
            <div className="info-image">
              <div className="container-icon">
                <img src={PassengerSvg} alt="" />
              </div>
            </div>
            <h2>Passengers</h2>
          </div>
          <div className="passangers-info">
            <PassengersDash />
            <PassengersDash />
            <PassengersDash />
            <PassengersDash />
            <PassengersDash />
            <PassengersDash />
          </div>
          <div className="info-name" style={{ marginTop: "50px" }}>
            <div className="info-image">
              <div className="container-icon">
                <img src={BookmarkSvg} alt="" />
              </div>
            </div>
            <h2>Passengers</h2>
          </div>
          <div className="passangers-info">
            <Reservation />
          </div>
        </div>
      </div>
    </div>
  );
}

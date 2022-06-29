import { UserPhotoDash } from "./UserPhotoDash";
import { drivers } from "../utils/driverTest4Dash";
import DateSvg from "../assets/bookings/date.svg";
import DriverSvg from "../assets/bookings/driver.svg";
import PassengerSvg from "../assets/bookings/passenger.svg";
import RouteSvg from "../assets/bookings/route.svg";
import "../styles/reservation.scss";

export function Reservation() {
  return (
    <div className="reserve-container">
      <UserPhotoDash photo={drivers[0].photoPath} />
      <div className="blue-line">
        <div className="info-container">
          <div className="info-type">
            <img src={PassengerSvg} alt="" />
            <p>Passenger</p>
          </div>
          <p>Passenger Name</p>
        </div>
        <div className="photo-info">
          <UserPhotoDash photo={drivers[2].photoPath} />

          <div className="info-container">
            <div className="info-type">
              <img src={DriverSvg} alt="" />
              <p>Driver</p>
            </div>
            <p>Driver Name</p>
          </div>
        </div>

        <div className="info-container">
          <div className="info-type">
            <img src={RouteSvg} alt="" />
            <p>Route</p>
          </div>
          <p>StartPoint-Destination</p>
        </div>
        <div className="info-container">
          <div className="info-type">
            <img src={DateSvg} alt="" />
            <p>Date</p>
          </div>
          <p>dd-mm-yyyy</p>
        </div>
      </div>
    </div>
  );
}

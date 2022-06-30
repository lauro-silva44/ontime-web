import { UserPhotoDash } from "./UserPhotoDash";
import { drivers } from "../utils/driverTest4Dash";
import DateSvg from "../assets/bookings/date.svg";
import DriverSvg from "../assets/bookings/driver.svg";
import PassengerSvg from "../assets/bookings/passenger.svg";
import RouteSvg from "../assets/bookings/route.svg";
import "../styles/reservation.scss";

type RouteProps = {
  routeId: string;
  startPoint: string;
  destination: string;
  price: string;
};

type BookingProps = {
  passenger: string;
  dirver: string;
  passengerPhoto: string;
  dirverPhoto: string;
  route: RouteProps;
  date: string;
};

type Props = {
  data: BookingProps;
};

export function Reservation({ data }: Props) {
  return (
    <div className="reserve-container">
      <UserPhotoDash photo={data.passengerPhoto} />
      <div className="blue-line">
        <div className="info-container">
          <div className="info-type">
            <img src={PassengerSvg} alt="" />
            <p>Passenger</p>
          </div>
          <p>{data.passenger}</p>
        </div>
        <div className="photo-info">
          <UserPhotoDash photo={data.dirverPhoto} />

          <div className="info-container">
            <div className="info-type">
              <img src={DriverSvg} alt="" />
              <p>Driver</p>
            </div>
            <p>{data.dirver}</p>
          </div>
        </div>

        <div className="info-container">
          <div className="info-type">
            <img src={RouteSvg} alt="" />
            <p>Route</p>
          </div>
          <p>
            {data.route.startPoint} - {data.route.destination}
          </p>
        </div>
        <div className="info-container">
          <div className="info-type">
            <img src={DateSvg} alt="" />
            <p>Date</p>
          </div>
          <p>{data.date}</p>
        </div>
      </div>
    </div>
  );
}

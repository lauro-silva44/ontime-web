import RouteSvg from "../assets/ticketsAssets/route.svg";
import CalenderSvg from "../assets/ticketsAssets/calendar.svg";
import BusSvg from "../assets/driverAssets/bus.svg";
import BadjeSvg from "../assets/driverAssets/badge.svg";

export function Tickets() {
  return (
    <div className="ticketContainer">
      <div className="qrCode">
        <img src="" alt="" />
      </div>
      <div className="ticketInf">
        <div className="inf">
          <img src="" alt="" />
          <p></p>
        </div>
        <div className="inf">
          <img src="" alt="" />
          <p></p>
        </div>
        <div className="inf">
          <img src="" alt="" />
          <p></p>
        </div>
        <div className="inf">
          <img src="" alt="" />
          <p></p>
        </div>
      </div>
    </div>
  );
}

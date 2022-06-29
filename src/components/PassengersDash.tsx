import { UserPhotoDash } from "./UserPhotoDash";
import "../styles/userDash.scss";
import { drivers } from "../utils/driverTest4Dash";
import FullnameIconSvg from "../assets/dash-board/menu-icons/fullname.svg";

export function PassengersDash() {
  return (
    <div className="passDash-container">
      <UserPhotoDash photo={drivers[0].photoPath} />
      <div className="line-info">
        <div className="full-icon">
          <img src={FullnameIconSvg} alt="fullnameIcon" />
          <p>Fullname</p>
        </div>
        <p className="fullname">other test</p>
      </div>
    </div>
  );
}

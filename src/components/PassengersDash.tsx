import { UserPhotoDash } from "./UserPhotoDash";
import "../styles/userDash.scss";
import FullnameIconSvg from "../assets/dash-board/menu-icons/fullname.svg";

type PassengerType = {
  name: string;
  photoPath: string;
};

type Props = {
  data: PassengerType;
};

export function PassengersDash({ data }: Props) {
  return (
    <div className="passDash-container">
      <UserPhotoDash photo={data.photoPath} />
      <div className="line-info">
        <div className="full-icon">
          <img src={FullnameIconSvg} alt="fullnameIcon" />
          <p>Fullname</p>
        </div>
        <p className="fullname">{data.name}</p>
      </div>
    </div>
  );
}

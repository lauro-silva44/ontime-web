import BadgeSvg from "../assets/driverAssets/badge.svg";
import SchedulleSvg from "../assets/driverAssets/schedule.svg";
import BusSvg from "../assets/driverAssets/bus.svg";
import ReviewSvg from "../assets/driverAssets/review.svg";
import "../styles/driverInfo.scss";

type driverProps = {
  id: string;
  fullName: string;
  nickname: string;
  minibus: string;
  departTime: string;
  rate: number;
  photoPath: string;
  arrivalTime: string;
};

type Props = {
  data: driverProps | undefined;
};

export function DriverInfoModal({ data }: Props) {
  return (
    <div
      style={{ width: "380px", height: "230px" }}
      className="driverContainer"
    >
      <img className="driverPhoto" src={data?.photoPath} alt="driverPhoto" />
      <div className="infos">
        <div id="inf">
          <img src={BadgeSvg} alt="fullName" />
          <h3>
            {data?.fullName} <strong>({data?.nickname})</strong>
          </h3>
        </div>
        <div id="inf">
          <img src={SchedulleSvg} alt="time" />
          <h3>{data?.departTime}</h3>
          <h3 className="time"> 1h50min </h3>
          <h3>{data?.arrivalTime}</h3>
        </div>
        <div id="inf">
          <img src={BusSvg} alt="fullName" />
          <h3>{data?.minibus}</h3>
        </div>
        <div id="inf">
          <img src={ReviewSvg} alt="fullName" />
          <h3>{data?.rate}</h3>
        </div>
      </div>
    </div>
  );
}

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
};

type Props = {
  data: driverProps;
};

export function DriverInfo({ data }: Props) {
  return (
    <div className="driverContainer">
      <img className="driverPhoto" src={data.photoPath} alt="driverPhoto" />
      <div className="infos">
        <div id="inf">
          <img src={BadgeSvg} alt="fullName" />
          <h3>
            {data.fullName} <strong>({data.nickname})</strong>
          </h3>
        </div>
        <div id="inf">
          <img src={SchedulleSvg} alt="time" />
          <h3>{data.departTime}</h3>
        </div>
        <div id="inf">
          <img src={BusSvg} alt="fullName" />
          <h3>{data.minibus}</h3>
        </div>
        <div id="inf">
          <img src={ReviewSvg} alt="fullName" />
          <h3>{data.rate}</h3>
        </div>
      </div>
      <div id="price">
        <div>
          <h2>500CVE</h2>
        </div>
        <button>
          <h3>BOOK NOW</h3>
        </button>
      </div>
    </div>
  );
}
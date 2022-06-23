import BadgeSvg from "../assets/driverAssets/badge.svg";
import SchedulleSvg from "../assets/driverAssets/schedule.svg";
import BusSvg from "../assets/driverAssets/bus.svg";
import ReviewSvg from "../assets/driverAssets/review.svg";
import "../styles/driverInfo.scss";
import {
  ButtonHTMLAttributes,
  createContext,
  useContext,
  useState,
} from "react";
import { TestProvider } from "../pages/Search/Search";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../redux/slices/modalSlice";

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

type Props = ButtonHTMLAttributes<HTMLElement> & {
  data: driverProps;
};

export function DriverInfo({ data }: Props) {
  const dispatch = useDispatch();

  return (
    <div className="driverContainer">
      <img className="driverPhoto" src={data.photoPath} alt="driverPhoto" />
      <div className="infos">
        <div id="inf">
          <img src={BadgeSvg} alt="fullName" />
          <h3>{data.fullName}</h3>
          <h3 style={{ fontWeight: "700", color: "#005792" }}>
            ({data.nickname})
          </h3>
        </div>
        <div id="inf">
          <img src={SchedulleSvg} alt="time" />
          <h3>{data.departTime}</h3>
          <h3 className="time"> 1h50min </h3>
          <h3>{data.arrivalTime}</h3>
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
        <button onClick={() => dispatch(openModal(data.id))}>
          <h3>Book Now</h3>
        </button>
      </div>
    </div>
  );
}

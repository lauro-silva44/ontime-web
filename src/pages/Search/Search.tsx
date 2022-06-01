import { DriverInfo } from "../../components/DriverInfo";
import { Menu } from "../../components/header/Menu";
import { SearchArea } from "../../components/SearchArea";
import { drivers } from "../../utils/drivers";
import "../../styles/search.scss";
import { Footer } from "../../components/Footer";
import { Modal } from "../../components/Modal";
import { CarMap } from "../../components/CarMap";
import { DriverInfoModal } from "../../components/DriverInfoModal";
import { createContext, useState } from "react";
import { useSelector } from "react-redux";

export const TestProvider = createContext({});

export function Search() {
  const { driverId } = useSelector((state: any) => state.modal);
  function findId(id: string) {
    let driver = drivers.find((driver) => driver.id === id);
    return driver;
  }
  return (
    <div className="searchContainer">
      <Menu />
      <SearchArea />
      <div className="drivers">
        {drivers.map((driver) => (
          <DriverInfo data={driver} key={driver.id} />
        ))}
      </div>
      <Footer />
      <Modal>
        <div className="test">
          <div className="carMap">
            <CarMap />
          </div>
          <div className="driverInfo">
            <DriverInfoModal data={findId(driverId)} />
            <div className="minibusphoto">
              <img src={findId(driverId)?.minibusPhoto} alt="minibusPhot" />
            </div>
          </div>
        </div>
        <div className="bookButton">
          <button>
            <h3>Book Now</h3>
          </button>
        </div>
      </Modal>
    </div>
  );
}

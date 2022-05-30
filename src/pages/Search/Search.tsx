import { DriverInfo } from "../../components/DriverInfo";
import { Menu } from "../../components/header/Menu";
import { SearchArea } from "../../components/SearchArea";
import { drivers } from "../../utils/drivers";
import "../../styles/search.scss";
import { Footer } from "../../components/Footer";
import { Modal } from "../../components/Modal";
import { CarMap } from "../../components/CarMap";
import { DriverInfoModal } from "../../components/DriverInfoModal";
import { ActionButton } from "../../components/ActioButton";

export function Search() {
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
            <DriverInfoModal data={drivers[0]} />
            <div className="minibusphoto">
              <img src={drivers[0].minibusPhoto} alt="minibusPhot" />
            </div>
          </div>
        </div>
        <div className="bookButton">
          <ActionButton
            style={{ backgroundColor: "#FFB740" }}
            title="Book Now"
          />
        </div>
      </Modal>
    </div>
  );
}

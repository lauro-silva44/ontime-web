import { DriverInfo } from "../../components/DriverInfo";
import { Menu } from "../../components/header/Menu";
import { SearchArea } from "../../components/SearchArea";
import { drivers } from "../../utils/drivers";
import GonPhoto from "../../assets/driverAssets/driverPhotos/gon.png";
import "../../styles/search.scss";
import { Footer } from "../../components/Footer";
import { Modal } from "../../components/Modal";
import { CarMap } from "../../components/CarMap";

export function Search() {
  return (
    <div className="searchContainer">
      <Menu />
      <SearchArea />
      <div className="drivers">
        {drivers.map((driver) => (
          <DriverInfo data={driver} />
        ))}
      </div>
      <Footer />
      <Modal>
        <CarMap />
      </Modal>
    </div>
  );
}

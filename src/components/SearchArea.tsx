import RouteSvg from "../assets/route.svg";
import LocationSvg from "../assets/location.svg";
import "../styles/searchArea.scss";
import { ActionButton } from "./ActioButton";
import SearchSvg from "../assets/search.svg";
import { SearchField } from "./SearchField";

export function SearchArea() {
  return (
    <div id="searchAreacontainer">
      <SearchField
        title="Your Location"
        icon={LocationSvg}
        placeholderText="please enter your location"
      />
      <SearchField
        title="Where Do You Wanna Go?"
        icon={RouteSvg}
        placeholderText="city, island"
      />
      <ActionButton title="Search" icon={SearchSvg} />
    </div>
  );
}

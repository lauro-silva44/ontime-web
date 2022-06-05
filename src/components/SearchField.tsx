import "../styles/searchField.scss";
import { cities } from "../utils/cities";

type Props = {
  title: string;
  icon: string;
  placeholderText: string;
};

export function SearchField({ title, icon, placeholderText }: Props) {
  return (
    <div id="searachFildContainer">
      <h3>{title}</h3>
      <div>
        <img src={icon} style={{ marginLeft: "5px" }} />
        <select name="pets" id="pet-select">
          {cities.map((city) => (
            <option key={city.cityId} value={city.cityId}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

import "../styles/cardsPlace.scss";
import tarrafal from "../assets/placesImages/tarrafal.png";

type placeProps = {
  name: string;
  city: string;
  imagePath: string;
};
type Props = {
  data: placeProps;
};

export function CardsPlace({ data }: Props) {
  return (
    <div id="overlay">
      <div className="containerCard">
        <img src={data.imagePath} />
        <h2>{data.name}</h2>
        <h3>{data.city}</h3>
      </div>
    </div>
  );
}

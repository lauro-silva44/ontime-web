import { CardsPlace } from "./PlaceCards";

type CardProps = {
  id: number;
  name: string;
  city: string;
  imagePath: string;
};

type Props = {
  data: CardProps;
};

export function PlacePresentation(title: string, { data }: Props) {
  return (
    <div>
      <h1> {title} </h1>
      <div id="cardContainer"></div>
    </div>
  );
}

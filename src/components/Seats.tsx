import { useState } from "react";
import "../styles/seat.scss";
type seatProps = {
  id: string;
  booked: boolean;
};

export type Props = {
  data: seatProps;
};

export function Seats({ data }: Props) {
  const [selected, setSelected] = useState(false);

  function select() {
    if (!selected && !data.booked) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }

  return (
    <div
      className={"mainContainer"}
      onClick={select}
      style={
        !selected && !data.booked
          ? { backgroundColor: "#FFF" }
          : data.booked
          ? { backgroundColor: "#005792" }
          : { backgroundColor: "#F24A72" }
      }
    >
      <h3 style={data.booked ? { color: "#fff" } : { color: "#2C3333" }}>
        {data.id}
      </h3>
    </div>
  );
}

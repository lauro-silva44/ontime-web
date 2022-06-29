import "../styles/driverDash.scss";
import { UserPhotoDash } from "./UserPhotoDash";

type RouteProps = {
  routeId: string;
  startPoint: string;
  destination: string;
  price: string;
};

type DriverProps = {
  id: string;
  fullName: string;
  minibus: string;
  photoPath: string;
  route: RouteProps;
};

type Props = {
  data: DriverProps;
};

export function DriverDash({ data }: Props) {
  return (
    <div className="driver-container">
      <UserPhotoDash photo={data.photoPath} />
      <div className="infos">
        <p>{data.fullName}</p>
        <p>{data.minibus}</p>
        <p>
          {data.route.startPoint} - {data.route.destination}
        </p>
      </div>
    </div>
  );
}

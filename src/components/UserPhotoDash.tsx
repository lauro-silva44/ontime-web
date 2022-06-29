import "../styles/userPhotoDash.scss";

type Props = {
  photo: string;
};

export function UserPhotoDash({ photo }: Props) {
  return (
    <div className="yellow-border">
      <img src={photo} alt="test" />
    </div>
  );
}

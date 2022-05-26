import "../styles/actionButton.scss";

type Props = {
  icon: string;
  title: string;
};
export function ActionButton({ icon, title }: Props) {
  return (
    <button className="actionContainer">
      <img src={icon} alt="" />
      <h3>{title}</h3>
    </button>
  );
}

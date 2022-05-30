import { ButtonHTMLAttributes } from "react";
import "../styles/actionButton.scss";

type Props = ButtonHTMLAttributes<HTMLElement> & {
  icon?: string;
  title: string;
};
export function ActionButton({ icon, title, ...rest }: Props) {
  return (
    <button className="actionContainer" {...rest}>
      <img src={icon} alt="" />
      <h3>{title}</h3>
    </button>
  );
}

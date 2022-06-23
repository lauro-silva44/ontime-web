import { ButtonHTMLAttributes } from "react";
import "../styles/actionButton.scss";

type Props = ButtonHTMLAttributes<HTMLElement> & {
  icon?: string;
  title: string;
};
export function ActionButton({ icon, title, ...rest }: Props) {
  return (
    <button className="action-container" {...rest}>
      <img src={icon} alt="" />
      <h3>{title}</h3>
    </button>
  );
}

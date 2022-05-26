import "../styles/searchField.scss";

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
        <img src={icon} />
        <input type="text" placeholder={placeholderText} />
      </div>
    </div>
  );
}

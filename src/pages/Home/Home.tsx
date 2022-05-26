import { Menu } from "../../components/header/Menu";
import ImgBack from "../../assets/imageBack.svg";
import MaleHoldingPhone from "../../assets/downloadApp/protototype.png";
import GoogleDownload from "../../assets/downloadApp/google.svg";
import AppleDownload from "../../assets/downloadApp/apple.svg";
import "../../styles/home.scss";
import { SearchArea } from "../../components/SearchArea";
import { CardsPlace } from "../../components/PlaceCards";
import { mostVisited, recomended } from "../../utils/places";
import { Footer } from "../../components/Footer";

export function Home() {
  return (
    <div id="container">
      <div>
        <div id="blueArea">
          <Menu />
          <img src={ImgBack} alt="background Image" id="imgBack" />
          <h1 id="slogan">ku nos bu ta txiga goci</h1>
        </div>
        <div id="yellowArea">
          <div id="search">
            <SearchArea />
          </div>
        </div>
        <div className="colorChange">
          <h2 className="title">Most visited places</h2>
          <div className="mostpop">
            {mostVisited.map((place) => (
              <CardsPlace data={place} />
            ))}
          </div>
          <h2 className="title">Recomended Places</h2>
          <div className="mostpop">
            {recomended.map((place) => (
              <CardsPlace data={place} />
            ))}
          </div>
        </div>
        <div className="downloadApp">
          <div id="downCont">
            <div className="photo">
              <img src={MaleHoldingPhone} alt="prototype" />
            </div>
            <div className="description">
              <div>
                <h1> Download our app </h1>
                <p id="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div id="downloadButtons">
                <img src={GoogleDownload} alt="prototype" />
                <img src={AppleDownload} alt="prototype" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

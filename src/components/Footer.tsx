import OnTimeLogo from "../assets/ontimeLogo.svg";
import InstagramSvg from "../assets/footerAssets/instagram.svg";
import FacebookSvg from "../assets/footerAssets/facebook.svg";
import LinkedinSvg from "../assets/footerAssets/linkedin.svg";
import TwitterSvg from "../assets/footerAssets/twitter.svg";
import "../styles/footer.scss";
export function Footer() {
  return (
    <div className="footerContainer">
      <img id="logo" src={OnTimeLogo} alt="logo" />
      <p>© onTime Trip. All rights reserved</p>
      <p>About Us</p>
      <p>Term of use</p>
      <img id="socialIcon" src={InstagramSvg} alt="instagram" />
      <img id="socialIcon" src={FacebookSvg} alt="facebook" />
      <img id="socialIcon" src={LinkedinSvg} alt="linkedin" />
      <img id="socialIcon" src={TwitterSvg} alt="twitter" />
    </div>
  );
}

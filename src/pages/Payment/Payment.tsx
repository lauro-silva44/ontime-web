import "../../styles/payment.scss";

import { Menu } from "../../components/header/Menu";
import RequiredSvg from "../../assets/payment-assets/required.svg";
import LockSvg from "../../assets/payment-assets/lock.svg";
import ConfirmSvg from "../../assets/payment-assets/confirm.svg";
import CancelSvg from "../../assets/payment-assets/cancel.svg";

export function Payment() {
  return (
    <div className="payment">
      <Menu />
      <div className="payment-container">
        <div className="card-info">
          <div className="title">
            <p>Credit Card Information</p>
            <div className="description">
              <img src={LockSvg} alt="locker" />
              <p>Secure Serve</p>
            </div>
          </div>
          <div className="name-on-card">
            <label>
              Name on Card <img src={RequiredSvg} alt="" />{" "}
            </label>
            <input
              required
              type="text"
              placeholder="please enter the name on the card"
            />
          </div>
          <div className="name-on-card">
            <label>
              Card Number <img src={RequiredSvg} alt="" />{" "}
            </label>
            <input
              style={{ width: "401px" }}
              required
              type="number"
              placeholder="please enter the card number"
            />
          </div>
          <div className="expiration-date">
            <div className="name-on-card">
              <label>
                Expiration Date <img src={RequiredSvg} alt="" />{" "}
              </label>
              <input
                style={{ width: "224px", paddingRight: "20px" }}
                required
                type="month"
              />
            </div>

            <div className="name-on-card">
              <label>
                CVC <img src={RequiredSvg} alt="" />{" "}
              </label>
              <input
                style={{ width: "224px", paddingRight: "20px" }}
                required
                type="number"
                min="000"
                max="999"
              />
            </div>
          </div>

          <div className="save-info">
            <input
              className="check-box"
              type="checkbox"
              style={{ width: "24px", height: "24px" }}
            />
            <div className="text">
              <p>Save credit card information for the next time</p>
              <span>
                This will enable instant checkout in future!{" "}
                <strong>Read More</strong>{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="reservation-info">
          <h3>Seats Reservation</h3>
          <div className="reser-info">
            <div className="user-info">
              <h4>Quemily Silva</h4>
              <h4>2</h4>
            </div>
          </div>
          <button className="confirm-button">
            <img src={ConfirmSvg} alt="confirm" />
            <h2>Confirm</h2>
          </button>
          <button
            className="confirm-button"
            style={{
              border: "1px solid #FFB740",
              backgroundColor: "transparent",
            }}
          >
            <img src={CancelSvg} alt="cancel" />
            <h2>Cancel</h2>
          </button>
        </div>
      </div>
    </div>
  );
}

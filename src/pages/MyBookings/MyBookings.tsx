import { Menu } from "../../components/header/Menu";
import { Tickets } from "../../components/Tickets";
import { userTickets } from "../../utils/singleUserTicket";

import "../../styles/mybookings.scss";
import { Footer } from "../../components/Footer";

export function MyBookings() {
  return (
    <div className="my-container">
      <Menu />
      <h2>My Bookings</h2>
      <div className="tickets">
        {userTickets.map((ticket) => (
          <Tickets data={ticket} />
        ))}
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

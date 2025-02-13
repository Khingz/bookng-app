import "./Ticket.css";
import ticketTitle from "../../Assets/Typography/Heading.png";
import imagePlaceholder from "../../Assets/image.jpg";
import barCode from "../../Assets/Icons/Bar Code.png";

const Ticket = ({
	name,
	email,
	image,
	specialRequest,
	ticketNumber,
	ticketType,
}) => {
	return (
		<div className="ticket-container">
			<section className="ticket-top-section">
				<div className="ticket-top-container">
					<div className="ticket-top-header">
						<img src={ticketTitle} alt="" srcset="" />
						<div>
							<span>📍Abuja</span>
						</div>
						<div>📅 March 15, 2025 | 7:00 PM</div>
					</div>
					<div className="ticket-top-image">
						<img src={image || imagePlaceholder} alt="" srcset="" />
					</div>{" "}
					<div className="details-container">
						<div className="ticket-details">
							<div class="grid-item top-left">
								<div>
									<p>Name</p>
									<p>{name}</p>
								</div>
							</div>
							<div class="grid-item top-right">
								<div>
									<p>Email</p>
									<p>{email}</p>
								</div>
							</div>
							<div class="grid-item bottom-left">
								<div className="bottom-grid">
									<p>Ticket Type</p>
									<p>{ticketType}</p>
								</div>
							</div>
							<div class="grid-item bottom-right">
								<div className="bottom-grid">
									<p>Ticket for</p>
									<p>{ticketNumber}</p>
								</div>
							</div>
						</div>
						<div className="special-request">
							<p className="title">Special Request?</p>
							<p>
								{specialRequest || "Nill"}
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="ticket-bottom-section">
				<img src={barCode} alt="" srcset="" />
			</section>
		</div>
	);
};

export default Ticket;

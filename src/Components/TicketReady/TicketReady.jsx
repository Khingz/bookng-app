import "./TicketReady.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import Ticket from "../Ticket/Ticket";

const TicketReady = ({
	step,
	totalStep,
	name,
	email,
	image,
	specialRequest,
	ticketNumber,
	ticketType,
	setStep,
}) => {
	const handleNewBooking = () => {
		setStep(1);
	};

	return (
		<div className="ticket-ready-container">
			<ProgressBar step={step} totalStep={totalStep} stepTitle="Ready" />
			<div className="ticket-ready-body">
				<div className="ticket-headeer-title">
					<h3>Your Ticket is Booked!</h3>
					<p>
						Check your email for a copy or you can <span>download</span>
					</p>
				</div>
				{name}
				<div className="ticket-body">
					<Ticket />
				</div>
				<div className="ticket-button">
					<button className="book-new-ticket" onClick={handleNewBooking}>
						Book Another Ticket
					</button>
					<button className="download-ticket">Download Ticket</button>
				</div>
			</div>
		</div>
	);
};

export default TicketReady;

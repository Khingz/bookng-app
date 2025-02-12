import ProgressBar from "../ProgressBar/ProgressBar";
import "./TicketSelection.css";
import ticketTitle from "../../Assets/Typography/Heading.png";
import SelectTicketType from "../SelectTicketType/SelectTicketType";
import TicketNumber from "../TicketNumber/TicketNumber";
import { useState } from "react";

const TicketSelection = ({
	step,
	totalStep,
	setTicketType,
	setTicketNumber,
	setStep,
	ticketNumber,
	ticketType,
	tickets,
	// getAvailTickets,
	// getTotalTickets,
}) => {
	const [totalTickets, setTotalTickets] = useState(0);

	console.log(tickets);

	const handleSubmit = () => {
		if (ticketType && ticketNumber) {
			setStep(step + 1);
		}
	};

	return (
		<div className="ticket-selection-container">
			<ProgressBar
				step={step}
				totalStep={totalStep}
				stepTitle="Ticket Selection"
			/>
			<div className="ticket-selection-body">
				<div className="header">
					<img src={ticketTitle} alt="" srcset="" />
					<p>
						Join us for an unforgettable experience Abuja! Secure your spot now.
					</p>
					<div className="details">
						<p>
							<img src="" alt="" srcset="" />
							📍Abuja
							<span>||</span>
							July 20, 2025 | 7:00PM
						</p>
					</div>
				</div>
				<div className="body">
					<SelectTicketType
						setTicketType={setTicketType}
						setTotalTickets={setTotalTickets}
						tickets={tickets}
					/>
					<TicketNumber
						availTickets={totalTickets}
						setTicketNumber={setTicketNumber}
						ticketNumber={ticketNumber}
						ticketType={ticketType}
						tickets={tickets}
					/>
				</div>
				<div className="button-section">
					<button className="cancel">Cancel</button>
					<button className="continue" onClick={handleSubmit}>
						Continue
					</button>
				</div>
			</div>
		</div>
	);
};

export default TicketSelection;

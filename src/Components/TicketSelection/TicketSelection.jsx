import ProgressBar from "../ProgressBar/ProgressBar";
import "./TicketSelection.css";
import ticketTitle from "../../Assets/Typography/Heading.png";
import SelectTicketType from "../SelectTicketType/SelectTicketType";
import TicketNumber from "../TicketNumber/TicketNumber";
import { useState } from "react";
import ErrorMessage, { ErrorM } from "../ErrorMessage/ErrorMessage.jsx";

const TicketSelection = ({
	step,
	totalStep,
	setTicketType,
	setTicketNumber,
	setStep,
	ticketNumber,
	ticketType,
	tickets,
}) => {
	const [totalTickets, setTotalTickets] = useState(0);
	const [errors, setErrors] = useState({});

	const handleSubmit = () => {
		const newErrors = {};

		if (!ticketNumber) newErrors.ticketNumber = "Ticket Number is required";
		if (!ticketType) newErrors.ticketType = "Ticket Type is required";

		setErrors(newErrors);
		if (Object.keys(newErrors).length === 0) {
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
						<span>📍Abuja</span>
						<span className="divider">||</span>
						<span>July 20, 2025 | 7:00PM</span>
					</div>
				</div>
				<div className="body">
					<SelectTicketType
						setTicketType={setTicketType}
						setTotalTickets={setTotalTickets}
						tickets={tickets}
					/>
					{errors.ticketType && <ErrorM error={errors.ticketType} />}
					<TicketNumber
						availTickets={totalTickets}
						setTicketNumber={setTicketNumber}
						ticketNumber={ticketNumber}
						ticketType={ticketType}
						tickets={tickets}
					/>
					<div className="ticket-selection-error">
						{errors.ticketNumber && (
							<ErrorM error={errors.ticketNumber} />
						)}
					</div>
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

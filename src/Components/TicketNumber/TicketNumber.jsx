import React from "react";
import "./TicketNumber.css";
import { getAvailableTickets } from "../../utils/ticketHelper";
import { saveToLocalStorage } from "../../utils/localStroage";

const TicketNumber = ({
	setTicketNumber,
	ticketNumber,
	tickets,
	ticketType,
}) => {
	const handleChange = (e) => {
		setTicketNumber(e.target.value);
		saveToLocalStorage("ticketNumber", e.target.value);
	}
	return (
		<div className="ticket-number-container">
			<label htmlFor="number-select">Number of Tickets:</label>
			<select
				id="number-select"
				value={ticketNumber}
				onChange={handleChange}
			>
				{[...Array(getAvailableTickets(ticketType, tickets)).keys()].map((i) => (
					<option key={i + 1} value={i + 1}>
						{i + 1}
					</option>
				))}
			</select>
		</div>
	);
};

export default TicketNumber;

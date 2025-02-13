import React from "react";
import "./TicketNumber.css";
import { getAvailableTickets } from "../../utils/ticketHelper";

const TicketNumber = ({
	availTickets,
	setTicketNumber,
	ticketNumber,
	tickets,
	ticketType,
}) => {
	return (
		<div className="ticket-number-container">
			<label htmlFor="number-select">Number of Tickets:</label>
			<select
				id="number-select"
				value={ticketNumber}
				onChange={(e) => setTicketNumber(Number(e.target.value))}
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

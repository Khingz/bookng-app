import React, { useEffect, useState } from "react";
import "./TicketNumber.css";

const TicketNumber = ({
	availTickets,
	setTicketNumber,
	ticketNumber,
	tickets,
	ticketType,
}) => {
	useEffect(() => {}, [availTickets]);

	const getAvailTickets = (id) => {
		const ticket = tickets.find((ticket) => ticket.id === id);
		return ticket ? ticket.ticketsLeft : 0;
	};

	return (
		<div className="ticket-number-container">
			<label htmlFor="number-select">Number of Tickets:</label>
			<select
				id="number-select"
				value={ticketNumber}
				onChange={(e) => setTicketNumber(Number(e.target.value))}
			>
				{[...Array(getAvailTickets(ticketType)).keys()].map((i) => (
					<option key={i + 1} value={i + 1}>
						{i + 1}
					</option>
				))}
			</select>
		</div>
	);
};

export default TicketNumber;

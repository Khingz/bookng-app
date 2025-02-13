import React, { useState } from "react";
import "./SelectTicketType.css";
import { ticketOptions } from "../../utils/ticket";
import { getFromLocalStorage, saveToLocalStorage } from "../../utils/localStroage";

const SelectTicketType = ({
	setTicketType,
	setTotalTickets,
	tickets
}) => {
	const [selected, setSelected] = useState(getFromLocalStorage("ticketType") || "");
	
	const handleClick = (id) => {
		setSelected(id);
		setTicketType(id);
		saveToLocalStorage("ticketType", id);
	};

	const getTotalTickets = (id) => {
		const ticket = tickets.find((ticket) => ticket.id === id);
		return ticket ? ticket.totalTicket : 0;
	};

	const getAvailTickets = (id) => {
		const ticket = tickets.find((ticket) => ticket.id === id);
		return ticket ? ticket.ticketsLeft : 0;
	};

	return (
		<div className="select-ticket-container">
			<h3>Select Ticket Type:</h3>
			<div className="select-button-container">
				{ticketOptions.map((option) => (
					<button
						key={option.id}
						onClick={() => handleClick(option.id)}
						className={
							selected === option.id
								? "button-default button-select"
								: "button-default"
						}
						style={{
							padding: "15px 25px",
							fontSize: "16px",
							cursor: "pointer",
							borderRadius: "8px",
						}}
					>
						<p className="price">{option.price}</p>
						<p className="label">{option.label}</p>
						<p className="count">{`${getAvailTickets(
							option.id
						)}/${getTotalTickets(option.id)}`}</p>
					</button>
				))}
			</div>
		</div>
	);
};

export default SelectTicketType;

import { ticketOptions } from "./ticket";

export const getAvailableTickets = (id) => {
	const value = ticketOptions.find((option) => option.id === id);
	return value ? value.ticketsLeft : 0;
};

export const getTotalTickets = (id) => {
	const value = ticketOptions.find((option) => option.id === id);
	return value.totalTicket;
};

export const reduceTotalById = (id, value) => {
	const item = ticketOptions.find((item) => item.id === id);
	if (item && item.totalTickets > 0) {
		item.totalTicket -= value;
	}
};

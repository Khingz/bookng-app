export const getAvailableTickets = (id, tickets) => {
	const value = tickets.find((option) => option.id === id);
	return value ? value.ticketsLeft : 0;
};

export const getTotalTickets = (id, tickets) => {
	const value = tickets.find((option) => option.id === id);
	return value.totalTicket;
};

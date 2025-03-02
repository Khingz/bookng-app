import { useState } from "react";
import "./Booking.css";
import TicketSelection from "../../Components/TicketSelection/TicketSelection";
import AttendeeForm from "../../Components/AttendeeForm/AttendeeForm";
import TicketReady from "../../Components/TicketReady/TicketReady";
import { ticketOptions as initialTicketOptions } from "../../utils/ticket";
import { getFromLocalStorage } from "../../utils/localStroage";

const Booking = () => {
	const [step, setStep] = useState(1);
	const [ image, setImage ] = useState(getFromLocalStorage("image") || "");
	const [name, setName] = useState(getFromLocalStorage("name") || "");
	const [ticketNumber, setTicketNumber] = useState(getFromLocalStorage("ticketNumber") || 1);
	const [ticketType, setTicketType] = useState(getFromLocalStorage("ticketType") || "");
	const [ specailRequest, setSpecialRequest ] = useState(getFromLocalStorage("specialRequest") || "");
	const [email, setEmail] = useState(getFromLocalStorage("email") || "");
	const [tickets, setTickets] = useState(initialTicketOptions);

	const totalStep = 3;

	return (
		<div className="booking-container">
			{step === 1 && (
				<TicketSelection
					step={step}
					totalStep={totalStep}
					setTicketType={setTicketType}
					setTicketNumber={setTicketNumber}
					setStep={setStep}
					ticketNumber={ticketNumber}
					ticketType={ticketType}
					tickets={tickets}
				/>
			)}
			{step === 2 && (
				<AttendeeForm
					step={step}
					totalStep={totalStep}
					name={name}
					setName={setName}
					setImage={setImage}
					setSpecialRequest={setSpecialRequest}
					setEmail={setEmail}
					email={email}
					setStep={setStep}
					ticketType={ticketType}
					tickets={tickets}
					setTickets={setTickets}
					ticketNumber={ticketNumber}
					image={image}
					specialRequest={specailRequest}
				/>
			)}
			{step === 3 && (
				<TicketReady
					step={step}
					totalStep={totalStep}
					name={name}
					email={email}
					image={image}
					specailRequest={specailRequest}
					ticketNumber={ticketNumber}
					ticketType={ticketType}
					setStep={setStep}
				/>
			)}
		</div>
	);
};

export default Booking;

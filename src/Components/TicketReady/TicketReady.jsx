import "./TicketReady.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import Ticket from "../Ticket/Ticket";
import html2canvas from "html2canvas";
import { useRef } from "react";

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
	const captureRef = useRef(null);
	const handleNewBooking = () => {
		setStep(1);
	};

	const handleDownload = async () => {
		if (captureRef.current) {
			const canvas = await html2canvas(captureRef.current);
			const image = canvas.toDataURL("image/png");
			const link = document.createElement("a");
			link.href = image;
			link.download = `${name}_${ticketType}_ticket.png`;
			link.click();
		}
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
				<div className="ticket-body" ref={captureRef}>
					<Ticket />
				</div>
				<div className="ticket-button">
					<button className="book-new-ticket" onClick={handleNewBooking}>
						Book Another Ticket
					</button>
					<button className="download-ticket" onClick={handleDownload}>
						Download Ticket
					</button>
				</div>
			</div>
		</div>
	);
};

export default TicketReady;

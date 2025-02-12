import { InputField, TextArea } from "../FormComponent/FormComponent";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./AttendeeForm.css";
import envelope from "../../Assets/Icons/envelop.png";
import ImageUpload from "../ImageUpload/ImageUpload";
import { useState } from "react";
import { reduceTotalById } from "../../utils/ticketHelper";
import { ticketOptions } from "../../utils/ticket";

const AttendeeForm = ({
	step,
	setStep,
	totalStep,
	setImage,
	setName,
	setSpecialRequest,
	setEmail,
	name,
	email,
	ticketType,
	tickets,
	setTickets,
	ticketNumber
}) => {
	const [imagePreview, setImagePreview] = useState(null);

	const handleDrop = (acceptedFiles) => {
		if (acceptedFiles.length > 0) {
			const file = acceptedFiles[0];
			const previewUrl = URL.createObjectURL(file);
			setImagePreview(previewUrl);
			setImage(file);
		}
	};

	const handleSubmit = (id, value) => {
		if (name && email) {
			setStep(step + 1);
			reduceTotalById(ticketType);
			setTickets((prevTickets) =>
				prevTickets.map((ticket) =>
					ticket.id === id && ticket.ticketsLeft > value
						? { ...ticket, ticketsLeft: ticket.ticketsLeft - value } // Decrease count
						: ticket
				)
			);
		}
	};

	return (
		<div className="attendee-container">
			<ProgressBar
				step={step}
				totalStep={totalStep}
				stepTitle="Attendee Details"
			/>
			<div className="attendee-details">
				<div className="image-uploader-container">
					<h3>Upload Profile Photo</h3>
					<div className="image-uploader">
						<div className="">
							<ImageUpload onDrop={handleDrop} preview={imagePreview} />
						</div>
					</div>
				</div>
				<div className="line-divider"></div>

				<div>
					<InputField label="Enter your name" type="text" setValue={setName} />
					<InputField
						label="Enter your Email*"
						type="text"
						icon={envelope}
						setValue={setEmail}
					/>
					<TextArea label="Special Request?" setValue={setSpecialRequest} />
				</div>

				<div className="button-section">
					<button className="back">Back</button>
					<button className="get-ticket" onClick={() => handleSubmit(ticketType, ticketNumber)}>
						Get My Ticket
					</button>
				</div>
			</div>
		</div>
	);
};

export default AttendeeForm;

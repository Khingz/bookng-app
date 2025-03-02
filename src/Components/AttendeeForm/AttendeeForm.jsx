import { InputField, TextArea } from "../FormComponent/FormComponent";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./AttendeeForm.css";
import envelope from "../../Assets/Icons/envelop.png";
import ImageUpload from "../ImageUpload/ImageUpload";
import { useState } from "react";
import { handleUpload } from "../../utils/cloudinary";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import { saveToLocalStorage } from "../../utils/localStroage.js";

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
	setTickets,
	image,
	specialRequest,
	ticketNumber,
}) => {
	const [imagePreview, setImagePreview] = useState(null);
	const [imageFile, setImageFile] = useState(null);
	const [uploading, setUploading] = useState(false);
	const [errors, setErrors] = useState({});

	const handleDrop = (acceptedFiles) => {
		if (acceptedFiles.length > 0) {
			const file = acceptedFiles[0];
			const previewUrl = URL.createObjectURL(file);
			setImagePreview(previewUrl);
			setImageFile(file);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		saveToLocalStorage(name, value);

		switch (name) {
			case "name":
				setName(value);
				break;
			case "email":
				setEmail(value);
				break;
			case "specialRequest":
				setSpecialRequest(value);
				break;
			default:
				break;
		}
	};

	const handleSubmit = async (id, value) => {
		setUploading(true);
		let newErrors = {};

		const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

		if (!name.trim()) newErrors.name = "Name is required";
		if (!email.trim()) newErrors.email = "Email is required";
		if (!imageFile) newErrors.image = "Image is required";

		if (email && !regex.test(email)) {
			newErrors.email = "Invalid email address";
		}
		setErrors(newErrors);
		if (Object.keys(newErrors).length === 0) {
			const imageUrl = await handleUpload(imageFile);
			saveToLocalStorage("image", imageUrl);
			setImage(imageUrl);
			setStep(step + 1);
			setTickets((prevTickets) =>
				prevTickets.map((ticket) =>
					ticket.id === id && ticket.ticketsLeft > value
						? { ...ticket, ticketsLeft: ticket.ticketsLeft - value }
						: ticket
				)
			);
		}

		setUploading(false);
	};

	const handleBack = () => {
		setStep(step - 1);
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
					{errors.image && <ErrorMessage error={errors.image} />}
				</div>
				<div className="line-divider"></div>

				<form className="input-container">
					<InputField
						label="Enter your name"
						type="text"
						setValue={setName}
						error={errors.name}
						name={"name"}
						onChange={handleChange}
						value={name}
					/>
					<InputField
						label="Enter your Email*"
						type="email"
						icon={envelope}
						setValue={setEmail}
						error={errors.email}
						name={"email"}
						onChange={handleChange}
						value={email}
					/>
					<TextArea
						label="Special Request?"
						setValue={setSpecialRequest}
						name={"specialRequest"}
						onChange={handleChange}
						value={specialRequest}
					/>
				</form>

				<div className="button-section">
					<button className="back" onClick={handleBack}>
						Back
					</button>
					<button
						className="get-ticket"
						onClick={() => handleSubmit(ticketType, ticketNumber)}
					>
						{uploading
							? "Processing..."
							: `Get My ${ticketType === "free" ? "Free" : ""} Ticket`}
					</button>
				</div>
			</div>
		</div>
	);
};

export default AttendeeForm;

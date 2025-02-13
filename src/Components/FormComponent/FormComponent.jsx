import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx.jsx";
import "./FormComponent.css";

export const InputField = ({
	label,
	type = "text",
	setValue,
	icon,
	error,
	...props
}) => (
	<div className="input-container">
		<label className="">{label}</label>
		<div className="input">
			{icon && <img src={icon} alt="" srcset="" />}
			<input
				type={type}
				className=""
				{...props}
				onChange={(e) => setValue(e.target.value)}
			/>
		</div>
		{error && (
			<ErrorMessage error={error} />
		)}
	</div>
);

export const TextArea = ({ label, setValue, ...props }) => (
	<div className="textarea-field">
		<label className="">{label}</label>
		<div className="text-area">
			<textarea
				className=""
				{...props}
				onChange={(e) => setValue(e.target.value)}
			></textarea>
		</div>
	</div>
);

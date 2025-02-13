import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx.jsx";
import "./FormComponent.css";

export const InputField = ({
	label,
	type = "text",
	onChange,
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
				onChange={onChange}
			/>
		</div>
		{error && (
			<ErrorMessage error={error} />
		)}
	</div>
);

export const TextArea = ({ label, setValue, onChange, ...props }) => (
	<div className="textarea-field">
		<label className="">{label}</label>
		<div className="text-area">
			<textarea
				className=""
				{...props}
				onChange={onChange}
			></textarea>
		</div>
	</div>
);

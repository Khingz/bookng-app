import "./ErrorMessage.css";

export const ErrorM = ({ error }) => {
	if (!error) return null;

	return <small className="errorM">{error}</small>;
};

const ErrorMessage = ({ error }) => {
	if (!error) return null;

	return <small className="err-message">{error}</small>;
};

export default ErrorMessage;

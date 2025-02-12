import "./ProgressBar.css";

const ProgressBar = ({ step, totalStep, stepTitle }) => {
	const progress = (step / totalStep) * 100;

	return (
		<div className="progress-bar-container">
			<div className="progress-bar-header">
				<h4>{stepTitle}</h4>
                <p>Step {step + "/" + totalStep}</p>
			</div>
			<div className="progress-bar">
				<div className="progress" style={{ width: `${progress}%` }} />
			</div>
		</div>
	);
};

export default ProgressBar;

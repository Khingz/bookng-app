import { useDropzone } from "react-dropzone";
import downloadIcon from "../../Assets/Icons/download.png";
import "./ImageUpload.css";

const ImageUpload = ({ onDrop, preview }) => {
	const { getRootProps, getInputProps } = useDropzone({ onDrop });

	return (
		<div
			{...getRootProps()}
			className={`uploader-container ${preview ? "uploaded" : ""}`}
		>
			<input {...getInputProps()} />
			{preview ? (
				<img
					src={preview}
					alt="Preview"
				/>
			) : (
				<div>
					<img src={downloadIcon} alt="" srcset="" />
					<p>Drag & drop an image or click to select</p></div>
			)}
		</div>
	);
};

export default ImageUpload;

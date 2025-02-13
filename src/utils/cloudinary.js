import axios from "axios";

export const handleUpload = async (image) => {
	if (!image) return alert("Please select an image");

	const formData = new FormData();
	formData.append("file", image);
	formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);
  console.log(process.env.REACT_APP_CLOUDINARY_PRESET);
  

	try {
		const res = await axios.post(
			process.env.REACT_APP_CLOUDINARY_URL,
			formData,
			{
				headers: { "Content-Type": "multipart/form-data" },
			}
		);
		return res.data.secure_url;
	} catch (error) {
		console.error(
			"Error uploading image:",
			error.response?.data || error.message
		);
	}
};

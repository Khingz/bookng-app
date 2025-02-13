import axios from "axios";

export const handleUpload = async (image) => {
    if (!image) return alert("Please select an image");

    const formData = new FormData();
    formData.append("file", image);
    
    try {
      const res = await axios.post(
        process.env.REACT_APP_CLOUDINARY_URL,
        formData
      );
      return res.data.secure_url
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error uploading image");
    } finally {
      setUploading(false);
    }
  };
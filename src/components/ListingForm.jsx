import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

function ListingForm() {
    const [imageUrl, setImageUrl] = useState(null);
    const [file, setFile] = useState(null);
    const navigate=useNavigate();
    const border = {
        border: "0px",
        borderRadius: "6px"
    };
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result);
            };
            reader.readAsDataURL(selectedFile);
            setFile(selectedFile);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("propertyName", e.target.propertyName.value);
        formData.append("street", e.target.street.value);
        formData.append("city", e.target.city.value);
        formData.append("postalCode", e.target.postalCode.value);
        formData.append("state", e.target.state.value);
        formData.append("country", e.target.country.value);
        formData.append("area", e.target.area.value);
        formData.append("rent", e.target.rent.value);
        formData.append("bedrooms", e.target.bedrooms.value);
        formData.append("furnishing", e.target.furnishing.value);
        formData.append("propertyType", e.target.propertyType.value);
        if (file) {
            formData.append("image", file);
        }

        try {
            const response = await axios.post("http://localhost:4000/listing/add", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            toast.success("Property added successfully!");
            console.log("Form submitted successfully:", response.data);
            setTimeout(() => {
                navigate("/listing");
            }, 5000); 
        } catch (error) {
            toast.error("Error submitting form. Please try again.");
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div className="listingform">
            <ToastContainer />
            <h3>Add your property</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="propertyName" placeholder="Property Name" style={border} required />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" name="street" placeholder="Street" style={border} required /><br /><br />
                <input type="text" name="city" placeholder="City" style={border} required />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" name="postalCode" placeholder="Postal Code" style={border} required /><br /><br />
                <input type="text" name="state" placeholder="State" style={border} required />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" name="country" placeholder="Country" style={border} required /><br /><br /><br />
                
                {imageUrl && (
                    <div>
                        <img src={imageUrl} alt="Uploaded" className="uploadimage" /><br /><br />
                    </div>
                )}
                <label htmlFor="file-upload" className="custom-file-upload">
                    Click to upload Image
                </label>
                <input id="file-upload" type="file" onChange={handleFileChange} required/><br /><br />

                <h3>Additional Details</h3>
                <input type="text" name="area" placeholder="Area (sq.ft)" style={border} required />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" name="rent" placeholder="Rent" style={border} required /><br /><br />
                <input type="text" name="bedrooms" placeholder="Bedrooms" style={border} required />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <select name="furnishing" style={border} required>
                    <option value="" disabled>Furnishing</option>
                    <option value="furnished">Furnished</option>
                    <option value="not_furnished">Not Furnished</option>
                </select><br /><br />
                <select name="propertyType" style={border} required>
                    <option value="" disabled>Property Type</option>
                    <option value="apartment">Apartment</option>
                    <option value="villa">Villa</option>
                </select><br /><br />

                <input type="submit" value="Add Property" className="button"/>
            </form><br></br><br></br>
        </div>
    );
}

export default ListingForm;

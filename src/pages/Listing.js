import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

function Listing() {
    const [listings, setListings] = useState([]);
    const navigate = useNavigate();

    const button={
        width:"20%",
        height:"30px",
        backgroundColor:"#9f1616",
        border:"0px",
        color:"white",
        borderRadius:"4px",
        cursor:"pointer"
    }

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const response = await axios.get('http://localhost:4000/listing/view');
                setListings(response.data);
            } catch (error) {
                toast.error("Error fetching listings. Please try again.");
                console.error("Error fetching listings:", error);
            }
        };

        fetchListings();
    }, []);

    const handleUpdateClick = (listing) => {
        navigate(`/updatelisting/${listing._id}`, { state: { listing } });
    };

    return (
        <div className="listing-page">
            <ToastContainer />
            <h2>Current Listings <a href='/addlisting'><button>Add Property</button></a></h2>
            <div className="listings">
                {listings.length > 0 ? (
                    listings.map(listing => {
                        const image = require(`.${listing.imageUrl}`);
                        return (
                            <div key={listing._id} className="listing-item">
                                {listing.imageUrl && <img src={image} alt="Property" />}
                                <h3>{listing.propertyName}</h3>
                                <p><strong>Address:</strong> {listing.street}, {listing.city}, {listing.state}, {listing.country}, {listing.postalCode}</p>
                                <p><strong>Area:</strong> {listing.area} sq.ft</p>
                                <p><strong>Rent:</strong> ${listing.rent}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <strong>Bedrooms:</strong> {listing.bedrooms}</p>
                                <p><strong>Type:</strong> {listing.propertyType} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Furnishing:</strong> {listing.furnishing}</p>
                                <button style={button} onClick={() => handleUpdateClick(listing)} >Update</button>
                            </div>
                        );
                    })
                ) : (
                    <p>No listings yet.</p>
                )}
            </div>
        </div>
    );
}

export default Listing;

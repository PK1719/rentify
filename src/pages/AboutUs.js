import Navbar from "../components/Navbar"
import img1 from "../images/about1.jpg"
import img2 from "../images/about2.jpg"
import img3 from "../images/about3.jpg"
import img4 from "../images/about4.jpg"


function AboutUs(){
    return(
        <>
        <Navbar />
        <h1 className="abouttitle">About Us</h1>
        <div className="about">
            {/* <div className="section1">
                <img src={img1}></img>
                <div>
                    <h3>Rentify</h3>
                    <p>Welcome to Rentify, your premier online property selling platform dedicated to simplifying the process of buying and selling properties. Our mission is to make real estate transactions as seamless and transparent as possible, whether you're a first-time homebuyer, a seasoned investor, or someone looking to sell their property quickly and efficiently.At Rentify, we understand that finding or selling a home can be a complex and time-consuming journey. That’s why we’ve designed our platform to offer you a user-friendly experience, with cutting-edge tools and resources to guide you every step of the way. From advanced property search features to detailed listings and virtual tours, we provide everything you need to make informed decisions with confidence.</p>
                </div>
            </div><br></br><br></br> */}
            
            <div className="section1">
                <img src={img1}></img>
                <div>
                    <h3>Rentify</h3>
                    <p>Welcome to Rentify, your premier online property selling platform dedicated to simplifying the process of buying and selling properties. Our mission is to make real estate transactions as seamless and transparent as possible, whether you're a first-time homebuyer, a seasoned investor, or someone looking to sell their property quickly and efficiently.At Rentify, we understand that finding or selling a home can be a complex and time-consuming journey. That’s why we’ve designed our platform to offer you a user-friendly experience, with cutting-edge tools and resources to guide you every step of the way. From advanced property search features to detailed listings and virtual tours, we provide everything you need to make informed decisions with confidence.</p>
                </div>
            </div>
            <div className="section2">
                <img src={img2}></img>
                <div>
                    <h3>Apartments and Villas</h3>
                    <p>In addition to apartments, we also focus on providing an exquisite range of villas. From luxurious villas with breathtaking views to spacious homes designed for comfortable living, our selection is tailored to offer you high-quality choices that match your lifestyle. Our platform's advanced search features and comprehensive property information ensure that you can find a villa that fits your desires and requirements.
We understand that finding or selling a property can be a complex and time-consuming journey. That’s why we’ve designed our platform to offer you a user-friendly experience with cutting-edge tools and resources to guide you every step of the way. Our team of real estate experts is committed to delivering exceptional service and support, ensuring a smooth and successful transaction.</p>
                </div> 
            </div>
            <div className="section3">
                <div className="child1">
                    <img src={img3} className="img"></img>
                    <h3>Agreements</h3>
                    <p>At Rentify, we prioritize transparency and trust in every transaction. That’s why we ensure that each property listed on our platform comes with a certified agreement.</p>
                </div>
                <div className="child2">
                    <img src={img4} className="img"></img>
                    <h3>Expertise</h3>
                    <p>At Rentify, our team brings a wealth of expertise to every real estate transaction. With years of experience in the industry, we offer deep insights and professional guidance to help you make informed decisions.</p>
                </div>

            </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </>
    )
}
export default AboutUs
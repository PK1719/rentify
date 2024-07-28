import Navbar from "../components/Navbar"
import back from "../images/back.jpg"

function Home(){
    return(
        <>
        <Navbar />
        <div className="home">
            <div className="display">
                <h2 style={{textAlign:"center"}}>Welcome to Rentify</h2>
                <p>Rentify is an innovative online platform dedicated to simplifying property sales and rentals. Whether you're a homeowner looking to sell or rent out your property, or a buyer searching for your dream home, Rentify offers a seamless, user-friendly experience tailored to meet your needs.</p>
            </div>
        </div>
        </>
    )
}
export default Home
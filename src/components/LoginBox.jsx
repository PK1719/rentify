import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginBox() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginerror, setError] = useState('');
    const navigate = useNavigate();

    function handleEmail(event) {
        setEmail(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (email.trim() === '' || password.trim() === '') {
            setError("Please fill all the fields");
        } else {
            const details = {
                email: email,
                password: password
            };
            axios.post("http://localhost:4000/user/login", details)
                .then((res) => {
                    if (res.data.message === "true") {
                        navigate('/home');
                    } else {
                        setError("User not found. Please register!");
                    }
                })
                .catch((err) => {
                    alert("Error. Try again later");
                });
        }
    }

    return (
        <>
            <div className="logingrid">
                <div className="logintitle">
                    <h1 style={{ marginLeft: "0px" }}>Rentify</h1>
                    <h2>Renting made easy.</h2>
                </div>
                <div className="loginbox">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="email" placeholder="Email" onChange={handleEmail} required></input><br></br><br></br>
                        <input type="password" placeholder="Password" onChange={handlePassword} required></input><br></br>
                        <span id="password-error" className="error">{loginerror}</span><br /><br></br>
                        <input type="submit" value="Login"></input>
                    </form>
                    <p>Not a user? Click here to <span><a href="/signup">Register</a></span></p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
                    <path fill="white" fillOpacity="1" d="M0,32L48,42.7C96,53,192,75,288,101.3C384,128,480,160,576,186.7C672,213,768,235,864,250.7C960,267,1056,277,1152,256C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </>
    );
}

export default LoginBox;

import { useState } from "react";
import axios from "axios"

import { useNavigate } from "react-router-dom";

function SignUpBox(){
    const [fname,setFname]=useState('');
    const [lname,setLname]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [passwordError,setPasswordError]=useState('');
    const [emailError,setEmailError]=useState('');
    const navigate = useNavigate();
    
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    function handleEmail(event) {
        setEmail(event.target.value);
        setEmailError(validateEmail(event.target.value) ? '' : 'Invalid Email Format');
    }
    function handleFname(event){
        setFname(event.target.value);
    }
    function handleLname(event){
        setLname(event.target.value);
    }
    function handlePassword(event) {
        const passwordValue = event.target.value;
        setPassword(passwordValue);
        const lengthError = passwordValue.length < 8 ? 'Password must be at least 8 characters long' : '';
        const upperCaseRegex = /[A-Z]/;
        const numberRegex = /[0-9]/;
        const symbolRegex = /[$&+,:;=?@#|'<>.^*()%!-]/;
        const upperCaseError = upperCaseRegex.test(passwordValue) ? '' : 'Password must contain at least one uppercase letter';
        const numberError = numberRegex.test(passwordValue) ? '' : 'Password must contain at least one number';
        const symbolError = symbolRegex.test(passwordValue) ? '' : 'Password must contain at least one symbol';
        setPasswordError(lengthError || upperCaseError || numberError || symbolError);
    }
    function handleSubmit(event){
        event.preventDefault();
        if(fname.trim()=='' || lname.trim()=='' || email.trim()==''||password.trim()==''){
            alert("Please fill all the fields");
        }
        else if (emailError || passwordError) {
            alert('Form submission prevented due to errors');
        }
        else{
            const details={
                fname:fname,
                lname:lname,
                email:email,
                password:password
            }
            axios.post("http://localhost:4000/user/signup",details)
                .then((res)=>{
                    if(res.data.message==='true'){
                        navigate("/");
                    }
                    else{
                        alert('error');
                    }
                })
                .catch((err)=>{
                    alert("error while sign up");
                })
        }
    }
    return(
        <>
            <div className="logingrid">
            <div className="logintitle">
                    <h1 style={{marginLeft:"0px"}}>Rentify</h1>
                    <h2>Renting made easy.</h2>
                </div>
            <div className="signupbox" >
                <h1>Sign up</h1>
                    <form>
                        <div className="namefield">
                            <input type="text" placeholder="First Name" style={{width:"40%"}} onChange={handleFname}></input>&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="text" placeholder="Last Name" style={{width:"40%"}} onChange={handleLname}></input>
                        </div><br></br>
                        <input type="text" placeholder="Email" onChange={handleEmail}></input><br></br>
                        <span id="email-error" className="error">{emailError}</span><br />
                        <input type="password" placeholder="Password" onChange={handlePassword}></input><br></br>
                        <span id="password-error" className="error">{passwordError}</span><br /><br />
                        
                        <input type="submit" value="Sign up" onClick={handleSubmit}></input>
                    </form>
                    <p>Already a user Click to <span><a href="/">Login</a></span></p>
            </div>     
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150"><path fill="white" fill-opacity="1" d="M0,32L48,42.7C96,53,192,75,288,101.3C384,128,480,160,576,186.7C672,213,768,235,864,250.7C960,267,1056,277,1152,256C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
        </>
    )
}
export default SignUpBox
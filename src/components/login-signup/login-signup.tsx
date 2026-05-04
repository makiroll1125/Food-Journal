import { useState } from 'react'
import './login-signup.css'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
import person_icon from '../assets/person.png'

export default function LoginSignup() {
    const [action, setAction] = useState<string>("Sign Up");

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action === "Login" ? <div></div> : 
                <div className='input'>
                    <img src={person_icon} alt="" />
                    <input type="text" placeholder="Name"/>
                </div>
                }
                <div className='input'>
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="Email"/>
                </div>
                <div className='input'>
                    <img src={password_icon} alt=""/>
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            {action ==="Login" ? <div></div> : 
            <div className='forgot-password'>Lost Password? <span>Click Here!</span></div>
            }
            <div className='submit-container'>
                <div className={action==="Login" ? "submit gray" : "submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up" ? "submit gray" : "submit"} onClick={() => {setAction("Login")}}>Login</div>
            </div>
        </div>
    )
}
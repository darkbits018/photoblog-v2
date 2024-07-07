import React, { useState }  from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from './components/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './Login.css'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/upload');
        } catch (error) {
            console.error('Login failed:', error);
        }
    };
    return (
        <form className="form card" onSubmit={handleLogin}>
            <div className="card_header">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path fill="currentColor" d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"></path>
                </svg>
                <h1 className="form_heading">Sign in</h1>
            </div>
            <div className="field">
                <label htmlFor="username">Username</label>
                <input className="input" name="username" type="text" placeholder="Username" id="username" />
            </div>
            <div className="field">
                <label htmlFor="password">Password</label>
                <input className="input" name="user_password" type="password" placeholder="Password" id="password" />
            </div>
            <div className="field">
                <button className="button" type="submit">Login</button>
            </div>
        </form>
    )
};

export default Login
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Login.css';

const Login = () => {

    const { signIn } = useContext(AuthContext);

    // login hoye gele onno ek route a niye jabo setar jonno 
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        // for sign in/ log in 
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                form.reset();

                // login hoye gele onno ek route a niye jabo setar jonno 
                navigate('/');
            })
            .catch(error => {
                console.error('error', error);
            })

    }

    return (
        <div className='form-container'>
            <h1 className='form-title'>Please LogIn</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" placeholder='email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" placeholder='password' required />
                </div>
                <input className='btn-submit' type="submit" value="LogIn" />
            </form>
            <p>New to ema-jhon? <Link to='/signup'>Create a new account.</Link></p>
        </div>
    );
};

export default Login;
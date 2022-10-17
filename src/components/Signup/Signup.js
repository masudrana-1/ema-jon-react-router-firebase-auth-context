import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Signup.css';

const Signup = () => {

    // for use userContext 
    // distructure 
    const { createUser } = useContext(AuthContext);

    // for password validation state 
    const [error, setError] = useState(null);


    // for take form input value  
    const handleSubmit = (event) => {
        // for loading issue 
        event.preventDefault();

        // get form data 
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm);

        // password validation 
        if (password.length < 6) {
            setError('Password should be 6 characters or more');
            return;
        }

        if (password !== confirm) {
            setError('Your Password did not match');
        }


        // for signup 
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                // form reset 
                form.reset();
            })
            .catch(error => {
                console.error('error', error);
            })
    }

    return (
        <div className='form-container'>
            <h1 className='form-title'>Please SignUp</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" placeholder='email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" placeholder='password' required />
                </div>
                <div className="form-control">
                    <label htmlFor="confrim">Confirm password</label>
                    <input type="password" name="confirm" id="" placeholder='confirm password' required />
                </div>
                <input className='btn-submit' type="submit" value="SignUp" />
            </form>
            <p>Already have an account? <Link to='/signup'>LogIn</Link></p>

            {/* show error  */}
            <p className='error'>{error}</p>
        </div>
    );
};

export default Signup;
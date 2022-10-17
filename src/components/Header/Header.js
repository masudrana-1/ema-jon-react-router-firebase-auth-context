import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.error('error', error);
            })
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                {
                    <span className='user-info'>Your email: {user?.email}</span>
                }
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>

                {/* condition  */}
                {
                    user?.uid ?
                        <Link onClick={handleLogOut}>Log Out</Link>
                        :
                        <>
                            <Link to='/login'>LogIn</Link>
                            <Link to='/signup'>SignUp</Link>
                        </>
                }
            </div>
        </nav>
    );
};

export default Header;
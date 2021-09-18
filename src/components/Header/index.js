import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import Logo from './../../assets/newbbqlogo.jpg'

const Header = props => {
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="BBQ LOGO" />
                    </Link>
                </div>
                <div className="headerText">
                    SmokeShow
                </div>

                <div className="callToActions">
                    <ul>
                        <li>
                            <Link to="/registration">
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

        </header>
    );
};

export default Header;
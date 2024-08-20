import React from 'react';
import AcmeLogo from './AcmeLogo';

const Navbar: React.FC = () => {
    return (
        <nav>
            <AcmeLogo />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;

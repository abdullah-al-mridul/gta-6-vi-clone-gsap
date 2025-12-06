'use client';

import React, { useState } from 'react';
import FullScreenMenu from './FullScreenMenu';

const NavBarSection = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <nav>
                <img src="/images/nav-logo.svg" alt="logo" className="scale-90" />
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
                    <img
                        src="/images/menu.svg"
                        alt="menu"
                        className="w-10 cursor-pointer hover:scale-110 transition-transform"
                    />
                </button>
            </nav>
            <FullScreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
    );
};

export default NavBarSection;

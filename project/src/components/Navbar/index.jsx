import React from 'react';
import { ResponsiveNavbar } from '../ResponsiveNavbar';
import { NavbarDesktop } from '../NavbarDesktop';

export const Navbar = () => {
    return (
        <div>
            {/* NavbarDesktop visible solo en tabletas o pantallas más grandes */}
            <div className="hidden md:block">
                <NavbarDesktop />
            </div>

            {/* Navbar visible solo en móviles */}
            <div className="block md:hidden">
                <ResponsiveNavbar />
            </div>

        </div>
    );
};

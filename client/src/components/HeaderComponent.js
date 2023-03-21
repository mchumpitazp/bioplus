import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

function Header () {
    return (
        <Navbar className='pad-x-5'>
            <NavbarBrand>
                <img className='d-none d-sm-block' src='/logo.png' height='40px' alt="logo" />
                <img className='d-block d-sm-none' src='/logo.png' height='30px' alt="logo" />
            </NavbarBrand>

            <Nav navbar className='flex-row'>
                <NavItem className='d-none d-sm-block me-4'>
                        <i className='bi-envelope'></i>
                        <span className='ms-2'>sales@bioplus.com</span>
                </NavItem>
                <NavItem className='d-none d-sm-block'>
                        <i className='bi-telephone-outbound'></i>
                        <span className='ms-2'>+372 (698) 99 65</span>
                </NavItem>
                <NavItem className='d-block d-sm-none nav-item-sm'>
                        <i className='bi-telephone-outbound'></i>
                        <span className='ms-2'>+372 (698) 99 65</span>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default Header;
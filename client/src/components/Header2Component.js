import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

function Header2 () {
    return (
        <header>

            <Navbar>
                <NavbarBrand>
                    <img src='/logo.png' height='35px' alt="logo" />
                </NavbarBrand>

                <Nav className='ms-auto flex-row' navbar>
                    <NavItem className='d-none d-sm-block me-4'>
                            <i className='bi-envelope'></i>
                            <span className='ms-2'>sales@bioplus.com</span>
                    </NavItem>
                    <NavItem className='nav-item-sm'>
                            <i className='bi-telephone-outbound'></i>
                            <span className='ms-2'>+372 (698) 99 65</span>
                    </NavItem>
                </Nav>
            </Navbar>
        
        </header>
    );
}

export default Header2;
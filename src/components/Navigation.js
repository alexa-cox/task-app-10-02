import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function Navigation(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        expand='md'
        dark
        color='dark'
      >
        <NavbarBrand href='/'>
          <img
            src='/logo-black-192.png'
            alt='TaskTamer'
            style={{ width: '50px' }}
          />
          TaskTamer
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse
          isOpen={isOpen}
          navbar
        >
          <Nav
            className='me-auto'
            navbar
          >
            <NavItem>
              <NavLink href='/active-items'>Active Items</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/completed-items'>Completed Items</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;

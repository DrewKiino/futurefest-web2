import React, { Component } from 'react';
import { DropdownButton, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import classes from './NavigationBar.css';

class NavigationBar extends Component{

  navDropdown = () => {
    return (<NavDropdown id="" title="USERNAME" >
          <LinkContainer to="/assets" activeClassName="none">
            <MenuItem eventKey = "1"> Assets </MenuItem>
          </LinkContainer>

          <LinkContainer to="/profile" activeClassName="none">
            <MenuItem eventKey = "2"> Profile </MenuItem>
          </LinkContainer>

          <DropdownButton id = "" title="Become a Partner">
            <LinkContainer to="/partnerLink1" activeClassName="none">
              <MenuItem eventKey="3"> Dropdown link 1 </MenuItem>
            </LinkContainer>

            <LinkContainer to="/partnerLink2" activeClassName="none">
              <MenuItem eventKey="3"> Dropdown link 2 </MenuItem>
            </LinkContainer>
          </DropdownButton>

          <MenuItem eventKey = "5" divider/>
          <MenuItem eventKey = "6" href="#"> Sign Out </MenuItem>
        </NavDropdown>)
  }

  render = () => {
    console.log(this.props)
    return(
    <Navbar className={classes.navbarDefault}>
      <Nav pullRight>
        <LinkContainer to="/aboutUs">
          <NavItem>About Us</NavItem>
        </LinkContainer>

        <LinkContainer to="/artist">
          <NavItem>Artist</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
  )
  }
}

export default NavigationBar;

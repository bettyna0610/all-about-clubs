import React, { FC, ReactElement } from 'react';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
    } from "mdbreact";


    export class NavBar extends React.Component<{onClick:any}> {
        state = {
          on: false
        }
        
        toggle = () => {
          this.setState({
            on: !this.state.on
          })
          this.props.onClick(this.state.on)
        }

       
        

        render() {
            return (
                <MDBNavbar className="nav-color" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">all about clubs</strong>
        </MDBNavbarBrand>
       <button onClick={this.toggle}>Sort</button>
        </MDBNavbar>
            )
        }

    }
import React, { FC, ReactElement } from 'react';
import {
    MDBNavbar, MDBNavbarBrand, MDBIcon, MDBBtn, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
    } from "mdbreact";


    export class NavBar extends React.Component<{onClick:any}> {
        state = {
          on: false
        }
        
        toggle = () => {
          let parseStorage :any = localStorage.getItem('sortState')
          console.log(JSON.parse(parseStorage))
          let buttonState = JSON.parse(parseStorage)
          this.setState({
            on: !buttonState
          })
          this.props.onClick(this.state.on)
        }

       
        

        render() {
         
            return (
                <MDBNavbar className="nav-color" dark expand="md" scrolling fixed="top">
        <MDBNavbarBrand>
          <strong className="white-text ml-4">all about clubs</strong>
        </MDBNavbarBrand>
        <MDBNavbarNav right>
        <button className="btn btn-outline-success btn-floating btn-lg waves-effect">
        {!this.state.on ? <MDBIcon className="white-text" size="lg" onClick={this.toggle} icon="sort-amount-down-alt" /> : <MDBIcon className="white-text" onClick={this.toggle} icon="sort-alpha-down" /> 
        }
        </button>
        </MDBNavbarNav>
       
       
        </MDBNavbar>
            )
        }

    }
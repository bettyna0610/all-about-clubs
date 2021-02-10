import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBIcon, MDBNavbarNav} from "mdbreact";

    export class NavBar extends React.Component<{onClick:any}> {
        state = {
          on: localStorage.getItem('sortState') || true
        }
        
        toggle = () => {
          
          let parseStorage :any = localStorage.getItem('sortState')
          let buttonState = JSON.parse(parseStorage)
          this.setState({
            on: !this.state.on
          })
         
         this.props.onClick(!buttonState)
        }

       
        

        render() {
          let parsedState;
          if( typeof this.state.on === "string") {
            parsedState = JSON.parse(this.state.on)
          } else {
            parsedState = this.state.on
          }
          console.log(typeof parsedState)
         
            return (
                <MDBNavbar className="nav-color" dark expand="md" scrolling fixed="top" >
                  <MDBNavbarBrand>
                    <strong className="white-text ml-2">all about clubs</strong>
                  </MDBNavbarBrand>
                  <MDBNavbarNav right>
                    <button className="btn btn-outline-success btn-floating btn-lg p-0" onClick={this.toggle}>
                    {parsedState ? <MDBIcon className="white-text" size="lg"  icon="sort-amount-down-alt" />
                     : <MDBIcon className="white-text" onClick={this.toggle} icon="sort-alpha-down" /> }
                    </button>
                  </MDBNavbarNav>
                  </MDBNavbar>
              )
        }

    }
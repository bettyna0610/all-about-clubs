 import React, {useState, useEffect} from 'react'
 import {MDBNavbar, MDBNavbarBrand,MDBRow,MDBBox} from 'mdbreact'
 //import {MdArrowBack} from "react-icons/md";
 
 type State ={
     name:string,
     image:string,
     country:string,
     value:number,
     title: number

 }
 

 export class ClubPage extends React.Component<{match:any,location:any}> {
    
    state :State = {
     name: "",
     image:"",
     country:"",
     value:0,
     title:0
    }
    
    //let clubName=""; let clubImage; let clubCountry; let clubValue; let clubTitle

       componentDidMount () {
           /*
        const index = this.props.match.url.split('/')[this.props.match.url.split('/').length-1]
        fetch('https://public.allaboutapps.at/hiring/clubs.json')
        .then(response => response.json())
        .then((data) => {
         let clubName = data[index].name
         let clubImage = data[index].image
         let clubCountry = data[index].country
         let clubValue = data[index].value
         let clubTitle = data[index].european_titles*/

         const {clubName,clubImage,clubCountry,clubValue,clubTitle} = this.props.location.state

         this.setState({
             name:clubName,
             image:clubImage,
             country: clubCountry,
             value: clubValue,
             title: clubTitle
         })
         
        }
    
      
      
       
       render() {
           const {name,image,country,value,title} = this.state
        return (
            <div>
                 <MDBNavbar className="nav-color" dark expand="md">
            <MDBNavbarBrand>
            
              <strong className="white-text">{name}</strong>
            </MDBNavbarBrand>
           
            </MDBNavbar>
            <div  style={{backgroundColor:"#333333",textAlign:"center"}} >
            <img src={image} width="300px" height="300px" />
            <p style={{color:"white",textAlign:"left"}}><strong>{country}</strong></p>
            </div>
            
            <div>Der Club <strong>{name}</strong>  aus {country} hat einen Wert von {value} Millionen Euro.</div>
            <div><strong>{name}</strong> konnte bislang {title} Siege auf europäischer Ebene erreichen.</div>
            </div>
            
        )
       }

}
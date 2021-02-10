 import React from 'react'
 import {MDBNavbar, MDBNavbarBrand,MDBIcon,MDBCol,MDBRow} from 'mdbreact'
 import {Link} from 'react-router-dom'
 import {FormattedMessage} from "react-intl"

 
 type State ={
     name:string,
     image:string,
     country:string,
     value:number,
     title: number,
     loading:boolean,
     error: boolean
 }
 

 export class ClubPage extends React.Component<{match:any,location:any}> {
    
    state :State = {
     name: "",
     image:"",
     country:"",
     value:0,
     title:0,
     loading:true,
     error: false
    }
    

       componentDidMount () {
           
        const index = this.props.match.url.split('/')[this.props.match.url.split('/').length-1]
        fetch('https://public.allaboutapps.at/hiring/clubs.json')
        .then(response => { 
            if (!response.ok) {
            this.setState({
             error:true
            })
            } else {
              return response.json() }
            })
        .then((data) => {
            this.setState({
                loading:false
            })
         let clubName = data[index].name
         let clubImage = data[index].image
         let clubCountry = data[index].country
         let clubValue = data[index].value
         let clubTitle = data[index].european_titles


         this.setState({
             name:clubName,
             image:clubImage,
             country: clubCountry,
             value: clubValue,
             title: clubTitle
         })
         
        })
    
        }
      
       
       render() {
           const {name,image,country,value,title} = this.state
        return (
            <div>
              <MDBNavbar className="nav-color" dark expand="md" scrolling fixed="top">
               <MDBNavbarBrand>
                <MDBRow>
                  <MDBCol size="3">
                    <Link target="_blank" to="/" className="link" >
                      <MDBIcon icon="arrow-left" />
                    </Link>
                  </MDBCol>
                  <MDBCol size="3">
                    <strong className="white-text">{name}</strong>
                  </MDBCol>             
                </MDBRow>
               </MDBNavbarBrand>
              </MDBNavbar>
              {this.state.loading && <div className="text-center"><div style={{marginTop:"200px", width:"100px",height:"100px"}} 
              className=" spinner-border text-success" role="status"></div><span className="sr-only">Loading...</span></div>}
              {this.state.error ? <div style={{marginTop:200, textAlign:'center',color:'red'}}>
                  <FormattedMessage id="error" defaultMessage="The data is not available at the moment." /></div> 
                  : <div>
                      <div  style={{backgroundColor:"#333333",textAlign:"center"}} >
                           <img src={image} width="300px" height="300px" className="mt-3" />
                              <p  className="ml-3" style={{color:"white",textAlign:"left"}}><strong>{country}</strong></p>
                      </div>
            
                      <div className="ml-3"><FormattedMessage id="club" /> <strong>{name}</strong>
                       <FormattedMessage id="club-detail-value" values={{country,value}} />
                      </div>
                     <div className="ml-3"><strong>{name}</strong> <FormattedMessage id="club-title" values={{title}}/> </div>
                    </div>}
            </div>
            
        )
       }

}
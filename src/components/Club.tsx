import React, { FC, ReactElement } from 'react';
import {  MDBListGroupItem, MDBCol, MDBRow } from "mdbreact";
import {Link} from 'react-router-dom'
import {FormattedMessage} from "react-intl"

type Props = {
    name:string,
    country:string,
    image:string,
    value:number,
    index:number,
    title: number
}

export const Club :FC<Props> = ({name,country,image,value,index}):ReactElement => {
return (
    <Link target="_blank" to={`/detailsview/${index}`} > 
      <MDBListGroupItem hover> 
       <MDBRow>
        <MDBCol lg="1" className="mobile-image" >
          <img className="img-fluid" style={{width:"60px",height:"60px"}}  src={image}/>
        </MDBCol>
        <MDBCol lg="11" className="mobile-info">
          <MDBCol><strong>{name}</strong></MDBCol>
          <MDBCol> 
            <strong><FormattedMessage id="club-country" values={{country}} /></strong> {value} <FormattedMessage id="club-value"/>
          </MDBCol>
        </MDBCol>
       </MDBRow> 
      </MDBListGroupItem>
    </Link>    
     
)
}
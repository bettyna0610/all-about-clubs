import React, { FC, ReactElement } from 'react';
import {  MDBListGroupItem, MDBCol, MDBRow } from "mdbreact";
import {Link} from 'react-router-dom'

type Props = {
    name:string,
    country:string,
    image:string,
    value:number,
    index:number,
    title: number
}

export const Club :FC<Props> = ({name,country,image,value,index,title}):ReactElement => {
return (
    <Link target="_blank" to={`/detailsview/${index}`} >
      <MDBRow>
      <MDBCol size="12">
      
     <MDBListGroupItem hover>
     
    
     <MDBCol size="7">
     <MDBRow>
     <MDBCol size="1" >
     <img width="40px" height="40px" src={image}/></MDBCol>
     <MDBCol size="11">
     <MDBRow> <MDBCol><strong>{name}</strong></MDBCol></MDBRow>
     <MDBRow>
     <MDBCol> <strong>{country}</strong> {`${value} Millionen Euro`}</MDBCol>
     </MDBRow>
     
      </MDBCol>
      </MDBRow>
     </MDBCol>
     
      
     </MDBListGroupItem>
     
     </MDBCol>

    </MDBRow>

    </Link>
    
    
     
)
}
import React, {useEffect, useState,FC, ReactElement} from 'react'
import {Club} from './Club'
import {NavBar} from './NavBar'
import {FormattedMessage} from "react-intl"
import {MDBRow} from 'mdbreact'


type footballClubs = {
    name:string,
    country:string,
    value:number,
    image:string,
    european_titles:number
  }[];

 

export const ClubList :FC = ():ReactElement  => {

 
  const [clubs, setClubs] = useState<footballClubs>([])
  const [sort,setSort] = React.useState<any>(
    localStorage.getItem('sortState') || true
  );
  const [loading, setLoading] = useState(true)
  const [error,setError] = useState(false)
  
  
  const onClick = (childData :boolean) => {
  
   setSort(childData)
    sortClubs(sort)
    
  }
 
  const sortClubs = (sortType : boolean | string) => {
    fetch('https://public.allaboutapps.at/hiring/clubs.json')
    .then(response => { 
      if (!response.ok) {
           setError(true)
      } else {
        return response.json()
      } 
    })
    .then((data :any) => {
      setLoading(false)
      let clubData :any  = data.map( (club: {name:string,country:string,value:number,image:string,european_titles:number},index:number) => <Club name={club.name} index={index} country={club.country} value={club.value} image={club.image} title={club.european_titles} />)
      if (typeof sortType === "string") {
          if (sortType === "true") {
            sortType = true
          } else {
            sortType = false
          }

      }
       if (sortType === true) {
        let clubSorted = clubData.sort(
          (a:ReactElement, b:ReactElement) => {
              return a.props.name > b.props.name ? 1 : -1;
          }
         )
        setClubs(clubSorted)
       } else {
            let clubsByValue = clubData.sort((a:ReactElement, b:ReactElement) => {
              return a.props.value < b.props.value ? 1 : -1;     
          })
          setClubs(clubsByValue)   
      }
       
  })}
   
    
    useEffect(() => {
       
        sortClubs(sort)
          
    },[])

      localStorage.setItem('sortState',`${sort}`)
 
      return  (
              <div>
                <MDBRow >
                  <NavBar onClick={onClick} />
                </MDBRow>
                <MDBRow >
                 {error ?  <div style={{marginTop:200, textAlign:'center',color:'red'}}>
                 <FormattedMessage id="error" defaultMessage="The data is not available at the moment." />
                 </div> : clubs}
                { loading && <div className="text-center"><div style={{marginTop:"200px", width:"100px",height:"100px"}} className=" spinner-border text-success" role="status"></div>
                 <span className="sr-only">Loading...</span></div>}
                </MDBRow >
              </div>       
             
               )  
      
   }
    
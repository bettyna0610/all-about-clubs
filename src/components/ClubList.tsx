import React, {useEffect, useState,FC, ReactElement} from 'react'
import {Club} from './Club'
import {NavBar} from './NavBar'
import {MDBBox} from 'mdbreact'

type footballClubs = {
    name:string,
    country:string,
    value:number,
    image:string,
    european_titles:number,
    indexClub: any
  }[];

 

export const ClubList :FC = ():ReactElement  => {

  const [clubsAll,setAllClubs] = useState<any>()
  const [clubs, setClubs] = useState<footballClubs>([])
  const [sort,setSort] = useState<any>(true)
  const [loading, setLoading] = useState(true)
  const [error,setError] = useState(false)
  
   
 
 
  // JSON.parse(sortState)
  //console.log(sortState)
  

 
   

    useEffect(() => {
      let sortState2 :any = localStorage.getItem('sortState')
      sortState2 = JSON.parse(sortState2)
      console.log(sortState2)
       setSort(sortState2)
        console.log(sort)
        fetch('https://public.allaboutapps.at/hiring/clubs.json')
        .then(response => { 
          console.log(response)
          if (!response.ok) {
               setError(true)
          } else {
            return response.json()
          }
         
        })
        .then((data :any) => {
          setLoading(false)
          console.log(data)
          let clubData :any  = data && data.map( (club: {name:string,country:string,value:number,image:string,european_titles:number},index:number) => <Club name={club.name} index={index} country={club.country} value={club.value} image={club.image} title={club.european_titles} />)
          
          console.log(clubData)
          setAllClubs(clubData)
        
         
            let clubSorted = data && data.map( (club: {name:string,country:string,value:number,image:string,european_titles:number},index:number) => <Club name={club.name} index={index} country={club.country} value={club.value} image={club.image} title={club.european_titles} />)
            .sort(
              (a:any, b:any) => {
                  return a.props.name > b.props.name ? 1 : -1;
              }
          )
            setClubs(clubSorted)
             console.log(clubSorted)
          
       
          
         
       
          //setClubs(clubData)
        })
    
      },[])

      
  const onClick = (childData :boolean) => {
    setSort(childData) 
    console.log(sort)
    
}
  if (localStorage.getItem('sortState') === undefined) {
       localStorage.setItem('sortState',`${sort}`)
  }

console.log(localStorage.getItem('sortState'))

    let clubsByValue;
    if (sort ===false) {
      clubsByValue = clubsAll.sort((a:any, b:any) => {
        return a.props.value < b.props.value ? 1 : -1;
        
       
    })
   
  }

      return  (
          <div>
           
               <NavBar onClick={onClick} />
              
               {error ?  <div style={{marginTop:200, textAlign:'center',color:'red'}}>Die Daten sind im moment nicht erreichbar.</div> : (sort ? clubs :  clubsByValue)}
                { loading && <div className="text-center"><div style={{marginTop:"200px", width:"100px",height:"100px"}} className=" spinner-border text-success" role="status"></div>
  <span className="sr-only">Loading...</span>
</div>}
            
            
      
            </div>
            
             
      )  
      
}
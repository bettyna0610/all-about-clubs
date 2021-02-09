import React, {useEffect, useState,FC, ReactElement} from 'react'
import {Club} from './Club'
import {NavBar} from './NavBar'


type footballClubs = {
    name:string,
    country:string,
    value:number,
    image:string,
    european_titles:number,
    indexClub: any
  }[];

 

export const ClubList :FC = ():ReactElement  => {

 
  const [clubs, setClubs] = useState<footballClubs>([])
   const [sort,setSort] = React.useState<any>(
    localStorage.getItem('sortState') || true
  );
  const [loading, setLoading] = useState(true)
  const [error,setError] = useState(false)
  
   
 
 
  // JSON.parse(sortState)
  //console.log(sortState)
  
  const onClick = (childData :boolean) => {
   console.log(sort)
   setSort(childData)
    console.log(sort)
    sortClubs(sort)
    
}
 
   const sortClubs = (sortType : any) => {
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
      if (typeof sortType === "string") {
          if (sortType === "true") {
            sortType = true
          } else {
            sortType = false
          }

      }
      console.log(sortType)
       if (sortType === true) {
        //let clubSorted = data && data.map( (club: {name:string,country:string,value:number,image:string,european_titles:number},index:number) => <Club name={club.name} index={index} country={club.country} value={club.value} image={club.image} title={club.european_titles} />)
        let clubSorted = clubData.sort(
          (a:any, b:any) => {
              return a.props.name > b.props.name ? 1 : -1;
          }
      )
        setClubs(clubSorted)
         console.log(clubSorted)
       } else {
            let clubsByValue = clubData.sort((a:any, b:any) => {
              return a.props.value < b.props.value ? 1 : -1;
              
             
          })
          setClubs(clubsByValue)
          console.log(clubs)
           
          
         
      }
       
   })}

   //sortClubs(sort)
   
    
    useEffect(  () => {
      
     
       //setSort(sortState2)
       
        console.log(sort)
        
          sortClubs(sort)
         console.log(clubs)
       
          //setClubs(clubData)
          
    
      },[])

      localStorage.setItem('sortState',`${sort}`)
 
 /*
  if (localStorage.getItem('sortState') === undefined) {
       localStorage.setItem('sortState',`${sort}`)
  }

console.log(localStorage.getItem('sortState'))*/



      return  (
          <div>
           
               <NavBar onClick={onClick} />
              
               {error ?  <div style={{marginTop:200, textAlign:'center',color:'red'}}>Die Daten sind im moment nicht erreichbar.</div> : clubs}
                { loading && <div className="text-center"><div style={{marginTop:"200px", width:"100px",height:"100px"}} className=" spinner-border text-success" role="status"></div>
  <span className="sr-only">Loading...</span>
</div>}
            
            
      
            </div>
            
             
      )  
      
     }
    
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

  const [clubsAll,setAllClubs] = useState<any>()
  const [clubs, setClubs] = useState<footballClubs>([])
  const [sort,setSort] = useState<boolean>(true)
 
 
   

    useEffect(() => {
        fetch('https://public.allaboutapps.at/hiring/clubs.json')
        .then(response => response.json())
        .then((data :any) => {
          
          console.log(data)
          let clubData :any  = data.map( (club: {name:string,country:string,value:number,image:string,european_titles:number},index:number) => <Club name={club.name} index={index} country={club.country} value={club.value} image={club.image} title={club.european_titles} />)
          
          console.log(clubData)
          setAllClubs(clubData)

        let clubSorted = data.map( (club: {name:string,country:string,value:number,image:string,european_titles:number},index:number) => <Club name={club.name} index={index} country={club.country} value={club.value} image={club.image} title={club.european_titles} />)
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
 
    
    let clubsByValue;
    if (!sort) {
      clubsByValue = clubsAll.sort((a:any, b:any) => {
        return a.props.value < b.props.value ? 1 : -1;
        
       
    })
   
  }

      return  (
          <div>
              <NavBar onClick={onClick} />
           
           {sort ? clubs : clubsByValue }
          </div>
      )  
      
}
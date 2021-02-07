import React, {useEffect, useState,FC, ReactElement} from 'react'
import {Club} from './Club'
import {NavBar} from './NavBar'

type footballClubs = {
    name:string,
    country:string,
    value:string,
    image:string
  }[];

export const ClubList :FC = ():ReactElement  => {

  const [clubsAll,setAllClubs] = useState<footballClubs>([])
  const [clubs, setClubs] = useState<footballClubs>([])
  const [sort,setSort] = useState<boolean>(true)

 

  const onClick = (childData :boolean) => {
  setSort(childData)
  }

    useEffect(() => {
        fetch('https://public.allaboutapps.at/hiring/clubs.json')
        .then(response => response.json())
        .then((data :footballClubs) => {
          setAllClubs(data)
          data.sort(
            (a, b) => {
                return a.name > b.name ? 1 : -1;
            }
        )
         
         console.log(data)
          let clubData :any  = data.map( (club: {name:string,country:string,value:string,image:string}, index) => <Club name={club.name} index={index} country={club.country} value={club.value} image={club.image} />)
         
       
          setClubs(clubData)
        })
    
      }, [])

      
  let clubsByValue = clubsAll.sort((a, b) => {
    return a.value < b.value ? 1 : -1;
})

      return  (
          <div>
              <NavBar onClick={onClick} />
           {sort ? clubs : clubsByValue.map( (club: {name:string,country:string,value:string,image:string},index) => <Club name={club.name} index={index} country={club.country} value={club.value} image={club.image} />) }
          </div>
      )  
      
}
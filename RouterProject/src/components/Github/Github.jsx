import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
     const data =useLoaderData ()
     console.log(data);
//    const [data, setData] = useState([])
//     useEffect(() => {
//      fetch('https://api.github.com/users/hiteshchoudhary')
//      .then(response => response.json())
//      .then(data => {
//         console.log(data);
//         setData(data)
//      })
//     }, [])
  return (

    <div className = ' text-center m-4 text-while'>
     
      Github Follower:{data.public_repos}
      
     <img src={data.avatar_url}></img>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/patroswastik')
    return response.json()
}
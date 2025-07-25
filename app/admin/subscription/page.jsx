"use client"
import axios from 'axios'
import React, { useState,useEffect } from 'react'
const page = () => {
  const [col, setcol] = useState([])
  const fetchdata=async()=>
  {
    const response=await axios.get("/api/email")
    setcol(response.data.emails)
    console.log(response.data.emails)
  }
  useEffect(() => {
    fetchdata()
  }, [])
  
  return (
    <div>
      {col.map((item)=>{
        return <div key={item._id}> {item.email} </div>
      })}
    </div>
  )
}

export default page

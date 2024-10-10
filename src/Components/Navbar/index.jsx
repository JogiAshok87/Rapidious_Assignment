import React,{useState,useContext} from 'react'
import { Context } from '../../Context'
import './index.css'

const Navbar = () => {
  const {searchText,setSearchText} = useContext(Context)
  console.log(searchText)
  return (
    <div className='nav-bg'>
      <h1>Ecommerce App</h1>
      <input type="search" placeholder="Search..." className='search-box'  value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
    </div>
  )
}

export default Navbar
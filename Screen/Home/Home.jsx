import React from 'react'
import Carddata from '../../Components/Cards/Card'
import { Link } from 'react-router-dom'
import "../Home/Home.css"
 const Home = () => {
  return (
    <div>  
          <div className='About'>
          <Link to="/about"  className='Buttons' >About</Link>
          </div>
          <div className='Contact' >
          <Link to="/contact" className='Buttons' >Contact</Link>
          </div>
         <Carddata/>
         </div>

  )

}
export default Home;


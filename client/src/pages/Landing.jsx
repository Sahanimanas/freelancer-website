import React, { useEffect } from 'react'
import '../styles/landing.css'
import {PiStudent} from 'react-icons/pi'
import {FaHandHoldingWater} from 'react-icons/fa'
import {MdHealthAndSafety} from 'react-icons/md'
import {generatePath, useNavigate} from 'react-router-dom'
import { GeneralContext } from '../context/GeneralContext'
const Landing = () => {

  const navigate = useNavigate();
  const {setIsloggedin,logout} = useContext(GeneralContext)

  useEffect(()=>{
    if (localStorage.getItem("usertype") === 'freelancer'){
      setIsloggedin(true);
      navigate('/freelancer')
    } else if (localStorage.getItem("usertype") === 'client'){
      setIsloggedin(true);
      navigate( 'client')
    } else if (localStorage.getItem("usertype") === 'admin'){
      navigate("/admin")
    }
  })


  return (
    <div className="landing-page">

        <div className="landing-hero">

            <div className='landing-nav'>
              <h3>WorkX</h3>
              <button onClick={()=> navigate('/authenticate')} >Sign In</button>
            </div>

            <div className="landing-hero-text">

                <h1>Empower Your Journey: Elevate Your Craft on SB Works</h1>
                <p>Dive into a realm of endless possibilities with SB Works. Unleash your creativity, skills, and passion as you embark on a freelancing journey like never before. Our platform is a thriving marketplace where innovation meets opportunity, connecting talented freelancers with businesses seeking excellence. </p>
                <button onClick={()=> navigate('/authenticate')}>Join Now</button>
            </div>

        </div>

    </div>
  )
}

export default Landing
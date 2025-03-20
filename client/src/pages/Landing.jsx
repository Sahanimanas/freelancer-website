import React, { useEffect,useState } from 'react'
import '../styles/landing.css'
import {PiStudent} from 'react-icons/pi'
import {FaHandHoldingWater} from 'react-icons/fa'
import {MdHealthAndSafety} from 'react-icons/md'
import {useNavigate} from 'react-router-dom'

const Landing = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    if (localStorage.getItem("usertype") === 'freelancer'){
      navigate("/freelancer")
    } else if (localStorage.getItem("usertype") === 'client'){
      navigate("/client")
    } else if (localStorage.getItem("usertype") === 'admin'){
      navigate("/admin")
    }
  })
  const text = "Empower Your Journey: Elevate Your Craft on WorkX";
  const words = text.split(" ");
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < words.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + words[index] + " ");
        setIndex(index + 1);
      }, 100); // Adjust typing speed here (in milliseconds)

      return () => clearTimeout(timeout);
    }
  }, [index, words]);



  return (
    <div className="landing-page">

        <div className="landing-hero">

            <div className='landing-nav'>
              <h3>WorkX</h3>
              <button onClick={()=> navigate('/authenticate')} >Sign In</button>
            </div>

            <div className="landing-hero-text">

            <h1>{displayedText}</h1>
                <p>Dive into a realm of endless possibilities with WorkX. Unleash your creativity, skills, and passion as you embark on a freelancing journey like never before. Our platform is a thriving marketplace where innovation meets opportunity, connecting talented freelancers with businesses seeking excellence. </p>
                <button onClick={()=> navigate('/authenticate')}>Join Now</button>
            </div>

        </div>

    </div>
  )
}

export default Landing
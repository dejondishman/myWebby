import React from "react";
import './About.css'
import Afro from "../Images/Afro.jpg"
import Certificate from "../Images/Certificate.png"

const About = () => {
return(
    <div className="a">
     <div className="a-left">
         <div className="a-card bg"></div>
        <div className="a-card">
            <img src={Afro} alt="" className="a-img"/>
        </div>
     </div>
     <div className="a-right">
         <h1 className="a-title">About me</h1>
         <p className="a-sub">
            it is a long established fact that a reade will be distracted by the readblle content.            
        </p>
        <p className="a-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="a-award">
            <img src={Certificate} alt="" className="a-award-img" />
            <div className="a-award-texts">
             <h4 className="a-award-title">Software Engineering</h4>
             <p className="a-award-desc">
             Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
             </p>   
            </div>
        </div>
    </div>
    
    </div>
)
}

export default About
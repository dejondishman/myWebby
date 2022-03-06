import React from "react";
import './Content.css'
import Me from "./Images/Me.jpg"

const Content = () => {
    return(
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello my name is</h2>
                    <h1 className="i-name">Dejon Dishman</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">React Guru</div>
                            <div className="i-title-item">Sports Enthuaist</div>
                            <div className="i-title-item">Hip-Hop Enthuaist</div>
                            <div className="i-title-item">Web Developer</div>
                        </div>                    
                    </div>
                </div>
            </div>
            
            <div className="i-right">
             <img src={Me} alt="" className="i-img"/>    
            </div>
        </div>
    )
}


export default Content
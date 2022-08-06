import React from "react";



function AboutMe () {
    const imageStyle = {
        width: "150px"
    }
    return  <div className="Intro mb-5">
        
        <div className="container offset-md-1 mt-3">
        <div className="imageContainer mt-5 ">
        <img className="image rounded-circle " src="./1651355856458.jpeg" style={imageStyle}></img>
        </div>
        <h1><span className="intro-size">Hi, I'm</span> Gedion Adamu,</h1>
        <h1>Full Stack Developer.</h1>
        <p>I am a Web Developer with a background in Architecture and Design.
            I work with HTML, JavaScript, CSS and Git. <br />
            I would love to hear from you, whether you have a question or to just chat about Software engreeing or Tech in general.</p>
        
    </div>
</div>
}
export default AboutMe
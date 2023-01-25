import React from "react";
import Nate from "../Assets/img/nate.png";
import Background from "../Assets/img/background2.jpg";


function About() {
  return (
    <div style = {{backgroundImage: `url(${Background})`, borderBottom: "6px solid white"}}>
        <p className="content is-large" style = {{color: "white"}}>Current Marketeer and Aspiring Full Stack Developer</p>
        <hr />
        <div style = {{display: "flex", alignItems: "center"}}>
        <img className="me" src={Nate}alt="Nathan Underwood" style={{borderRadius: "100%"}}/>
        <div style = {{color: "white", padding: "10px", opacity: "70%"}}>
          <p id = "aboutP1" className="box content is-italic mt-4 content is-large">
          Full Stack Web Developer with a Marketing background and 6 years of experience as Director of Admissions Marketing at Mater Dei High School in Santa Ana, CA. Excited to build applications in tandem with expert marketing analytic and user-experience skills gained from previous employment. Known by my coworkers as a fierce competitor who stays calm and cool under pressure and can keep things light in the workplace. 
          </p>
          <p className="box content is-italic mt-4 content is-large">
          I'm confident my experience of aligning product with customer needs will help me work and create applications that are seamless and pleasurable for the user to experience. 
          </p>
        </div>
      </div>
      <hr />
    </div>
    
    
  );
}

export default About;
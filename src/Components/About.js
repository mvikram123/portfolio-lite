import React from "react";
import vikram from "../images/vikram.jpg";
const About=()=>{
    return(
        <div className="about">
            <h1>About</h1>
            <img src={vikram} alt="vikram pic"></img>;
            <p>Based on the information you've provided, 
                it seems that you are a software developer with skills in Java, Spring Boot, HTML, CSS, and MySQL.
                 These skills indicate that you have experience in both front-end and back-end web development, 
                 as well as database management. 
                 This skill set suggests that you are capable of building full-stack web applications and have knowledge of creating interactive and visually appealing user interfaces.</p>
        </div>
    )
}
export default About;
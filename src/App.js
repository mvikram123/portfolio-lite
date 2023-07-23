import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Section from "./Components/Section";
import "./index.css";
const App=()=>{
    return (
        <div>
            <Navbar />
            <About />
            <Section 
                title="Skills"
                desc="Based on the information you've provided, 
                it seems that you are a software developer with skills in Java, Spring Boot, HTML, CSS, and MySQL.
                 These skills indicate that you have experience in both front-end and back-end web development, 
                 as well as database management. 
                 This skill set suggests that you are capable of building full-stack web applications and have knowledge of creating interactive and visually appealing user interfaces"
            />
            <Section 
            title="Experience"
            desc="Based on the information you've provided, 
            it seems that you are a software developer with skills in Java, Spring Boot, HTML, CSS, and MySQL.
             These skills indicate that you have experience in both front-end and back-end web development, 
             as well as database management. 
             This skill set suggests that you are capable of building full-stack web applications and have knowledge of creating interactive and visually appealing user interfaces"
            
            />
            <Section 
            title="Project"
            desc="The combination of Java, Spring Boot, 
            and MySQL enables the development of a robust and feature-rich eCommerce platform, 
            providing users with a seamless shopping experience while ensuring efficient management for administrators."
            
            />
        </div>
    )
}
export default App;
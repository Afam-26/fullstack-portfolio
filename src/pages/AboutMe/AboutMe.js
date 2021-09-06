import React from "react"
import Typical from "react-typical";
import './style.css'

function AboutMe(){
    return (
        <div>
            <section id="aboutMe" className="row min-vh-100 justify-content-center align-items-center">
                <div className="card w-75 min-vh-50 aboutMeCardContainer justify-content-center align-items-center">
                    <div className="card-body my-2 aboutMeCard">
                      <h5 className="card-title">About Me</h5>
                   
                      <p className="card-text overflow-auto"> 
                        I earned my undergrad in Public Administration in 2009, and I worked as a Sales Manager at a tire shop where I worked closely with upper management,
                        met sales goals and lead a small team of sales associates. There, is where I gained my leadership skills and became a strong organizer and coordinator.  
                        <br/>
                        <br/>
                        After graduating from ACC with an Associate degree in LAN System Security and certificate in Network Admin, I joined Whole Foods Market as Sr. Service Desk Analyst.
                        There, is where I improved my leadership skills with the ability to motivate and influence others to deliver best results.
                        Proficiency at understanding, articulating and solving both complex and complicated problems  
                        <br/>
                        <br/>      
                        Full Stack developer from University of Texas at Austin Full Stack Software Development Bootcamp. 
                        Recognized as an innovative problem solver passionate about developing apps, with a focus on mobile-first design and responsive. 
                        Proven ability to work collaboratively alongside peers to achieve company objectives. 
                        High performer looking to leverage complex problem solving skills and the ability to work effectively with diverse teams to drive organizational growth.      
                    </p>
                    <a target="_blank" href="https://drive.google.com/file/d/1SHvMV8Z6lI9SJePScGGsoOgPpTs5KDg1/view?usp=sharing">Resume</a>
                    <br/>
                    <br/> 
                    <p className="my-6 text-blueGray-100">
              My skills include:{" "}
              <Typical
                className="font-mono"
                steps={[
                  "JavaScript",
                  1500,
                  "React.js",
                  1200,
                  "MongoDB",
                  1200,
                  "Node.js",
                  1000,
                  "Express.js",
                  900,
                  "MySQL",
                  800,
                  "HTML",
                  900,
                  "CSS",
                  900,
                  "jQuery",
                  1000,
                  "Bootstrap",
                  1000,
                  "Active Directory",
                  1000,
                  "TCP/IP",
                  1000,
                  
                ]}
                loop={Infinity}
                wrapper="p"
              />
            </p>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}

export default AboutMe

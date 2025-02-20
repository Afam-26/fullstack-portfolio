import React from 'react';
// import { SocialIcon } from "react-social-icons";
import Typical from "react-typical";
import "./style.css";

export default function Main() {
    return (

        // <div id="color" className="fixed-background-main bg-black">
        //     <section className="relative flex justify-start min-h-screen pt-6 lg:pt-32 px-8 flex-col">

        //         <div className=" block py-3 px-3  text-center">

        //             <h1 className="mt-10 sm:animate-float text-transparent bg-clip-text bg-gradient-to-t from-blueGray-400 to-blueGray-100 text-6xl font-bold custom-font text-center leading-none lg:leading-snug home-name">
        //                 Afam Anekeh, Certified Full Stack Developer.
                        
        //             </h1>      
                    
        //             <img id="profilePic" src="./assets/images/ME.jpg" alt="me" />
        //             <br/>
        //             <br/>
                
        //             <SocialIcon
        //                 url="https://github.com/Afam-26/"
        //                 className="transition duration-700 m-6 hover:opacity-80"
        //                 target="_blank"
        //                 bgColor="#818CF8"
        //                 fgColor="#0F172A"
        //                 style={{ height: 80, width: 80 }}
        //             />
                    
        //             <SocialIcon
        //                 url="https://www.linkedin.com/in/afam/"
        //                 className="transition duration-700 m-6 hover:opacity-80"
        //                 target="_blank"
        //                 bgColor="#818CF8"
        //                 fgColor="#0F172A"
        //                 style={{ height: 80, width: 80 }}
        //             />
                                      

        //         </div>
                
        //     </section>
        // </div>


<div id="header">
    
        <div class="container">
            <nav>
                {/* <!-- <img src="images/icons8-ram-48.png" class="logo"> --> */}
                <h1>Afam Anekeh</h1>
                <ul id="sidemenu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                    <i class="fa-solid fa-xmark" onclick="closemenu()"></i>
                </ul>
                <i class="fa-solid fa-bars" onclick="openmenu()"></i>
            </nav>
            {/* <div class="header-text">
                <p>UI/UX Designer</p>
                <h1>Hi I'm <span>Afam</span> from Austin TX</h1>

            </div> */}

            <p className="my-6 text-blueGray-100 name">
                        Hi I'm Afam from Austin TX I specialize in below:{" "}
                          <Typical
                            className="font-mono" 
                            steps={[
                              "Software Engineer",
                              1000,
                              "System Analyst",
                              1000,
                              "DevOp Engineer",
                              1000,
                            
                              
                            ]}
                            loop={Infinity}
                            wrapper="p"
                          />
                        </p>

        </div>

    </div>



    );
}

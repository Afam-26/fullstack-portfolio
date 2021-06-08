import React, { useState, useEffect} from "react" ;
import "./style.css";
// import PortfolioContext from "../utils/PortfolioContext";
import PortfolioData from "../../projects.json"


function MyProject() {

    const [portfolioState , setPortfolioState] = useState({
        id:PortfolioData[0].id,
        title:PortfolioData[0].title,
        url:PortfolioData[0].url,
        info:PortfolioData[0].info,
        image:PortfolioData[0].image
    })

    function handleChange(num){
        
        setPortfolioState({
            ...portfolioState,
            id:PortfolioData[num].id,
            title:PortfolioData[num].title,
            url:PortfolioData[num].url,
            info:PortfolioData[num].info,
            image:PortfolioData[num].image
        })
    }
    return (
        <div className= "box">
            <div className="jumbotron">
                <h1 className="display-4">{portfolioState.title}</h1>
                <img src={portfolioState.image} alt={portfolioState.title}></img>
                <hr className="my-4"/>
                <p>{portfolioState.info}</p>
                <p className="lead"> 
                    <button className="btn btn-info btn-lg" onClick={()=>handleChange(0)} >Film-Frisker</button>
                    <button className="btn btn-info btn-lg" onClick={()=>handleChange(1)}>Babar Booker</button> 
                    <button className="btn btn-info btn-lg" onClick={()=>handleChange(2)} >Cocktail on the run</button>  
                </p> 
            </div>
        </div>
        );
  }
  
  export default MyProject;
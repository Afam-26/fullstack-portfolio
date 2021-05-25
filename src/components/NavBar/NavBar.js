import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { green } from '@material-ui/core/colors';
import SvgIcon from '@material-ui/core/SvgIcon';
import './NavBar.css';




export default function Nav() {

    function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
    }
   
    return <>
        <header  className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid flex justify-between">
                <HomeIcon href="/" />
                {/* <a className="navbar-brand" href="#">Home</a> */}
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    
                </button> */}                
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active items-center py-3 px-5 my-6 rounded" aria-current="page" href="#">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active items-center py-3 px-5 my-6 rounded" href="#">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active items-center py-3 px-5 my-6 rounded" href="#">Resume</a>
                        </li>
                      
                    </ul>
                </div>
            </div>
        </header>

    </>;
}





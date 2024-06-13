import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Mainroute from "./Navbarcomponent/Mainrouter";
import App from "./App.jsx";
import Mainportfolionavbar from "./Navbarcomponent/navbarportfolio";

import Homepage from "./Portfolio-Pages/Home";
import "./App.css"
import Errormessage from './Products-componets/errorPage';
import { Page, Page2, Page3, Page4 } from "./Products-componets/page";



function Portfolio() {
   

    
    return (
        
        <div className="body-port">
          
                <Router>

                    <Routes>
                        {/* <Route path="/" element={<Mainportfolionavbar />}>
                            <Route path="" element={<Homepage />} />
                        </Route> */}
                        <Route path="*" element={<Errormessage />} />

                        <Route path="/" element={<App/>} >
                            <Route
                                path="/"
                                element={<Page />}
                            />
                            <Route
                                path="/page2"
                                element={<Page2 />}
                            />
                            <Route
                                path="/page3"
                                element={<Page3 />}
                            />
                            <Route
                                path="/page4"
                                element={<Page4 />}
                            />

                        </Route>
                    </Routes>
                </Router>
           

               
            
        </div>

        
    );
}

export default Portfolio;

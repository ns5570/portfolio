import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <br>
        </br>
        <span><h6>build by nishant with 🖤</h6></span>
        
        <div className="f-icons">
        
         <a href="https://www.instagram.com/_nishant_singh01/"> <Insta color="white" size={"3rem"} /></a>
         <a href="https://www.linkedin.com/in/nishant-singh-65606b1bb/"> <Facebook color="white" size={"3rem"} /></a>
          <a href="https://github.com/ns5570"><Gitub color="white" size={"3rem"} /></a>
          
        </div>
        <div className="love">
          
        </div>
      </div>
      
    </div>
    
  );
};

export default Footer;

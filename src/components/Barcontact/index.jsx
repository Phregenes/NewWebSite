import React from 'react';
import './styles.css';

const Barcontact = () =>(
  <div className="barcontact">
    <div className="container_ul">
    <div className="container_li">
      <a href="https://www.linkedin.com/in/phregenes/">
        <i className="fa fa-facebook" aria-hidden="true"></i>
        <span>•Linkedin</span>
      </a>
    </div>
    <div className="container_li">
      <a href="https://github.com/Phregenes">
        <i className="fa fa-google-plus" aria-hidden="true"></i>
        <span>•GitHub</span>
      </a>
    </div>
    <div className="container_li">
      <a href="https://instagram.com/phregenes/">
        <i className="fa fa-instagram" aria-hidden="true"></i>
        <span>•Instagram</span>
      </a>
    </div>
    </div>
  </div>
);
  
export default Barcontact;
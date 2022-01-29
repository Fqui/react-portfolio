import React from "react";
import "./intro.css";
import me from "../../img/me.png"

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-intro">Hola! Mi nombre es</h2>
          <h2 className="intro-name">Fernando Quintero</h2>
          <div className="intro-title">
            <h1>Desarrollador Web<span>&#160;</span></h1>
          </div>
          <p className="intro-description">
            Diseño y desarrollo aplicaciones web, futuro desarrollador de aplicaciones moviles.<br></br>
            Tienes un proyecto? enviame un correo y lo analizamos.
          </p>
        </div>
      </div>
      <div className="intro-right">
        <div className="intro-right-bg"></div>
        <img src={me} alt="" className="right-img" />
      </div>
    </div>
  );
};

export default Intro;

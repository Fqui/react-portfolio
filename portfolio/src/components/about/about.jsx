import "./about.css";

const about = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img
            src="https://images.pexels.com/photos/2468158/pexels-photo-2468158.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="about-img"
          />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">Sobre Mi</h1>
        <p className="about-subtitle">
        Soy un programador novato en segundo año de la Tecnicatura en Programacion de la UTN y estoy realizando un curso de Node JS.
        </p>
        <p className="about-descrption">
          Me gusta aprovechar todos los recursos online con el afán de convertirme en un Desarrollador Web Full-Stack capaz de
          encontrar soluciones sofisticadas a los distintos problemas que surgen en el desarrollo diario,
          como asi tambien poder crear nuevas aplicaciones basadas en buenas practicas y arquitecturas limpias.
      </p>
      </div>
    </div>
  );
};

export default about;

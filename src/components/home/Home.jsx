import "./home.css";
import me from "../../assets/me.png";
import cv from "../../assets/cv.pdf";
import HomeSocials from "./HomeSocials";

const Home = () => {
  return (
    <div className="home">
      <div className="container home_container">
        <div className="text">
          <h4>Hello i'm</h4>
          <h1>Marwan Mokhtar</h1>
          <h4 className="text-light">Frontend Developer</h4>
        </div>
        <div className="btns">
          <a href={cv} className="btn" download>
            Download cv
          </a>
          <a href="#" className="btn btn-primary">
            {" "}
            Let's Talk
          </a>
        </div>
        <div className="me">
          <img src={me} />
        </div>
        <HomeSocials />
        <a href="#about" className="scroll">
          Scroll Down
        </a>
      </div>
    </div>
  );
};

export default Home;

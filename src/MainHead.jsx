import "./MainHead.css";
import Tilt from "react-parallax-tilt";

export default function MainHead() {
  return (
    <div className="mainDiv">
      <div className="SubDiv1">
        <h1 className="mainHeading">
          Empowering the Silent, Educating the Future
        </h1>
        <div className="mainPara">
          <p>
            Our e-learning platform empowers the deaf and mute <br />
            community through sign language, and interactive <br /> content
            making education accessible beyond <br />
            spoken words.
          </p>
          <div>
            <button className="practicButton">Hands-On Practice</button>
          </div>
        </div>
      </div>
      <div className="subDiv2">
        <Tilt
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          glareEnable={true}
          glareMaxOpacity={0.5}
          glareColor="transparent"
          tiltReverse={true}
        >
          <div className="tiltContainer">
            <img className="mainImage" src="/MainImg4.png" alt="Image" />
          </div>
        </Tilt>
      </div>
    </div>
  );
}

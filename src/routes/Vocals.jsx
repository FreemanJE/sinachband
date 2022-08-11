import { NavLink } from "react-router-dom";
import Pics from "../image/sinach-vocals.jpg";
import Pics2 from "../image/sinach-vocals2.jpeg";

const Vocals = () => {
  return (
    <>
      {/* <h1 style={{color: 'white'}}> Vocals </h1> */}
      <nav style={{ textAlign: "center" }}>
        <NavLink className="nav" to="vocals">
          <img src={Pics} alt="bass" />
        </NavLink>{" "}
        |{" "}
        <NavLink className="nav" to="vocals">
          <img src={Pics2} alt="bass" />
        </NavLink>{" "}
        |{" "}
      </nav>
    </>
  );
};

export default Vocals;

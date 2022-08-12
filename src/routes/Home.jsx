import { NavLink } from "react-router-dom";
import Pics from "../image/sinach4.jpg";


const Home = () => {
  return (
    <div className="container1" style={{ textAlign: "center" }}>
      <NavLink to="vocals">
        <img className="homeImage1" src={Pics} alt="bass" />
      </NavLink>
    </div>
  );
};

export default Home;

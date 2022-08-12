import { NavLink } from "react-router-dom";
import Pics from "../image/sinach-guitar.jpg";

const Guitar = () => {
  return (
    <div className="container1" style={{ textAlign: "center" }}>
      <NavLink className="nav" to="guitar">
        <img src={Pics} alt="bass" />
      </NavLink>
      
    </div>
  );
};

export default Guitar;

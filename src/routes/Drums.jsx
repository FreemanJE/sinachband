import { NavLink } from "react-router-dom";
import Pics from "../image/sinach-drums.jpg";

const Drums = () => {
  return (
    <div className="container1" style={{ textAlign: "center" }}>
      <NavLink className="nav" to="drums">
        <img src={Pics} alt="bass" />
      </NavLink>
    </div>
  );
};

export default Drums;

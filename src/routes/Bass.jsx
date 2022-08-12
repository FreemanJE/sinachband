import { NavLink } from "react-router-dom";
import Pics from "../image/sinach-bass.jpg";

const Bass = () => {
  return (
    <div className="container1" style={{ textAlign: "center" }}>
      <NavLink to="vocals">
        <img src={Pics} alt="bass" />
      </NavLink>
    </div>
  );
};

export default Bass;

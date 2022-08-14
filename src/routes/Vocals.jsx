import { NavLink } from "react-router-dom";
import Pics from "../image/sinach-vocals.jpg";
import Pics2 from "../image/sinach-vocals2.jpeg";

const Vocals = () => {
  return (
    <div className="container1" style={{ textAlign: "center" }}>
      <NavLink to="vocals">
        <img src={Pics} alt="bass" />
      </NavLink>
      <NavLink to="vocals">
        <img src={Pics2} alt="bass" />
      </NavLink>
    </div>
  );
};

export default Vocals;

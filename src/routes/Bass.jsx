import { NavLink } from "react-router-dom";
import Pics from "../image/sinach-bass.jpg";
import Pics2 from "../image/bass2.jpg"


const Bass = () => {
  return (
    <div className=" container1 bassContainer" style={{ textAlign: "center" }}>
      <NavLink to="vocals">
        <img src={Pics} alt="bass"  className="bassContainer"  />
        <div className="overlay" >
          <div className="bass2">
            <img src={Pics2} alt="bass2" />
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Bass;

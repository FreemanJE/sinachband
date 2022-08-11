import { NavLink, Outlet } from "react-router-dom";
// import Footer from '../Footer'

export default function Navigation() {
  const style = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
    fontSize: isActive ? "22px" : "20px",
    color: isActive ? "red" : "white",
    margin: "20px",
  });

  return (
    <div className="navContainer">
        
      <NavLink className="bandName" to="/">
        SINACH
      </NavLink>{" "}
      <nav style={{ textAlign: "center" }}>
        <NavLink style={style} to="sinach">
          Home
        </NavLink>{" "}
        |{" "}
        <NavLink style={style} to="vocals">
          Vocals
        </NavLink>{" "}
        |{" "}
        <NavLink style={style} to="guitar">
          Guitar
        </NavLink>{" "}
        |{" "}
        <NavLink style={style} to="bass">
          Bass
        </NavLink>{" "}
        |{" "}
        <NavLink style={style} to="drums">
          Drums
        </NavLink>{" "}
        |{" "}
      </nav>
      {/* <Outlet /> */}
      {/* <div> <Footer /></div> */}
    </div>
  );
}

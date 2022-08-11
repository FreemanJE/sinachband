import { NavLink } from 'react-router-dom'
import Pics from '../image/sinach-drums.jpg'

const Drums = () => {

    return (
        <>
            <nav style={{ textAlign: "center" }}>
                <NavLink className="nav" to='drums' >
                    <img src={Pics} alt='bass' />
                </NavLink> |{" "}
            </nav>
        </>
    )
}

export default Drums
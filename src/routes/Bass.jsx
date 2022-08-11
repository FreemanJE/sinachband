import { NavLink } from 'react-router-dom'
import Pics from '../image/sinach-bass.jpg'

const Bass = () => {

    return (
        <>
            <nav style={{ textAlign: "center" }}>
                <NavLink className="nav" to='bass' >
                    <img src={Pics} alt='bass' />
                </NavLink> |{" "}

            </nav>
        </>
    )
}

export default Bass
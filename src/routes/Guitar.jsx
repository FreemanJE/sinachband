import { NavLink } from 'react-router-dom'
import Pics from '../image/sinach-guitar.jpg'

const Guitar = () => {

    return (
        <>
            <nav style={{ textAlign: "center" }}>
                <NavLink className="nav" to='guitar' >
                    <img src={Pics} alt='bass' />
                </NavLink> |{" "}

            </nav>
        </>
    )
}

export default Guitar
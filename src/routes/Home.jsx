import { NavLink } from 'react-router-dom'
import Pics from '../image/sinach-worship.jpg'

const Home = () => {

    return (
        <>
        
            <nav style={{ textAlign: "center" }}>
                <NavLink className="nav" to='sinach' >
                    <img src={Pics} alt='bass' />
                </NavLink> |{" "}

            </nav>
        </>
    )
}

export default Home
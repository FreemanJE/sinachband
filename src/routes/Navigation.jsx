import { NavLink, Outlet } from 'react-router-dom'
// import Footer from '../Footer'

export default function Navigation ( ) {

    const style = ({ isActive }) => ({
        fontWeight: isActive ? 'bold' : 'normal',
        fontSize: isActive ? '22px' : '20px',
        color: isActive ? 'red' : 'white',
        margin: '20px'


    });

    return (
        <>
            {/* <main style={{ textAlign: 'center' }}>
                <h2>Sinach Band</h2>
            </main> */}
            {/* <Navigation></Navigation> */}

            <nav style={{ textAlign: 'center' }}>

                <div className="div1">
                    <NavLink className="div1"  to='/'>SINACH</NavLink> {" "}
                </div>
                <NavLink style={style} to='sinach'>Home</NavLink> |{" "}
                <NavLink style={style} to='vocals'>Vocals</NavLink> |{" "}
                <NavLink style={style} to='guitar'>Guitar</NavLink> |{" "}
                <NavLink style={style} to='bass'>Bass</NavLink> |{" "}
                <NavLink style={style} to='drums'>Drums</NavLink> |{" "}
            </nav>
            <Outlet />

            
        
        {/* <div> <Footer /></div> */}
       </>
    )


}
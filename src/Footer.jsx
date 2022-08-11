import React, { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer" >
            {/* <nav>
                footer
            </nav> */}

                Copyright: <a href=" " className="anchorFooter">Etukas</a>
                <a className="anchor"
                    href="'"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="fab fa-linkedin"></i>
                </a>
                <a className="anchor"
                    href=" "
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="fab fa-github-square"></i>
                </a>
                <a className="anchor"
                    href=" "
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="fab fa-instagram"></i>
                </a>
                <a className="anchor"
                    href=" "
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="fab fa-youtube"></i>
                </a>
                <a className="anchor"
                    href=" "
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="fab fa-spotify"></i>
                </a>
                <a className="anchor"
                    href=" "
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="fab fa-tiktok"></i>
                </a>
           

        </footer>
    )
}

export default Footer
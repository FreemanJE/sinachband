import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      Copyright @{" "}
      <a href="https://github.com/FreemanJE" className="anchorFooter">
        Etukas
      </a>
      <a
        className="anchor"
        href="https://www.linkedin.com/in/freeman-johnson-links/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        className="anchor"
        href="https://github.com/FreemanJE"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github-square"></i>
      </a>
      <a className="anchor" href=" " target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
      <a className="anchor" href=" " target="_blank" rel="noopener noreferrer">
        <i className="fab fa-youtube"></i>
      </a>
      <a className="anchor" href=" " target="_blank" rel="noopener noreferrer">
        <i className="fab fa-spotify"></i>
      </a>
      <a className="anchor" href=" " target="_blank" rel="noopener noreferrer">
        <i className="fab fa-tiktok"></i>
      </a>
    </footer>
  );
};

export default Footer;

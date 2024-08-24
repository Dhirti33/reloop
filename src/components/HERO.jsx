import { useState } from 'react';
import "../styles/HERO.css";
import logo from "../images/reloopR.png";
import img1 from "../images/reloop2.jpg";
import { Link } from 'react-scroll';

const Hero = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);

        if (!menuOpen) {
            document.body.classList.add("no-scroll");
          } else {
            document.body.classList.remove("no-scroll");
          }
    };

    return (
        <section className="heroContainer">
            <nav className="navBar">
                <div className="Left">
                    <img className="reloopLogo" src={logo} alt="Logo" />
                    <div className="Name">ReLoop <p>Innovatives</p></div>
                </div>
                <div className={`Right ${menuOpen ? "open" : ""}`}>
                    <div className="MenuItem" ><Link to="what-we-do" smooth={true} duration={10} onClick={toggleMenu}>About</Link></div>
                    <div className="MenuItem" ><Link to="why-us" smooth={true} duration={10} onClick={toggleMenu}>Why Us</Link></div>
                    <div className="MenuItem" ><Link to="contact" smooth={true} duration={10} onClick={toggleMenu}>Contact</Link></div>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>

            <div className="hero">
                <div className="heroText">Turning Waste into Wealth for a Greener Tomorrow</div>
                <div className="heroBody">
                    <div className="textBody">At RELOOP Innovatives, we are revolutionizing sustainability through advanced solutions that convert waste into valuable resources. Join us in driving a global shift towards a circular economy that benefits businesses, communities, and the environment.</div>
                    <img className="heroImage" src={img1} alt="" />
                </div> 
            </div>
            <div className="cover"></div>
        </section>
    );
}

export default Hero;

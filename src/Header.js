import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    useEffect(() => {
        const toggleButton = document.querySelector('.navbar-toggler');
        const collapseContent = document.querySelector('#navbar-items');

        const handleToggle = () => {
            if (collapseContent.style.display === 'block') {
                collapseContent.style.display = 'none';
            } else {
                collapseContent.style.display = 'block';
            }
        };

        if (toggleButton) {
            toggleButton.addEventListener('click', handleToggle);
        }
        return () => {
            if (toggleButton) {
                toggleButton.removeEventListener('click', handleToggle);
            }
        };
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark p-5">
                <a href="#" className="navbar-brand text-dark">Ahmed Medhat</a>
                <button className="navbar-toggler" type="button" aria-controls="navbar-items" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbar-items">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#Home" className="nav-link text-dark">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#About" className="nav-link text-dark">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a href="#Projects" className="nav-link text-dark">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a href="#Skills" className="nav-link text-dark">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a href="#Education" className="nav-link text-dark">Education</a>
                        </li>
                        <li className="nav-item">
                            <a href="#Certificates" className="nav-link text-dark">Certificates</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <br /><br /><br /><br /><br />
            <header>
                <div className="home-landing" id="Home">
                    <h2>
                        I'm a creative graphic - web designer
                    </h2>
                    <p>
                        Hi, I'm Ahmed Medhat, a creative graphic and web designer. I have 3 years of experience in web development and IT tech, specializing in designing and building custom websites and developing apps. My skills include HTML5, CSS3, JavaScript, TypeScript, Bootstrap, Node.js, React.js, PHP, and Python.
                        <br /><br />
                        Headlines:
                        "BASEF'24 🥉 (SOFT) | IEEE YESIST12 Junior Einstein'24 National Level Winner 🥇| IT technician,
                        specialized in programming and web-development."
                    </p>
                </div>
                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </header>
        </>
    );
}

export default Header;

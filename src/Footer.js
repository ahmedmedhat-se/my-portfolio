import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-body-tertiary text-center">
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#ac2bac' }}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="#!"
                        role="button"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>

                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#0082ca' }}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/ahmed-medhat-ramadan-4061b7263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        role="button"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>

                    <a
                        data-mdb-ripple-init
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#333333' }}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/ahmedmedhat-se"
                        role="button"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </section>
            </div>
            <div className="text-center p-3">
                © 2024 Copyright:
                <a className="text-body" href="#Home">
                    Ahmed Medhat
                </a>
            </div>
        </footer>
    );
};

export default Footer;

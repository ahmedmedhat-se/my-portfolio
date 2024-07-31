import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Education = () => {
    return (
        <article>
            <div className="skill-section" id="Education">
                <div className="responsive-container-block padding-container">
                    <div className="responsive-container-block Container">
                        <div className="responsive-container-block image-container">
                            <div className="background"></div>
                            <img
                                className="image"
                                src="https://egyptschools.info/wp-content/uploads/2021/07/%D9%85%D8%AF%D8%B1%D8%B3%D8%A9-We.jpg"
                                alt="WE School"
                            />
                        </div>
                        <div className="responsive-container-block text-container">
                            <p className="list-paragraph heading">Education</p>
                            <div className="text-row">
                                <div className="list-bullet-icon"></div>
                                <p className="list-paragraph list-item-text">
                                    I am currently a student at WE, an esteemed applied technology school. Our curriculum is designed to
                                    prepare us for the dynamic tech industry, with a strong emphasis on practical and theoretical knowledge.
                                </p>
                            </div>
                            <div className="text-row">
                                <div className="list-bullet-icon"></div>
                                <p className="list-paragraph list-item-text">
                                    At WE, we delve deeply into telecommunications and networks, learning about the latest advancements and
                                    how to apply them in real-world scenarios. Our hands-on approach ensures we become proficient technicians.
                                </p>
                            </div>
                            <div className="text-row">
                                <div className="list-bullet-icon"></div>
                                <p className="list-paragraph list-item-text">
                                    Programming and web development are central to our studies at WE. Through rigorous training and projects,
                                    we acquire the skills necessary to build and maintain sophisticated web applications, making us adept in
                                    the digital landscape.
                                </p>
                            </div>
                            <div className="text-row last">
                                <div className="list-bullet-icon"></div>
                                <p className="list-paragraph list-item-text">
                                    As an IT Technician student majoring in programming and web development, I am gaining invaluable expertise
                                    that will pave the way for a successful career. WE's comprehensive education is equipping me to excel in
                                    the ever-evolving tech field.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Education;

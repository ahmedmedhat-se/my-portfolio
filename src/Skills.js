import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Skills = () => {
    return (
        <article>
            <div className="skill-section" id="Skills">
                <div className="responsive-container-block padding-container">
                    <div className="responsive-container-block Container">
                        <div className="responsive-container-block image-container">
                            <div className="background"></div>
                            <img
                                className="image"
                                src="https://images.credly.com/size/680x680/images/936c2900-1f39-4fd7-b458-9760001008fd/profile_img.jpg"
                                alt="Skills"
                            />
                        </div>
                        <div className="responsive-container-block text-container">
                            <p className="list-paragraph heading">Top Skills</p>
                            <div className="text-row">
                                <div className="list-bullet-icon"></div>
                                <p className="list-paragraph list-item-text">
                                    Web Developer: Proficient in HTML5, CSS3, JavaScript, TypeScript, Bootstrap, Node.js, React.js, and
                                    PHP; experienced in building responsive and dynamic web applications; strong understanding of web
                                    development best practices and frameworks; skilled in optimizing performance and ensuring
                                    cross-browser compatibility.
                                </p>
                            </div>
                            <div className="text-row">
                                <div className="list-bullet-icon"></div>
                                <p className="list-paragraph list-item-text">
                                    Python Developer: Expertise in Python programming and scripting; experience in automating tasks and
                                    developing efficient algorithms; proficient in debugging and testing Python code.
                                </p>
                            </div>
                            <div className="text-row">
                                <div className="list-bullet-icon"></div>
                                <p className="list-paragraph list-item-text">
                                    Data Analyst: Experienced in data visualization; proficient in using tools such as Excel, SQL, and
                                    Python for data analysis; skilled in statistical analysis and interpreting data trends; able to
                                    present findings in clear and actionable reports.
                                </p>
                            </div>
                            <div className="text-row last">
                                <div className="list-bullet-icon"></div>
                                <p className="list-paragraph list-item-text">
                                    Scientific Researcher: Conducts thorough and methodical scientific research; skilled in designing
                                    experiments, collecting and analyzing data; proficient in writing research papers and presenting
                                    findings; knowledgeable in various research methodologies and techniques.
                                </p>
                            </div>
                            <a
                                className="view-btn"
                                target="_blank"
                                href="https://www.linkedin.com/in/ahmed-medhat-ramadan-4061b7263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            >
                                View More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Skills;

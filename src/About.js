import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const About = () => {
    return (
        <section className="about-me" id="About">
            <h2>About Me</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <div className="card-header">
                            <img height={"350"} src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MjQ4OTM5NHx8ZW58MHx8fHx8" className="card-img-top" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">IT Tech</h5>
                            <p className="card-text">
                                I am a dedicated IT Technician specializing in programming and web development, driven by a passion for
                                problem-solving and innovation. Throughout my career, I have actively participated in numerous
                                competitions, consistently demonstrating my expertise and commitment to excellence.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-header">
                            <img height={"350"} src="https://www.societyforscience.org/wp-content/uploads/2019/08/20180517_Overhead_of_Floor_08_KR.jpg" className="card-img-top" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">My Journey</h5>
                            <p className="card-text">
                                My journey in competitive arenas has been marked by significant achievements. I am proud to
                                have reached
                                the finals of several prestigious Republican and international competitions, where I
                                showcased my skills
                                and creativity. These experiences have not only honed my technical abilities but also earned
                                me numerous
                                awards and certificates for my contributions to the field.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="card-header">
                            <img height={"350"} src="https://t4.ftcdn.net/jpg/06/20/76/37/360_F_620763712_lzjIErP2KxS5vhLoTV6tlJH7QKEX1NF7.jpg" className="card-img-top" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Level-Up</h5>
                            <p className="card-text">
                                Beyond competitions, I am deeply committed to staying at the forefront of technological
                                advancements and
                                leveraging my expertise to solve complex challenges in programming and web development. My
                                journey
                                continues to be fueled by a relentless pursuit of knowledge and a passion for innovation,
                                driving me to
                                deliver impactful solutions in the IT industry.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;

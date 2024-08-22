import React, { useState } from 'react';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const [tooltip, setTooltip] = useState({ visible: false, content: "", x: 0, y: 0 });

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skills = [
    { img: meter1, title: "Python Scripting", details: "Experience with scripting, automation, and task automation using Python." },
    { img: meter2, title: "ML Frameworks", details: "Proficient in various machine learning frameworks like TensorFlow, PyTorch, and scikit-learn." },
    { img: meter3, title: "Databases", details: "Skilled in designing, managing, and querying relational and NoSQL databases." },
    { img: meter1, title: "Data Analysis", details: "Expertise in analyzing complex data sets, using statistical tools and data visualization techniques." },
    { img: meter1, title: "DevOps", details: "Experience in CI/CD pipelines, cloud services, and infrastructure automation." }
  ];

  const showTooltip = (e, content) => {
    setTooltip({ visible: true, content, x: e.clientX, y: e.clientY });
  };

  const hideTooltip = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Acquired skills through academic and professional training include: <br></br></p>
                        <Carousel responsive={responsive} infinite={true}
                                  className="owl-carousel owl-theme skill-slider">
                            {skills.map((skill, index) => (
                                <div className="item" key={index}>
                                    <img src={skill.img} alt={skill.title}/>
                                    <h5
                                      onMouseEnter={(e) => showTooltip(e, skill.details)}
                                      onMouseLeave={hideTooltip}
                                    >
                                      {skill.title}
                                    </h5>
                                </div>
                            ))}
                        </Carousel>
                        {tooltip.visible && (
                            <div
                              style={{
                                position: 'fixed',
                                top: tooltip.y + 10, // Offset from the cursor
                                left: tooltip.x + 10,
                                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                                color: '#fff',
                                padding: '8px 12px',
                                borderRadius: '5px',
                                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                                maxWidth: '200px', // Control the width of the tooltip
                                lineHeight: '1.5em', // Line height for readability
                                zIndex: 1000,
                                whiteSpace: 'normal',
                                wordWrap: 'break-word',
                                opacity: 1,
                                pointerEvents: 'none'
                              }}
                            >
                              {tooltip.content}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Background"/>
    </section>
  );
}


/************ Skills Css ************/
/*.skill {*/
/*  padding: 50px 0; !* Added equal padding to top and bottom *!*/
/*  position: relative;*/
/*}*/
/*.skill-bx {*/
/*  background: #2d2d50;*/
/*  border-radius: 64px;*/
/*  text-align: center;*/
/*  padding: 60px 50px;*/
/*  margin-top: 0px; !* Removed the negative margin to balance the spacing *!*/
/*}*/
/*.skill h2 {*/
/*  font-size: 45px;*/
/*  font-weight: 700;*/
/*}*/
/*.skill p {*/
/*  color: #B8B8B8;*/
/*  font-size: 18px;*/
/*  letter-spacing: 0.8px;*/
/*  line-height: 1.5em;*/
/*  margin: 14px 0 75px 0;*/
/*}*/
/*.skill-slider {*/
/*  width: 100%;*/
/*  margin: 0 auto;*/
/*  position: relative;*/
/*}*/
/*.skill-slider .item img {*/
/*  width: 37%;*/
/*  margin: 0 auto 15px auto;*/
/*}*/
/*.background-image-left {*/
/*  top: 28%;*/
/*  position: absolute;*/
/*  bottom: 0;*/
/*  width: 40%;*/
/*  z-index: -4;*/
/*}*/
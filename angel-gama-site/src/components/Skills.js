import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TrackVisibility from 'react-on-screen';
import 'animate.css'
import { imagePaths } from "../constants/imagePaths";
import { SkillCircle } from "./SkillCircle";

export const Skills = () => {

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

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                        <h2>
                                            Skills
                                        </h2>
                                        <p>In addition to my technical skills, I bring valuable experience working in diverse and multicultural environments. Throughout my career, I have had the privilege of collaborating with teams from different parts of the world, including Argentina, Ukraine, India, and the United States. This exposure has not only enhanced my ability to adapt and communicate effectively, but it has also strengthened my proficiency in English as a language for seamless team collaboration.</p>
                                    </div>
                                }
                            </TrackVisibility>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__rubberBand" : ""}>
                                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                            <div className="item">
                                                <SkillCircle percent={90} circleWidth="200" />
                                                <h5>Android Studio</h5>
                                            </div>
                                            <div className="item">
                                                <SkillCircle percent={90} circleWidth="200" />
                                                <h5>Unity</h5>
                                            </div>
                                            <div className="item">
                                                <SkillCircle percent={90} circleWidth="200" />
                                                <h5>Mobile Development</h5>
                                            </div>
                                            <div className="item">
                                                <SkillCircle percent={70} circleWidth="200" />
                                                <h5>REACT</h5>
                                            </div>
                                        </Carousel>
                                    </div>
                                }
                            </TrackVisibility>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-skills" src={imagePaths.logo} alt="" />
        </section >
    )

}
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
            items: 4
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
        {
            name: 'Android Development',
            percent: 90
        },
        {
            name: 'Unity',
            percent: 85
        },
        {
            name: 'REACT',
            percent: 65
        },
        {
            name: 'Mobile Development',
            percent: 90
        },
        {
            name: 'Kotlin',
            percent: 85
        },
        {
            name: 'Python',
            percent: 80
        },
        {
            name: 'C#',
            percent: 75
        },
        {
            name: 'C/C++',
            percent: 70
        },
        {
            name: 'Java',
            percent: 70
        },
        {
            name: 'JavaScript',
            percent: 70
        },
        {
            name: 'TensorFlow',
            percent: 50
        },
        {
            name: 'Pytorch',
            percent: 50
        }
    ]

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
                                        <Carousel responsive={responsive} infinite={true} autoPlay={true} className="skill-slider">
                                            {
                                                skills.map((skill, index) => {
                                                    return (
                                                        <div className="item">
                                                            <SkillCircle percent={skill.percent} circleWidth="200" />
                                                            <h5>{skill.name}</h5>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </Carousel>
                                    </div>
                                }
                            </TrackVisibility>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-skills" src={imagePaths.reactlogo} alt="React Logo" />
        </section >
    )

}
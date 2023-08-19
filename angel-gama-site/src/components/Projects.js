import { Col, Row, Container, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { imagePaths } from "../constants/imagePaths";
import TrackVisibility from 'react-on-screen';
import 'animate.css'

export const Projects = () => {

    const projects = [
        {
            title: "SECBEN",
            description: "Design & development",
            imgUrl: imagePaths.ghlogo,
        },
        {
            title: "Electric Sheep",
            description: "Design & development",
            imgUrl: imagePaths.ghlogo,
        },
        {
            title: "Tezozomoc Museum",
            description: "Design & development",
            imgUrl: imagePaths.ghlogo,
        },
        {
            title: "Portfolio",
            description: "Design & development",
            imgUrl: imagePaths.ghlogo,
        },
        {
            title: "MeowMenu",
            description: "Design & development",
            imgUrl: imagePaths.ghlogo,
        },
        {
            title: "Hand Traking",
            description: "Design & development",
            imgUrl: imagePaths.ghlogo,
        },

    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                    <h2>Projects</h2>
                                    <p>Currently working on this, coming soon! 😄 </p>
                                </div>
                            }
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >Tab three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Some second</Tab.Pane>
                                <Tab.Pane eventKey="third">Some third</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-projects" src={imagePaths.gdlogo} alt="" />
        </section >
    )
}
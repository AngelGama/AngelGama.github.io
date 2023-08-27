import { Col, Container, Row } from "react-bootstrap"
import { imagePaths } from "../constants/imagePaths"
import { socialLinks } from "../constants/socialLinks"

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={imagePaths.mylogo} alt="Angel Garfias Logo" className="footer-logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end social-footer">
                        <div className="social-icon">
                            <a href={socialLinks.linkedin}><img src={imagePaths.inlogo} alt="LinkedIn" /></a>
                            <a href={socialLinks.github}><img src={imagePaths.ghlogo} alt="GitHub" /></a>
                            <a href={socialLinks.gdev}><img src={imagePaths.gdlogo} alt="Google Developer Profile" /></a>
                        </div>
                        <p>© 2023 Angel Garfias. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
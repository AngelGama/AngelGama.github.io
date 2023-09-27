import { Col, Container, Row } from "react-bootstrap"
import { imagePaths } from "../constants/imagePaths"
import { socialLinks } from "../constants/socialLinks"
import { Android, Github, Linkedin } from "react-bootstrap-icons"

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
                            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin color="var(--on-background)" aria-description="LinkedIn" /></a>
                            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer"><Github color="var(--on-background)" aria-description="GitHub" /></a>
                            <a href={socialLinks.gdev} target="_blank" rel="noopener noreferrer">< Android color="var(--on-background)" aria-description="Google Developers" /></a>
                        </div>
                        <p>© 2023 Angel Garfias. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
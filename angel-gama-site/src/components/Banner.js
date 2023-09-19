import { useState, useEffect, useCallback, useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircleFill } from "react-bootstrap-icons";
import { imagePaths } from "../constants/imagePaths";
import { socialLinks } from "../constants/socialLinks";
import TrackVisibility from "react-on-screen";
import 'animate.css';

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = useMemo(() => ['Garfias Maya  ', 'an Android Developer ', 'a Unity Developer ', 'a Mobile Developer '], []);
    const [text, setText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const [delta, setDelta] = useState(0);
    const period = 3000;
    const transitionDuration = 500;

    const tick = useCallback(() => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => Math.max(prevDelta - (transitionDuration / period) * prevDelta, 0));
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(150);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(150);
        }
    }, [isDeleting, loopNum, text, toRotate, period]);

    useEffect(() => {
        const animateText = () => {
            tick();
            setShowCursor(!showCursor);
            requestAnimationFrame(animateText);
        };

        const ticker = setInterval(() => {
            animateText();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [delta, tick, showCursor]);

    return (

        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <span className="tagline">Welcome to my Portfolio!</span>
                </Row>
                <Row className="align-items-center">
                    <Col xs={12} md={3} xl={3}>
                        <div className="banner-img">
                            <img src={imagePaths.profile} alt="Angel Garfias" />
                        </div>
                    </Col>
                    <Col xs={12} md={9} xl={9} className="mb-5">
                        <h1>{`Hi I'm Angel `}<span className="wrap">{text}</span><span className={showCursor ? 'cursor' : 'cursor-hidden'}>|</span></h1>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__swing" : ""}>
                                    <p>I'm a passionate and experienced Developer with a strong background in software development. I thrive on solving complex challenges in innovative ways, committed to staying up-to-date with the latest technologies, I'm eager to contribute to software development because I'm driven by the belief that technology serves as a creative tool to address social challenges and enhance lives.</p>
                                </div>
                            }
                        </TrackVisibility>
                        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="banner-link">Let's Connect<ArrowRightCircleFill size={25} /></a>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-banner" src={imagePaths.android} alt="Android Logo" />
        </section >
    )
}
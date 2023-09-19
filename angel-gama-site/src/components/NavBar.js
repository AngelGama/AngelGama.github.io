import { useEffect, useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { imagePaths } from '../constants/imagePaths';
import { socialLinks } from '../constants/socialLinks';
import { Toggle } from './Toggle';
import { ChevronBarUp } from 'react-bootstrap-icons';

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const menuRef = useRef(null);
    const toggleRef = useRef(null);

    const calculateActiveSection = () => {
        const scrollY = window.scrollY;

        const homeOffset = 70;
        const skillsOffset = document.getElementById('skills').offsetTop - (2 * homeOffset);
        const careerOffset = document.getElementById('career').offsetTop - (2 * homeOffset);

        if (scrollY >= careerOffset) {
            setActiveLink('career');
        } else if (scrollY >= skillsOffset) {
            setActiveLink('skills');
        } else {
            setActiveLink('home');
        }
    };

    useEffect(() => {
        const onScroll = () => {
            calculateActiveSection();
            if (window.scrollY > 500) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', onScroll);
        calculateActiveSection();

        return () => window.removeEventListener('scroll', onScroll);

    }, []);

    const onUpdateActiveLink = (link) => {
        setActiveLink(link);
        setExpanded(false);
    };

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (expanded && menuRef.current && !toggleRef.current.contains(event.target) && !menuRef.current.contains(event.target)) {
                setExpanded(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [expanded]);

    return (

        <Navbar expand="lg" onToggle={handleToggle} expanded={expanded}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={imagePaths.mylogo} alt="My Logo" className="my-icon" />
                    <p className="my-name">Angel Garfias</p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" ref={toggleRef}>
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" ref={menuRef}>
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className="navbar-link" active={activeLink === 'home'} onClick={() => onUpdateActiveLink('home')}>About Me</Nav.Link>
                        <Nav.Link href="#skills" className="navbar-link" active={activeLink === 'skills'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#career" className="navbar-link" active={activeLink === 'career'} onClick={() => onUpdateActiveLink('career')}>Career</Nav.Link>
                    </Nav>
                    <span className='navbar-toggle'>
                        <Toggle />
                    </span>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"><img src={imagePaths.inlogo} alt="LinkedIn" /></a>
                            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer"><img src={imagePaths.ghlogo} alt="GitHub" /></a>
                            <a href={socialLinks.gdev} target="_blank" rel="noopener noreferrer"><img src={imagePaths.gdlogo} alt="Google Developer Profile" /></a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
            <button type="button" className={`back-to-top-button ${scrolled ? 'scrolled' : ''}`} onClick={scrollToTop} aria-label="Scroll to Top"><ChevronBarUp /></button>
        </Navbar>
    );
}

export default NavBar;
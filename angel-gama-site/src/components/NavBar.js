import { useEffect, useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { imagePaths } from '../constants/imagePaths';
import { socialLinks } from '../constants/socialLinks';
import { Toggle } from './Toggle';

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);

    }, []);

    const onUpdateActiveLink = (link) => {
        setActiveLink(link);
        setExpanded(false);
    }

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (expanded && menuRef.current && !menuRef.current.contains(event.target)) {
                setExpanded(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [expanded]);

    return (

        <Navbar expand="lg" className={scrolled ? 'scrolled' : ''} expanded={expanded}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={imagePaths.mylogo} alt="My Logo" className="my-icon" />
                    <p className="my-name">Angel Garfias</p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}                >
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" ref={menuRef}>
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>About Me</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#career" className={activeLink === 'career' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('career')}>Career</Nav.Link>
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
        </Navbar>
    );
}

export default NavBar;
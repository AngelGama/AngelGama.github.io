import { Col, Row, Container, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { imagePaths } from "../constants/imagePaths";
import TrackVisibility from 'react-on-screen';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'animate.css'
import { CertificationCard } from "./CertificationCard";

export const Career = () => {

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

    const certifications = [
        {
            name: "Android Development with Kotlin",
            issuingOrganization: "Google Developers",
            issueDate: "April 2022",
            credentialUrl: "https://developers.google.com/profile/u/Angel_Gama",
            skills: ["Kotlin", "Android Studio", "Java", "Android Development", "Mobile Development"],
            imageUrl: imagePaths.gdlogo,
        },
        {
            name: "Jetpack Compose for Android Developers",
            issuingOrganization: "Google Developers",
            issueDate: "June 2023",
            credentialUrl: "https://developers.google.com/profile/u/Angel_Gama",
            skills: ["Kotlin", "Android Studio", "Jetpack Compose", "Android Development", "Mobile Development"],
            imageUrl: imagePaths.gdlogo,
        },
        {
            name: "Unity Essentials Pathway",
            issuingOrganization: "Unity",
            issueDate: "Nov 2022",
            credentialUrl: "https://www.credly.com/badges/7bfc9558-28fb-460e-a59d-5d613e02c6bc/linked_in_profile",
            skills: ["Unity", "Virtual Reality (VR)", "Augmented Reality (AR)", "C#", "RT3D", "Game Development", "Mobile Development"],
            imageUrl: imagePaths.unitylogo,
        },
        {
            name: "Desarrollo de Apps Móviles",
            issuingOrganization: "Google Activate",
            issueDate: "July 2020",
            credentialUrl: "https://skillshop.exceedlms.com/student/award/BzcpFGiBtTs2TsqRxjeCa3mq",
            skills: ["Kotlin", "Android", "iOS", "MVVM", "Mobile Development"],
            imageUrl: imagePaths.googlelogo,
        },
        {
            name: "Google IT Support",
            issuingOrganization: "Google Career Certificates",
            issueDate: "August 2023",
            credentialUrl: "https://coursera.org/share/59761f00738c832d300fd8a45f897db3",
            skills: ["Operating Systems", "Security Engineering", "Networking", "Algorithms", "Cloud Computing"],
            imageUrl: imagePaths.googlelogo,
        },
        {
            name: "Curso Profesional de Git & GitHub",
            issuingOrganization: "Platzi",
            issueDate: "August 2022",
            credentialUrl: "https://platzi.com/p/angeelgamma962/curso/1557-git-github/diploma/detalle/",
            skills: ["Git", "GitHub", "Terminal", "Version Control System (VCS)", "Branching", "Merging"],
            imageUrl: imagePaths.ghlogo,
        },
        {
            name: "Técnico en Electrónica",
            issuingOrganization: "Fundación Carlos Slim",
            issueDate: "August 2020",
            credentialUrl: "https://capacitateparaelempleo.org/verifica/c636178c-2c61-449f-88eb-76722b3281a1/04001255-dcef-49c1-b8c8-49d5ce19d3d5",
            skills: ["Circuit Design and Analysis", "Soldering and PCB Design", "Analog and Digital Electronics", "Digital Logic Design"],
            imageUrl: imagePaths.fcs,
        },
        {
            name: "Técnico en instalación y reparación de equipo de cómputo",
            issuingOrganization: "Fundación Carlos Slim",
            issueDate: "August 2020",
            credentialUrl: "https://capacitateparaelempleo.org/verifica/c636178c-2c61-449f-88eb-76722b3281a1/74d775ad-59c3-431d-aa19-a34caf709536",
            skills: ["Hardware Troubleshooting", "Computer Diagnostics", "BIOS and Firmware Configuration", "Operating Systems"],
            imageUrl: imagePaths.fcs,
        },
    ];

    return (
        <section className="career" id="career">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                    <h2>Career</h2>
                                    <p>Currently working on this, coming soon! 😄 </p>
                                </div>
                            }
                        </TrackVisibility>
                        <Tab.Container id="career-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Career</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Experience</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >Education & Certifications</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <p>🚧 Disclaimer: Under Construction! 🛠️</p>
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
                                <Tab.Pane eventKey="second">
                                    <p>🚧 Disclaimer: Under Construction! 🛠️</p>
                                    <img src={imagePaths.reactlogo} className="App-logo" alt="React logo" />
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <div className="container-certifications">
                                        <Swiper
                                            effect={'coverflow'}
                                            grabCursor={true}
                                            centeredSlides={true}
                                            loop={true}
                                            loopedSlides={3}
                                            slidesPerView={'auto'}
                                            coverflowEffect={
                                                {
                                                    rotate: 0,
                                                    stretch: 0,
                                                    depth: 100,
                                                    modifier: 3.5,
                                                    slideShadows: true,
                                                }
                                            }
                                            pagination={{ el: '.swiper-pagination', clickable: true }}
                                            navigation={{
                                                nextEl: '.swiper-button-next',
                                                prevEl: '.swiper-button-prev',
                                                clickable: true,
                                            }}
                                            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                                            autoplay={{
                                                delay: 2000,
                                                disableOnInteraction: true,
                                            }}
                                            className="swiper-container"
                                        >
                                            <SwiperSlide>
                                                <div className="education">
                                                    <a href="https://www.ipn.mx/" target="_blank" rel="noopener noreferrer"><img src={imagePaths.ipn} alt="IPN Logo" /></a>
                                                    <div>
                                                        <h1>Instituto Politécnico Nacional</h1>
                                                        <h2>Communications & Electronics Engineer</h2>
                                                        <h3>Specialization in Computing</h3>
                                                        <h4>2017-2022</h4>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            {
                                                certifications.map((certification, index) => {
                                                    return (
                                                        <SwiperSlide >
                                                            <CertificationCard
                                                                key={index}
                                                                {...certification}
                                                            />
                                                        </SwiperSlide>
                                                    )
                                                })
                                            }
                                            <div className="slider-controler">
                                                <div className="swiper-button-prev slider-arrow">
                                                    {'❮'}
                                                </div>
                                                <div className="swiper-button-next slider-arrow">
                                                    {'❯'}
                                                </div>
                                                <div className="swiper-pagination"></div>
                                            </div>
                                        </Swiper>
                                    </div>
                                    <p>🚧 Disclaimer: Under Construction! 🛠️</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-career" src={imagePaths.gdlogo} alt="Google Developers Logo" />
        </section >
    )
}
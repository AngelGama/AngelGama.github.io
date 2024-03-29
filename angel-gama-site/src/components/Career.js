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
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { projectsPaths } from "../constants/imagePaths";

export const Career = () => {

    const projects = [
        {
            title: "Portfolio",
            description: "Created using React.js to showcase my web development work and skills.",
            imgUrl: projectsPaths.portfolio,
        },
        {
            title: "Machine Learning Car",
            description: "Developed in Unity, it's an implementation of a custom TensorFlow Lite model that autonomously navigates a maze using three sensors.",
            imgUrl: projectsPaths.mlcar,
        },
        {
            title: "Car Driving Simulator",
            description: "A Unity project designed to train various driving skills and enhance expertise.",
            imgUrl: projectsPaths.secben,
        },
        {
            title: "Procedural Lightning Generator",
            description: "A 2D Unity project that generates storms with up to five different types of lightning using procedural generation.",
            imgUrl: projectsPaths.lightningpg,
            link: "https://github.com/AngelGama/UnityLightnings"
        },
        {
            title: "Cinematic Lightning Study",
            description: "An implementation of basic lighting concepts in Unity to enhance visual effects.",
            imgUrl: projectsPaths.lightningstudy,
            link: "https://play.unity.com/mg/other/cinematic-lighting-study-challenge"
        },
        {
            title: "Pachinko Challenge",
            description: "A Unity project that is a simple pachinko game applying the basics of 2D physics.",
            imgUrl: projectsPaths.packinko,
            link: "https://play.unity.com/mg/other/pachinkobuild-33"
        },
        {
            title: "Floor Is Lava",
            description: "Similar to Pachinko but with 3D physics, this Unity project challenges a ball to avoid a lava floor.",
            imgUrl: projectsPaths.floorislava,
            link: "https://play.unity.com/mg/other/floorislavabuild-57"
        },
        {
            title: "Essentials 3D Audio",
            description: "Developed in Unity, this project showcases the implementation of 3D audio for a more immersive experience.",
            imgUrl: projectsPaths.audio3d,
            link: "https://play.unity.com/mg/other/essentials-3d-audio"
        },
        {
            title: "Still Life Challenge",
            description: "A Unity project focusing on rendering and shaders to create complex materials like steel, glass, bricks & shaders with futuristic effects",
            imgUrl: projectsPaths.stilllife,
        },
        {
            title: "Business Card",
            description: "Built with Android Jetpack Compose, it serves as my digital business card, demonstrating my Android app development skills.",
            imgUrl: projectsPaths.businessCard,
        },
        {
            title: "Pokedex",
            description: "Crafted with Jetpack Compose, it embodies the MVVM architecture for clean, modular code. Featuring seamless dependency injection with Dagger Hilt, this app is your gateway to Pokemon information, powered by real-time data from pokeapi.co.",
            imgUrl: projectsPaths.pokedex,
            link: "https://github.com/AngelGama/ComposePokedex"
        },
        {
            title: "Games Database",
            description: "An Android app that interfaces with a Games API to display a list of popular games and allows users to add custom games to the database using SQLite. Demonstrates my Android development and database skills.",
            imgUrl: projectsPaths.games,
        },
    ];

    const experience = [
        {
            title: "Unity Developer",
            location: "CDMX, Mexico",
            startDate: "November 2022",
            endDate: "February 2023",
            description: "Creating cross-platform Unity screensaver client: Android, iOS, OSX, Windows, Linux, tvOS, C++ to C# migration, interpolation systems, Mitchell-Netravali filters, custom shaders.",
            icon: imagePaths.unitylogo,
        },
        {
            title: "Android SME",
            location: "Guadalajara, Mexico",
            startDate: "February 2022",
            endDate: "October 2022",
            description: "Android SME, Mentorship, Junior Developer Support, Bug Monitoring, Android Development, Mobile & TV Projects.",
            icon: imagePaths.android,
        },
        {
            title: "VR Developer",
            location: "CDMX, Mexico",
            startDate: "December 2021",
            endDate: "February 2022",
            description: "Unity VR App Development, Android VR App Creation, LEAP Motion Controller Integration.",
            icon: imagePaths.vricon,
        },
        {
            title: "Communications & Electronics Engineering",
            location: "Specialization in Computing",
            startDate: "August 2017",
            endDate: "December 2021",
            description: "Studied Communications and Electronics Engineering with a specialization in Computing at IPN. Developed expertise in areas such as computer architecture, software development, and digital communications.",
            icon: imagePaths.school,
        },
        {
            title: "Development of innovation and research projects in computer science, Internship",
            location: "CDMX, Mexico",
            startDate: "March 2021",
            endDate: "December 2021",
            description: "Exploring innovative computer science projects, crafting car driving simulators, creating Android apps in Unity, training AI with TensorFlow Lite.",
            icon: imagePaths.csicon,
        }
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
            issueDate: "September 2023",
            credentialUrl: "https://coursera.org/share/732e2d1b35453f5251170e755f0d1ca8",
            skills: ["Operating Systems", "Security Engineering", "Networking", "Algorithms", "Cloud Computing"],
            imageUrl: imagePaths.googlelogo,
        },
        {
            name: "Google UX Design Professional Certificate",
            issuingOrganization: "Google Career Certificates",
            issueDate: "In Progress",
            credentialUrl: "https://coursera.org/share/112a5cf8d0b4acb5cf41504617ea49c1",
            skills: ["User Experience (UX)", "User Interface (UI)", "Wireframing", "Prototyping", "Design Thinking"],
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
                                <div className={isVisible ? "animate__animated animate__headShake" : ""}>
                                    <h2>Career</h2>
                                    <p>Welcome to my career section where I showcase my professional journey, projects, and qualifications. Explore the tabs below to learn more about my experiences, skills, and education. 🚀 </p>
                                </div>
                            }
                        </TrackVisibility>
                        <Tab.Container id="career-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Projects</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Professional Journey</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >Education & Certifications</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row className="projects-row">
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
                                    <VerticalTimeline
                                        lineColor="var(--on-background)"
                                    >
                                        {
                                            experience.map((job, index) => {

                                                const iconBackgroundColor = index === 3 ? '#00637E' : '#7030A0';

                                                return (
                                                    <VerticalTimelineElement
                                                        key={index}
                                                        className="vertical-timeline-element--work"
                                                        contentStyle={{ background: 'var(--surface-variant)', color: 'var(--primary)' }}
                                                        contentArrowStyle={{ borderRight: '7px solid  var(--primary)' }}
                                                        date={job.startDate + " - " + job.endDate}
                                                        iconStyle={{ background: iconBackgroundColor }}
                                                        icon={<img src={job.icon} alt={`${job.title} Icon`} style={{ width: '100%', padding: '5px' }} />}
                                                    >
                                                        <h3 className="vertical-timeline-element-title">{job.title}</h3>
                                                        <h4 className="vertical-timeline-element-subtitle">{job.location}</h4>
                                                        <p>{job.description}</p>
                                                    </VerticalTimelineElement>
                                                )
                                            })
                                        }
                                        <VerticalTimelineElement
                                            iconStyle={{ background: '#22B9C1', color: '#fff' }}
                                            icon={<img src={imagePaths.starticon} alt="Start Icon" style={{ width: '100%', padding: '8px' }} />}
                                        />
                                    </VerticalTimeline>
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
                                                disableOnInteraction: false,
                                                pauseOnMouseEnter: true,
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
                                                        <SwiperSlide key={index}>
                                                            <CertificationCard
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
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Container, Row, Col, Button, Card } from 'react-bootstrap';

// function Home() {
//     return (
//         <div className="bg-light min-vh-100">
//             {/* Hero Section */}
//             <div className="py-5 bg-primary text-white text-center">
//                 <Container>
//                     <h1 className="display-4 fw-bold">E-Resource Technology</h1>
//                     <p className="lead">Official, Verified Educational Resources and Direct Professor Interaction</p>
//                     <div className="d-flex justify-content-center gap-3 mt-4">
//                         <Link to="/resources">
//                             <Button variant="light" className="fw-semibold text-primary">Explore Resources</Button>
//                         </Link>
//                         <Link to="/login">
//                             <Button variant="outline-light" className="fw-semibold">Get Started</Button>
//                         </Link>
//                     </div>
//                 </Container>
//             </div>

//             {/* Features */}
//             <Container className="py-5">
//                 <div className="text-center mb-5">
//                     <h2 className="fw-bold">Why Choose E-Resource Technology?</h2>
//                     <p className="text-muted">We provide verified, official resources that save time and ensure quality education.</p>
//                 </div>
//                 <Row className="g-4">
//                     <Col md={4}>
//                         <Card className="h-100 border-0 shadow-sm">
//                             <Card.Body>
//                                 <h5 className="card-title fw-bold">✅ Verified & Legal</h5>
//                                 <Card.Text>
//                                     All resources are from official sources and legally verified for safe and ethical usage.
//                                 </Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                     <Col md={4}>
//                         <Card className="h-100 border-0 shadow-sm">
//                             <Card.Body>
//                                 <h5 className="card-title fw-bold">⏱️ Time Efficient</h5>
//                                 <Card.Text>
//                                     Skip endless Google searches. Get what you need in seconds — fast and relevant.
//                                 </Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                     <Col md={4}>
//                         <Card className="h-100 border-0 shadow-sm">
//                             <Card.Body>
//                                 <h5 className="card-title fw-bold">👨‍🏫 Expert Professors</h5>
//                                 <Card.Text>
//                                     Connect with real professors and receive guidance from India’s and the world’s best institutions.
//                                 </Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                     <Col md={4}>
//                         <Card className="h-100 border-0 shadow-sm">
//                             <Card.Body>
//                                 <h5 className="card-title fw-bold">📚 E-Book Library</h5>
//                                 <Card.Text>
//                                     Access downloadable PDF books from reputed publications and universities.
//                                 </Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                     <Col md={4}>
//                         <Card className="h-100 border-0 shadow-sm">
//                             <Card.Body>
//                                 <h5 className="card-title fw-bold">🌐 Filtered Search</h5>
//                                 <Card.Text>
//                                     Search tools and course filters ensure you only see verified, useful results.
//                                 </Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                     <Col md={4}>
//                         <Card className="h-100 border-0 shadow-sm">
//                             <Card.Body>
//                                 <h5 className="card-title fw-bold">💬 Interactive Learning</h5>
//                                 <Card.Text>
//                                     Students and professors can interact directly to make learning collaborative.
//                                 </Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 </Row>
//             </Container>

//             {/* Stats Section */}
//             <div className="bg-white py-5 border-top">
//                 <Container>
//                     <Row className="text-center g-4">
//                         <Col md={3}>
//                             <h3 className="fw-bold text-primary">10,000+</h3>
//                             <p className="text-muted">Students Registered</p>
//                         </Col>
//                         <Col md={3}>
//                             <h3 className="fw-bold text-success">500+</h3>
//                             <p className="text-muted">Expert Professors</p>
//                         </Col>
//                         <Col md={3}>
//                             <h3 className="fw-bold text-warning">50,000+</h3>
//                             <p className="text-muted">Resources Available</p>
//                         </Col>
//                         <Col md={3}>
//                             <h3 className="fw-bold text-danger">100+</h3>
//                             <p className="text-muted">Partner Institutes</p>
//                         </Col>
//                     </Row>
//                 </Container>
//             </div>
//         </div>
//     );
// }

// export default Home;


import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

function Home() {
    return (
        <div className="home-wrapper bg-dark text-white">
            {/* Hero Section */}
            <section className="hero-section text-center d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
                <h1 className="display-2 fw-bold text-glow">E-Resource Technology</h1>
                <p className="lead fs-4 mb-4">Official Materials • Real Professors • Smarter Learning</p>
                <div className="d-flex gap-3 flex-wrap">
                    <Link to="/resources"><Button variant="outline-light" className="glass-btn px-4 py-2">📚 Explore</Button></Link>
                    <Link to="/login"><Button variant="light" className="fw-bold text-primary px-4 py-2">Get Started</Button></Link>
                </div>
            </section>

            {/* Features */}
            <section className="section-features py-5 position-relative">
                <Container>
                    <div className="text-center mb-5">
                        <h2 className="display-5 text-accent">Why Choose Us?</h2>
                        <p className="text-white-50 fs-5">Verified, efficient, and ethical education support.</p>
                    </div>
                    <Row className="g-4 ">
                        {[{ icon: "✅", title: "Verified & Legal", text: "Official, legal resources only." },
                        { icon: "⚡", title: "Time Saver", text: "Fast search, smart filters." },
                        { icon: "👨‍🏫", title: "Real Professors", text: "Get help from real educators." },
                        { icon: "📚", title: "PDF Library", text: "Thousands of curated ebooks." },
                        { icon: "🔍", title: "Search Smart", text: "Advanced filters for accuracy." },
                        { icon: "💬", title: "Live Interaction", text: "Chat with verified experts." }].map((item, i) => (
                            <Col lg={4} md={6} key={i}>
                                <Card className="glass-card text-white text-center p-4 h-100">
                                    <div className="icon-large mb-3">{item.icon}</div>
                                    <h5 className="fw-bold mb-2">{item.title}</h5>
                                    <p className="text-white-50">{item.text}</p>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Visual Gallery Section */}
            <section className="section-gallery py-5 bg-gradient-dark">
                <Container>
                    <h2 className="text-center text-white mb-5">Experience in Action</h2>
                    <Row className="g-4 justify-content-center">
                        {[1, 2, 3].map((n) => (
                            <Col md={4} key={n}>
                                <div className="screenshot-wrapper">
                                    <img src={`https://via.placeholder.com/400x250?text=Screenshot+${n}`} alt={`screenshot${n}`} className="img-fluid rounded shadow-lg" />
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Timeline */}
            <section className="section-timeline py-5 bg-black">
                <Container>
                    <h2 className="text-center mb-5 text-white">How It Works</h2>
                    <Row className="timeline-row text-center g-4">
                        {["Create Account", "Browse Content", "Download Instantly", "Connect with Professors"].map((step, i) => (
                            <Col md={3} key={i}>
                                <div className="timeline-step p-4 border rounded-4 h-100">
                                    <div className="display-6 fw-bold mb-2">{i + 1}</div>
                                    <p className="mb-0">{step}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Testimonials */}
            <section className="section-testimonials py-5 bg-secondary">
                <Container>
                    <h2 className="text-center mb-5 text-white">User Feedback</h2>
                    <Row className="g-4">
                        {["E-Resource helped me crack my exams!", "Official content I can trust.", "Live doubt solving is amazing!"].map((quote, i) => (
                            <Col md={4} key={i}>
                                <Card className="testimonial-card p-4 bg-dark text-white border-0 shadow">
                                    <p className="fst-italic">“{quote}”</p>
                                    <p className="text-end mb-0">— Student {i + 1}</p>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>


            {/* Stats */}
            <section className="section-stats py-5 bg-dark">
                <Container>
                    <Row className="text-center g-4">
                        {[{ value: "👨‍🎓 10,000+", label: "Students" },
                        { value: "👩‍🏫 500+", label: "Professors" },
                        { value: "📂 50,000+", label: "Resources" },
                        { value: "🏛️ 100+", label: "Institutions" }].map((item, i) => (
                            <Col md={3} key={i}>
                                <div className="stat-card glass-card text-white py-4 px-3 h-100 rounded-4">
                                    <h3 className="fw-bold display-6 text-white mb-2">{item.value}</h3>
                                    <p className="text-white-50 mb-0">{item.label}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Final CTA */}
            <section className="section-cta py-5 text-center bg-primary text-white">
                <Container>
                    <h2 className="mb-3">Join the Learning Revolution</h2>
                    <p className="mb-4">Thousands of learners and educators trust E-Resource Technology daily.</p>
                    <Link to="/login">
                        <Button variant="light" className="fw-bold text-primary px-5 py-3 rounded-pill shadow">Join Now</Button>
                    </Link>
                </Container>
            </section>
        </div>
    );
}

export default Home;


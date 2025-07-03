import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

function Home() {
    return (
        <div className="bg-light min-vh-100">
            {/* Hero Section */}
            <div className="py-5 bg-primary text-white text-center">
                <Container>
                    <h1 className="display-4 fw-bold">E-Resource Technology</h1>
                    <p className="lead">Official, Verified Educational Resources and Direct Professor Interaction</p>
                    <div className="d-flex justify-content-center gap-3 mt-4">
                        <Link to="/resources">
                            <Button variant="light" className="fw-semibold text-primary">Explore Resources</Button>
                        </Link>
                        <Link to="/login">
                            <Button variant="outline-light" className="fw-semibold">Get Started</Button>
                        </Link>
                    </div>
                </Container>
            </div>

            {/* Features */}
            <Container className="py-5">
                <div className="text-center mb-5">
                    <h2 className="fw-bold">Why Choose E-Resource Technology?</h2>
                    <p className="text-muted">We provide verified, official resources that save time and ensure quality education.</p>
                </div>
                <Row className="g-4">
                    <Col md={4}>
                        <Card className="h-100 border-0 shadow-sm">
                            <Card.Body>
                                <h5 className="card-title fw-bold">✅ Verified & Legal</h5>
                                <Card.Text>
                                    All resources are from official sources and legally verified for safe and ethical usage.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="h-100 border-0 shadow-sm">
                            <Card.Body>
                                <h5 className="card-title fw-bold">⏱️ Time Efficient</h5>
                                <Card.Text>
                                    Skip endless Google searches. Get what you need in seconds — fast and relevant.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="h-100 border-0 shadow-sm">
                            <Card.Body>
                                <h5 className="card-title fw-bold">👨‍🏫 Expert Professors</h5>
                                <Card.Text>
                                    Connect with real professors and receive guidance from India’s and the world’s best institutions.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="h-100 border-0 shadow-sm">
                            <Card.Body>
                                <h5 className="card-title fw-bold">📚 E-Book Library</h5>
                                <Card.Text>
                                    Access downloadable PDF books from reputed publications and universities.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="h-100 border-0 shadow-sm">
                            <Card.Body>
                                <h5 className="card-title fw-bold">🌐 Filtered Search</h5>
                                <Card.Text>
                                    Search tools and course filters ensure you only see verified, useful results.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="h-100 border-0 shadow-sm">
                            <Card.Body>
                                <h5 className="card-title fw-bold">💬 Interactive Learning</h5>
                                <Card.Text>
                                    Students and professors can interact directly to make learning collaborative.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* Stats Section */}
            <div className="bg-white py-5 border-top">
                <Container>
                    <Row className="text-center g-4">
                        <Col md={3}>
                            <h3 className="fw-bold text-primary">10,000+</h3>
                            <p className="text-muted">Students Registered</p>
                        </Col>
                        <Col md={3}>
                            <h3 className="fw-bold text-success">500+</h3>
                            <p className="text-muted">Expert Professors</p>
                        </Col>
                        <Col md={3}>
                            <h3 className="fw-bold text-warning">50,000+</h3>
                            <p className="text-muted">Resources Available</p>
                        </Col>
                        <Col md={3}>
                            <h3 className="fw-bold text-danger">100+</h3>
                            <p className="text-muted">Partner Institutes</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Home;

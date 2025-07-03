import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function Reports() {
    return (
        <Container className="mt-5">
            <h2 className="mb-4">Reports & Analytics</h2>
            <Row>
                <Col md={6} lg={3} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Students</Card.Title>
                            <Card.Text>
                                <h3>10,000+</h3>
                                Active Students
                            </Card.Text>
                            <Button variant="outline-primary" size="sm">View Report</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={3} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Professors</Card.Title>
                            <Card.Text>
                                <h3>500+</h3>
                                Active Professors
                            </Card.Text>
                            <Button variant="outline-success" size="sm">View Report</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={3} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Resources</Card.Title>
                            <Card.Text>
                                <h3>50,000+</h3>
                                Study Materials
                            </Card.Text>
                            <Button variant="outline-warning" size="sm">View Report</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} lg={3} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Mentors</Card.Title>
                            <Card.Text>
                                <h3>100+</h3>
                                Active Mentors
                            </Card.Text>
                            <Button variant="outline-info" size="sm">View Report</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Card className="mt-4">
                <Card.Body>
                    <Card.Title>Platform Usage Analytics</Card.Title>
                    <p className="text-muted mt-2">Interactive charts will be shown here after backend integration.</p>
                    <div className="bg-light border rounded p-5 text-center text-muted">
                        📊 [Chart Placeholder]
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Reports;

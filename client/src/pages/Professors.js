import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const dummyProfessors = [
    {
        id: 1,
        name: 'Dr. Sarah Chen',
        institute: 'MIT',
        specialization: 'Machine Learning',
        rating: 4.9,
        courses: 15
    },
    {
        id: 2,
        name: 'Prof. Michael Kumar',
        institute: 'Stanford',
        specialization: 'Quantum Physics',
        rating: 4.8,
        courses: 12
    },
    {
        id: 3,
        name: 'Dr. Emily Rodriguez',
        institute: 'Harvard',
        specialization: 'Bioengineering',
        rating: 4.9,
        courses: 18
    }
];

function Professors() {
    return (
        <Container className="mt-5">
            <h2 className="mb-4">Expert Professors</h2>
            <Row>
                {dummyProfessors.map(prof => (
                    <Col md={6} lg={4} className="mb-4" key={prof.id}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{prof.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{prof.institute}</Card.Subtitle>
                                <Card.Text>
                                    <strong>Specialization:</strong> {prof.specialization}<br />
                                    <strong>Courses:</strong> {prof.courses}<br />
                                    <strong>Rating:</strong> ⭐ {prof.rating}
                                </Card.Text>
                                <Button variant="primary" className="me-2">Connect</Button>
                                <Button variant="outline-secondary">View Profile</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Professors;

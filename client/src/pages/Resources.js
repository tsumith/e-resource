import React, { useState, useContext, useEffect } from 'react';
import {
    Container, Row, Col, Card, Button, Form, InputGroup
} from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';

function Resources() {
    const { user } = useContext(AuthContext);
    const [resources, setResources] = useState([]);
    const [search, setSearch] = useState('');
    const [filterCourse, setFilterCourse] = useState('');

    useEffect(() => {
        const fetchResources = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/resources');
                const data = await res.json();
                setResources(data);
            } catch (err) {
                console.error('Error fetching resources:', err);
            }
        };

        fetchResources();
    }, []);

    const filteredResources = resources.filter((res) =>
        res.title.toLowerCase().includes(search.toLowerCase()) &&
        (filterCourse === '' || res.course === filterCourse)
    );

    const courses = [...new Set(resources.map(r => r.course))];

    return (
        <Container className="mt-5">
            <div className="mb-4">
                <h2>Educational Resources</h2>
            </div>

            <Row className="mb-4">
                <Col md={6}>
                    <InputGroup>
                        <Form.Control
                            type="text"
                            placeholder="Search by title..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </InputGroup>
                </Col>
                <Col md={6}>
                    <Form.Select value={filterCourse} onChange={(e) => setFilterCourse(e.target.value)}>
                        <option value="">All Courses</option>
                        {courses.map((c, idx) => (
                            <option key={idx} value={c}>{c}</option>
                        ))}
                    </Form.Select>
                </Col>
            </Row>

            <Row>
                {filteredResources.map(resource => (
                    <Col md={6} lg={4} key={resource._id || resource.id} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title as="h5">{resource.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{resource.course}</Card.Subtitle>
                                <div className="mb-2">
                                    <div><strong>Type:</strong> {resource.type}</div>
                                    <div><strong>Author:</strong> {resource.author}</div>
                                </div>
                                {user ? (
                                    <Button
                                        variant="primary"
                                        href={resource.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Resource
                                    </Button>
                                ) : (
                                    <Button variant="outline-secondary" disabled>
                                        Login to Access
                                    </Button>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}

                {filteredResources.length === 0 && (
                    <Col>
                        <div className="text-center text-muted">No resources found.</div>
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export default Resources;

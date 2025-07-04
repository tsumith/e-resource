// import React, { useState, useContext, useEffect } from 'react';
// import {
//     Container, Row, Col, Card, Button, Form, InputGroup
// } from 'react-bootstrap';
// import { AuthContext } from '../context/AuthContext';
// import axios from 'axios';

// function Resources() {
//     const { user } = useContext(AuthContext);
//     const [resources, setResources] = useState([]);
//     const [search, setSearch] = useState('');
//     const [filterCourse, setFilterCourse] = useState('');

//     useEffect(() => {
//         const fetchResources = async () => {
//             try {
//                 const res = await fetch(`${process.env.REACT_APP_API_URI}/api/resources`);
//                 const data = await res.json();
//                 setResources(data);
//             } catch (err) {
//                 console.error('Error fetching resources:', err);
//             }
//         };

//         fetchResources();
//     }, []);

//     const filteredResources = resources.filter((res) =>
//         res.title.toLowerCase().includes(search.toLowerCase()) &&
//         (filterCourse === '' || res.course === filterCourse)
//     );

//     const courses = [...new Set(resources.map(r => r.course))];

//     return (
//         <Container className="mt-5">
//             <div className="mb-4">
//                 <h2>Educational Resources</h2>
//             </div>

//             <Row className="mb-4">
//                 <Col md={6}>
//                     <InputGroup>
//                         <Form.Control
//                             type="text"
//                             placeholder="Search by title..."
//                             value={search}
//                             onChange={(e) => setSearch(e.target.value)}
//                         />
//                     </InputGroup>
//                 </Col>
//                 <Col md={6}>
//                     <Form.Select value={filterCourse} onChange={(e) => setFilterCourse(e.target.value)}>
//                         <option value="">All Courses</option>
//                         {courses.map((c, idx) => (
//                             <option key={idx} value={c}>{c}</option>
//                         ))}
//                     </Form.Select>
//                 </Col>
//             </Row>

//             <Row>
//                 {filteredResources.map(resource => (
//                     <Col md={6} lg={4} key={resource._id || resource.id} className="mb-4">
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title as="h5">{resource.title}</Card.Title>
//                                 <Card.Subtitle className="mb-2 text-muted">{resource.course}</Card.Subtitle>
//                                 <div className="mb-2">
//                                     <div><strong>Type:</strong> {resource.type}</div>
//                                     <div><strong>Author:</strong> {resource.author}</div>
//                                 </div>
//                                 {user ? (
//                                     <Button
//                                         variant="primary"
//                                         href={resource.link}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                     >
//                                         View Resource
//                                     </Button>
//                                 ) : (
//                                     <Button variant="outline-secondary" disabled>
//                                         Login to Access
//                                     </Button>
//                                 )}
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 ))}

//                 {filteredResources.length === 0 && (
//                     <Col>
//                         <div className="text-center text-muted">No resources found.</div>
//                     </Col>
//                 )}
//             </Row>
//         </Container>
//     );
// }

// export default Resources;



import React, { useState, useContext, useEffect } from 'react';
import {
    Container, Row, Col, Card, Button, Form, InputGroup
} from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import './Resources.css';

function Resources() {
    const { user } = useContext(AuthContext);
    const [resources, setResources] = useState([]);
    const [search, setSearch] = useState('');
    const [filterCourse, setFilterCourse] = useState('');

    useEffect(() => {
        const fetchResources = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_API_URI}/api/resources`);
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
        <div className="resources-page bg-dark text-white min-vh-100 py-5">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="display-5 text-glow">📚 Educational Resources</h2>
                    <p className="text-white-50">Search, filter, and download curated materials by real professors.</p>
                </div>

                <Row className="mb-4 g-3 align-items-center">
                    <Col md={6}>
                        <InputGroup>
                            <Form.Control
                                type="text"
                                placeholder="🔍 Search by title..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="bg-dark text-white border-secondary"
                            />
                        </InputGroup>
                    </Col>
                    <Col md={6}>
                        <Form.Select
                            value={filterCourse}
                            onChange={(e) => setFilterCourse(e.target.value)}
                            className="bg-dark text-white border-secondary"
                        >
                            <option value="">🎓 All Courses</option>
                            {courses.map((c, idx) => (
                                <option key={idx} value={c}>{c}</option>
                            ))}
                        </Form.Select>
                    </Col>
                </Row>

                <Row>
                    {filteredResources.map(resource => (
                        <Col md={6} lg={4} key={resource._id || resource.id} className="mb-4">
                            <Card className="resource-card h-100 glass-card border-0 text-white">
                                <Card.Body>
                                    <Card.Title className="fw-bold fs-5">{resource.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-info">{resource.course}</Card.Subtitle>
                                    <div className="mb-3 small text-white-50">
                                        <div><strong>📄 Type:</strong> {resource.type}</div>
                                        <div><strong>✍️ Author:</strong> {resource.author}</div>
                                    </div>
                                    {user ? (
                                        <Button
                                            variant="outline-light"
                                            href={resource.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-100"
                                        >
                                            View Resource
                                        </Button>
                                    ) : (
                                        <Button variant="secondary" disabled className="w-100">
                                            🔒 Login to Access
                                        </Button>
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}

                    {filteredResources.length === 0 && (
                        <Col>
                            <div className="text-center text-muted mt-4">No resources found.</div>
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    );
}

export default Resources;


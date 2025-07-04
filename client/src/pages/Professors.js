// import React from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// const dummyProfessors = [
//     {
//         id: 1,
//         name: 'Dr. Sarah Chen',
//         institute: 'MIT',
//         specialization: 'Machine Learning',
//         rating: 4.9,
//         courses: 15
//     },
//     {
//         id: 2,
//         name: 'Prof. Michael Kumar',
//         institute: 'Stanford',
//         specialization: 'Quantum Physics',
//         rating: 4.8,
//         courses: 12
//     },
//     {
//         id: 3,
//         name: 'Dr. Emily Rodriguez',
//         institute: 'Harvard',
//         specialization: 'Bioengineering',
//         rating: 4.9,
//         courses: 18
//     }
// ];

// function Professors() {
//     return (
//         <Container className="mt-5">
//             <h2 className="mb-4">Expert Professors</h2>
//             <Row>
//                 {dummyProfessors.map(prof => (
//                     <Col md={6} lg={4} className="mb-4" key={prof.id}>
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>{prof.name}</Card.Title>
//                                 <Card.Subtitle className="mb-2 text-muted">{prof.institute}</Card.Subtitle>
//                                 <Card.Text>
//                                     <strong>Specialization:</strong> {prof.specialization}<br />
//                                     <strong>Courses:</strong> {prof.courses}<br />
//                                     <strong>Rating:</strong> ⭐ {prof.rating}
//                                 </Card.Text>
//                                 <Button variant="primary" className="me-2">Connect</Button>
//                                 <Button variant="outline-secondary">View Profile</Button>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 ))}
//             </Row>
//         </Container>
//     );
// }

// export default Professors;



import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Professors.css';
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
        <div className="bg-dark text-white py-5 min-vh-100">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="display-5 text-glow">🎓 Meet Our Professors</h2>
                    <p className="text-white-50">Learn from top educators across the globe.</p>
                </div>
                <Row className="g-4">
                    {dummyProfessors.map(prof => (
                        <Col md={6} lg={4} key={prof.id}>
                            <Card className="glass-card border-0 text-white h-100 p-3">
                                <Card.Body>
                                    <h5 className="fw-bold">{prof.name}</h5>
                                    <Card.Subtitle className="mb-2 text-info">{prof.institute}</Card.Subtitle>
                                    <div className="mb-3 small text-white-50">
                                        <p><strong>Specialization:</strong> {prof.specialization}</p>
                                        <p><strong>Courses:</strong> {prof.courses}</p>
                                        <p><strong>Rating:</strong> ⭐ {prof.rating}</p>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <Button variant="outline-light" className="w-50">Connect</Button>
                                        <Button variant="light" className="w-50 text-dark fw-semibold">Profile</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Professors;

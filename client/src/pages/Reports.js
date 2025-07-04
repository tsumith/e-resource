// import React from 'react';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// function Reports() {
//     return (
//         <Container className="mt-5">
//             <h2 className="mb-4">Reports & Analytics</h2>
//             <Row>
//                 <Col md={6} lg={3} className="mb-4">
//                     <Card>
//                         <Card.Body>
//                             <Card.Title>Students</Card.Title>
//                             <Card.Text>
//                                 <h3>10,000+</h3>
//                                 Active Students
//                             </Card.Text>
//                             <Button variant="outline-primary" size="sm">View Report</Button>
//                         </Card.Body>
//                     </Card>
//                 </Col>

//                 <Col md={6} lg={3} className="mb-4">
//                     <Card>
//                         <Card.Body>
//                             <Card.Title>Professors</Card.Title>
//                             <Card.Text>
//                                 <h3>500+</h3>
//                                 Active Professors
//                             </Card.Text>
//                             <Button variant="outline-success" size="sm">View Report</Button>
//                         </Card.Body>
//                     </Card>
//                 </Col>

//                 <Col md={6} lg={3} className="mb-4">
//                     <Card>
//                         <Card.Body>
//                             <Card.Title>Resources</Card.Title>
//                             <Card.Text>
//                                 <h3>50,000+</h3>
//                                 Study Materials
//                             </Card.Text>
//                             <Button variant="outline-warning" size="sm">View Report</Button>
//                         </Card.Body>
//                     </Card>
//                 </Col>

//                 <Col md={6} lg={3} className="mb-4">
//                     <Card>
//                         <Card.Body>
//                             <Card.Title>Mentors</Card.Title>
//                             <Card.Text>
//                                 <h3>100+</h3>
//                                 Active Mentors
//                             </Card.Text>
//                             <Button variant="outline-info" size="sm">View Report</Button>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             </Row>

//             <Card className="mt-4">
//                 <Card.Body>
//                     <Card.Title>Platform Usage Analytics</Card.Title>
//                     <p className="text-muted mt-2">Interactive charts will be shown here after backend integration.</p>
//                     <div className="bg-light border rounded p-5 text-center text-muted">
//                         📊 [Chart Placeholder]
//                     </div>
//                 </Card.Body>
//             </Card>
//         </Container>
//     );
// }

// export default Reports;


import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Reports.css';
function Reports() {
    const stats = [
        { title: 'Students', count: '10,000+', label: 'Active Students', variant: 'outline-light' },
        { title: 'Professors', count: '500+', label: 'Active Professors', variant: 'outline-success' },
        { title: 'Resources', count: '50,000+', label: 'Study Materials', variant: 'outline-warning' },
        { title: 'Mentors', count: '100+', label: 'Active Mentors', variant: 'outline-info' },
    ];

    return (
        <div className="bg-dark text-white py-5 min-vh-100">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="text-glow display-5">📈 Reports & Analytics</h2>
                    <p className="text-white-50">Track usage and performance of the E-Resource platform.</p>
                </div>

                <Row className="g-4">
                    {stats.map((item, idx) => (
                        <Col md={6} lg={3} key={idx}>
                            <Card className="glass-card text-white text-center p-4 h-100 border-0">
                                <Card.Body>
                                    <h5 className="fw-bold">{item.title}</h5>
                                    <h3 className="text-info mt-2">{item.count}</h3>
                                    <p className="text-white-50">{item.label}</p>
                                    <Button variant={item.variant} size="sm" className="mt-2">View Report</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Card className="glass-card bg-transparent text-white mt-5 border-0 shadow-sm p-4">
                    <Card.Body>
                        <h4 className="fw-semibold mb-3">📊 Platform Usage Analytics</h4>
                        <p className="text-white-50">Interactive charts will appear here after backend integration.</p>
                        <div className="placeholder-chart text-center py-5 border border-light rounded-4 text-muted">
                            📉 Chart Placeholder
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default Reports;

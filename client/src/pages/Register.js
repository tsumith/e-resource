// import React, { useState } from 'react';
// import { Form, Button, Container, Card } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// function Register() {
//     const [form, setForm] = useState({ email: '', password: '', role: 'student' });
//     const navigate = useNavigate();

//     const handleChange = e => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = e => {
//         e.preventDefault();
//         console.log("Register Form:", form);
//         alert("Account created (mock). Proceed to login.");
//         navigate('/login');
//     };

//     return (
//         <Container className="mt-5 d-flex justify-content-center">
//             <Card style={{ width: '100%', maxWidth: '400px' }} className="p-4">
//                 <Card.Title className="mb-4 text-center">Register</Card.Title>
//                 <Form onSubmit={handleSubmit}>
//                     <Form.Group className="mb-3">
//                         <Form.Label>Role</Form.Label>
//                         <Form.Select name="role" value={form.role} onChange={handleChange}>
//                             <option value="student">Student</option>
//                             <option value="professor">Professor</option>
//                             <option value="mentor">Mentor</option>
//                         </Form.Select>
//                     </Form.Group>
//                     <Form.Group className="mb-3">
//                         <Form.Label>Email</Form.Label>
//                         <Form.Control name="email" type="email" value={form.email} onChange={handleChange} required />
//                     </Form.Group>
//                     <Form.Group className="mb-4">
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control name="password" type="password" value={form.password} onChange={handleChange} required />
//                     </Form.Group>
//                     <Button type="submit" variant="primary" className="w-100">Register</Button>
//                 </Form>
//             </Card>
//         </Container>
//     );
// }

// export default Register;

import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';
function Register() {
    const [form, setForm] = useState({ email: '', password: '', userType: 'student' });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URI_PROD}/api/auth/register`, form);

            alert("Account created successfully. Please log in.");
            navigate('/login');
        } catch (err) {
            console.error("Registration failed:", err);
            alert(err.response?.data?.message || "Registration failed. Please try again.");
        }
    };


    return (
        <div className="register-page d-flex justify-content-center align-items-center min-vh-100 bg-dark text-white">
            <Container>
                <Card className="glass-card p-4 mx-auto shadow-lg border-0" style={{ maxWidth: '420px' }}>
                    <h3 className="text-center mb-4 text-glow">Create an Account</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>User Role</Form.Label>
                            <Form.Select
                                name="userType"
                                value={form.userType}
                                onChange={handleChange}
                                required
                                className="form-control bg-dark text-white border-secondary"
                            >
                                <option value="student">Student</option>
                                <option value="professor">Professor</option>
                                <option value="mentor">Mentor</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                name="email"
                                type="email"
                                placeholder="Enter email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="bg-dark text-white border-secondary"
                            />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                name="password"
                                type="password"
                                placeholder="Create password"
                                value={form.password}
                                onChange={handleChange}
                                required
                                className="bg-dark text-white border-secondary"
                            />
                        </Form.Group>

                        <Button type="submit" className="w-100 btn-primary rounded-pill">
                            Register
                        </Button>
                    </Form>

                    <div className="text-center mt-3">
                        <small className="text-muted">Already have an account? Login from the navbar.</small>
                    </div>
                </Card>
            </Container>
        </div>
    );
}

export default Register;


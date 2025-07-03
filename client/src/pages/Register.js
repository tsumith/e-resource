import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [form, setForm] = useState({ email: '', password: '', role: 'student' });
    const navigate = useNavigate();

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Register Form:", form);
        alert("Account created (mock). Proceed to login.");
        navigate('/login');
    };

    return (
        <Container className="mt-5 d-flex justify-content-center">
            <Card style={{ width: '100%', maxWidth: '400px' }} className="p-4">
                <Card.Title className="mb-4 text-center">Register</Card.Title>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Role</Form.Label>
                        <Form.Select name="role" value={form.role} onChange={handleChange}>
                            <option value="student">Student</option>
                            <option value="professor">Professor</option>
                            <option value="mentor">Mentor</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="email" value={form.email} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" value={form.password} onChange={handleChange} required />
                    </Form.Group>
                    <Button type="submit" variant="primary" className="w-100">Register</Button>
                </Form>
            </Card>
        </Container>
    );
}

export default Register;

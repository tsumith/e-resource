import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';

function Login() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [userType, setUserType] = useState('student');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }
            localStorage.setItem('token', data.token);
            // Save token & user info in context
            login({ userType: data.userType, email: data.email });
            navigate('/');
        } catch (err) {
            alert(err.message);
        }
    };


    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Card style={{ maxWidth: '400px', width: '100%' }} className="p-4 shadow">
                <h3 className="mb-3 text-center">Sign In</h3>

                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3">
                        <Form.Label>User Type</Form.Label>
                        <Form.Select
                            value={userType}
                            onChange={(e) => setUserType(e.target.value)}
                            required
                        >
                            <option value="student">Student</option>
                            <option value="professor">Professor</option>
                            <option value="mentor">Mentor</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-4">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Button type="submit" variant="primary" className="w-100">
                        Sign In
                    </Button>
                </Form>

                <div className="text-center mt-3">
                    <small className="text-muted">Don’t have an account? Register (coming soon)</small>
                </div>
            </Card>
        </Container>
    );
}

export default Login;

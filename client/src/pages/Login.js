// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Container, Form, Button, Card } from 'react-bootstrap';
// import { AuthContext } from '../context/AuthContext';
// import axios from 'axios';

// function Login() {
//     const { login } = useContext(AuthContext);
//     const navigate = useNavigate();

//     const [userType, setUserType] = useState('student');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch(`${process.env.REACT_APP_API_URI}/api/auth/login`, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ email, password }),
//             });

//             const data = await response.json();

//             if (!response.ok) {
//                 throw new Error(data.message || 'Login failed');
//             }
//             localStorage.setItem('token', data.token);

//             login({ userType: data.userType, email: data.email });
//             navigate('/');
//         } catch (err) {
//             alert(err.message);
//         }

//     };


//     return (
//         <Container className="d-flex justify-content-center align-items-center min-vh-100">
//             <Card style={{ maxWidth: '400px', width: '100%' }} className="p-4 shadow">
//                 <h3 className="mb-3 text-center">Sign In</h3>

//                 <Form onSubmit={handleLogin}>
//                     <Form.Group className="mb-3">
//                         <Form.Label>User Type</Form.Label>
//                         <Form.Select
//                             value={userType}
//                             onChange={(e) => setUserType(e.target.value)}
//                             required
//                         >
//                             <option value="student">Student</option>
//                             <option value="professor">Professor</option>
//                             <option value="mentor">Mentor</option>
//                         </Form.Select>
//                     </Form.Group>

//                     <Form.Group className="mb-3">
//                         <Form.Label>Email address</Form.Label>
//                         <Form.Control
//                             type="email"
//                             placeholder="Enter email"
//                             value={email}
//                             required
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                     </Form.Group>

//                     <Form.Group className="mb-4">
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control
//                             type="password"
//                             placeholder="Password"
//                             value={password}
//                             required
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                     </Form.Group>

//                     <Button type="submit" variant="primary" className="w-100">
//                         Sign In
//                     </Button>
//                 </Form>

//                 <div className="text-center mt-3">
//                     <small className="text-muted">Don’t have an account? Register (coming soon)</small>
//                 </div>
//             </Card>
//         </Container>
//     );
// }

// export default Login;

import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

function Login() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [userType, setUserType] = useState('student');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URI_PROD}/api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },

                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }
            localStorage.setItem('token', data.token);

            login({ userType: data.userType, email: data.email });
            navigate('/');
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div className="login-wrapper bg-dark text-white d-flex align-items-center justify-content-center min-vh-100">
            <Container>
                <Card className="glass-card p-4 mx-auto border-0 shadow-lg" style={{ maxWidth: '430px' }}>
                    <h3 className="text-center mb-4 text-glow">Login to E-Resource</h3>

                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3">
                            <Form.Label>User Type</Form.Label>
                            <Form.Select
                                value={userType}
                                onChange={(e) => setUserType(e.target.value)}
                                required
                                className="bg-dark text-white border-secondary"
                            >
                                <option value="student">Student</option>
                                <option value="professor">Professor</option>
                                <option value="mentor">Mentor</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-dark text-white border-secondary"
                            />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-dark text-white border-secondary"
                            />
                        </Form.Group>

                        <Button type="submit" className="w-100 rounded-pill fw-bold btn btn-light text-dark shadow-sm">
                            🚀 Sign In
                        </Button>
                    </Form>

                    <div className="text-center mt-3">
                        <small className="text-muted">Don’t have an account? Register (coming soon)</small>
                    </div>
                </Card>
            </Container>
        </div>
    );
}

export default Login;

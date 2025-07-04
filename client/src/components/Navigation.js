// import React, { useContext } from 'react';
// import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';

// function Navigation() {
//     const { user, logout } = useContext(AuthContext);
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         logout();
//         navigate('/login');
//     };

//     return (
//         <Navbar bg="light" expand="lg" className="shadow-sm sticky-top">
//             <Container>
//                 <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
//                     E-Resource Tech
//                 </Navbar.Brand>

//                 <Navbar.Toggle aria-controls="navbar-nav" />

//                 <Navbar.Collapse id="navbar-nav">
//                     <Nav className="me-auto">
//                         <Nav.Link as={Link} to="/">Home</Nav.Link>
//                         <Nav.Link as={Link} to="/resources">Resources</Nav.Link>
//                         <Nav.Link as={Link} to="/professors">Professors</Nav.Link>
//                         <Nav.Link as={Link} to="/reports">Reports</Nav.Link>
//                         {user?.userType === 'professor' && (
//                             <Nav.Link as={Link} to="/upload">Upload</Nav.Link>
//                         )}
//                     </Nav>

//                     <Nav className="ms-auto">
//                         {!user ? (
//                             <>
//                                 <Button as={Link} to="/login" variant="outline-primary" className="me-2">
//                                     Login
//                                 </Button>
//                                 <Button as={Link} to="/register" variant="primary">
//                                     Register
//                                 </Button>
//                             </>
//                         ) : (
//                             <NavDropdown title={`Welcome, ${user.userType}`} id="user-dropdown">
//                                 <NavDropdown.Item onClick={handleLogout}>
//                                     Logout
//                                 </NavDropdown.Item>
//                             </NavDropdown>
//                         )}

//                     </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

// export default Navigation;


import React, { useContext } from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Navigation.css'

function Navigation() {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <Navbar expand="lg" className="navbar-modern sticky-top px-3 py-2">
            <Container fluid>
                <Navbar.Brand as={Link} to="/" className="fw-bold text-white text-glow fs-4">
                    <i className="bi bi-journal-code me-2"></i> E-Resource Tech
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />

                <Navbar.Collapse id="navbar-nav">
                    <Nav className="me-auto gap-2">
                        <Nav.Link as={Link} to="/" className="nav-link-modern">Home</Nav.Link>
                        <Nav.Link as={Link} to="/resources" className="nav-link-modern">Resources</Nav.Link>
                        <Nav.Link as={Link} to="/professors" className="nav-link-modern">Professors</Nav.Link>
                        <Nav.Link as={Link} to="/reports" className="nav-link-modern">Reports</Nav.Link>
                        {user?.userType === 'professor' && (
                            <Nav.Link as={Link} to="/upload" className="nav-link-modern">Upload</Nav.Link>
                        )}
                    </Nav>

                    <Nav className="ms-auto gap-2">
                        {!user ? (
                            <>
                                <Button as={Link} to="/login" className="glass-btn btn-sm px-3">Login</Button>
                                <Button as={Link} to="/register" className="btn-primary rounded-pill px-3">Register</Button>
                            </>
                        ) : (
                            <NavDropdown title={`Welcome, ${user.userType}`} id="user-dropdown" className="dropdown-modern text-white">
                                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;


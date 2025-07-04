// import React, { useContext, useState } from 'react';
// import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
// import { AuthContext } from '../context/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Upload() {
//     const { user } = useContext(AuthContext);
//     const navigate = useNavigate();

//     const [form, setForm] = useState({
//         title: '',
//         course: '',
//         type: '',
//         author: '',
//         link: '',
//     });

//     const [success, setSuccess] = useState(false);

//     if (!user || user.userType !== 'professor') {
//         return (
//             <Container className="mt-5">
//                 <Alert variant="danger">Access Denied. Only professors can upload resources.</Alert>
//             </Container>
//         );
//     }

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const token = localStorage.getItem('token');
//             const response = await axios.post(
//                 `${process.env.REACT_APP_API_URI}/api/resources/upload`,
//                 { ...form },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );

//             if (response.status === 201) {
//                 setSuccess(true);
//                 setForm({
//                     title: '',
//                     course: '',
//                     type: '',
//                     author: '',
//                     link: '',
//                 });
//             }
//         } catch (err) {
//             console.error('Upload failed:', err.response?.data || err.message || err);
//             alert('Failed to upload resource');
//         }
//     };;

//     return (
//         <Container className="mt-5">
//             <Card className="p-4 shadow-sm">
//                 <h3 className="mb-4">Upload Resource</h3>

//                 {success && (
//                     <Alert variant="success" onClose={() => setSuccess(false)} dismissible>
//                         Resource uploaded successfully!
//                     </Alert>
//                 )}

//                 <Form onSubmit={handleSubmit}>
//                     <Form.Group className="mb-3">
//                         <Form.Label>Resource Title</Form.Label>
//                         <Form.Control
//                             type="text"
//                             placeholder="e.g. Data Structures Basics"
//                             name="title"
//                             value={form.title}
//                             onChange={handleChange}
//                             required
//                         />
//                     </Form.Group>

//                     <Form.Group className="mb-3">
//                         <Form.Label>Course</Form.Label>
//                         <Form.Control
//                             type="text"
//                             placeholder="e.g. Computer Science"
//                             name="course"
//                             value={form.course}
//                             onChange={handleChange}
//                             required
//                         />
//                     </Form.Group>

//                     <Form.Group className="mb-3">
//                         <Form.Label>Type</Form.Label>
//                         <Form.Select
//                             name="type"
//                             value={form.type}
//                             onChange={handleChange}
//                             required
//                         >
//                             <option value="">Select Type</option>
//                             <option value="E-Book">E-Book</option>
//                             <option value="Study Material">Study Material</option>
//                             <option value="Presentation">Presentation</option>
//                         </Form.Select>
//                     </Form.Group>

//                     <Form.Group className="mb-3">
//                         <Form.Label>Author</Form.Label>
//                         <Form.Control
//                             type="text"
//                             placeholder="e.g. Prof. John Doe"
//                             name="author"
//                             value={form.author}
//                             onChange={handleChange}
//                             required
//                         />
//                     </Form.Group>

//                     <Form.Group className="mb-4">
//                         <Form.Label>Resource Link</Form.Label>
//                         <Form.Control
//                             type="url"
//                             placeholder="https://example.com/resource.pdf"
//                             name="link"
//                             value={form.link}
//                             onChange={handleChange}
//                             required
//                         />
//                     </Form.Group>

//                     <Button type="submit" variant="primary" className="w-100">
//                         Upload Resource
//                     </Button>
//                 </Form>
//             </Card>
//         </Container>
//     );
// }

// export default Upload;






import React, { useContext, useState } from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Upload.css';

function Upload() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: '',
        course: '',
        type: '',
        author: '',
        link: '',
    });

    const [success, setSuccess] = useState(false);

    if (!user || user.userType !== 'professor') {
        return (
            <div className="hero-section text-white d-flex justify-content-center align-items-center">
                <Container>
                    <Card className="glass-card p-4 mx-auto border-0 shadow-lg text-center text-white" style={{ maxWidth: '500px' }}>
                        <Alert variant="danger" className="bg-transparent text-danger border-danger">
                            Access Denied. Only professors can upload resources.
                        </Alert>
                    </Card>
                </Container>
            </div>
        );
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(
                `${process.env.REACT_APP_API_URI}/api/resources/upload`,
                { ...form },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.status === 201) {
                setSuccess(true);
                setForm({
                    title: '',
                    course: '',
                    type: '',
                    author: '',
                    link: '',
                });
            }
        } catch (err) {
            console.error('Upload failed:', err.response?.data || err.message || err);
            alert('Failed to upload resource');
        }
    };

    return (
        <div className="hero-section text-white d-flex align-items-center justify-content-center">
            <Container>
                <Card className="glass-card p-4 mx-auto border-0 shadow-lg" style={{ maxWidth: '600px' }}>
                    <h3 className="mb-4 text-center text-glow">Upload Resource</h3>

                    {success && (
                        <Alert
                            variant="success"
                            className="bg-transparent border-success text-success"
                            onClose={() => setSuccess(false)}
                            dismissible
                        >
                            Resource uploaded successfully!
                        </Alert>
                    )}

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Resource Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="e.g. Data Structures Basics"
                                name="title"
                                value={form.title}
                                onChange={handleChange}
                                required
                                className="bg-dark text-white border-secondary"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Course</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="e.g. Computer Science"
                                name="course"
                                value={form.course}
                                onChange={handleChange}
                                required
                                className="bg-dark text-white border-secondary"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Type</Form.Label>
                            <Form.Select
                                name="type"
                                value={form.type}
                                onChange={handleChange}
                                required
                                className="bg-dark text-white border-secondary"
                            >
                                <option value="">Select Type</option>
                                <option value="E-Book">E-Book</option>
                                <option value="Study Material">Study Material</option>
                                <option value="Presentation">Presentation</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="e.g. Prof. John Doe"
                                name="author"
                                value={form.author}
                                onChange={handleChange}
                                required
                                className="bg-dark text-white border-secondary"
                            />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label>Resource Link</Form.Label>
                            <Form.Control
                                type="url"
                                placeholder="https://example.com/resource.pdf"
                                name="link"
                                value={form.link}
                                onChange={handleChange}
                                required
                                className="bg-dark text-white border-secondary"
                            />
                        </Form.Group>

                        <Button type="submit" className="w-100 btn-light text-dark fw-semibold rounded-pill shadow-sm">
                            📤 Upload Resource
                        </Button>
                    </Form>
                </Card>
            </Container>
        </div>
    );
}

export default Upload;

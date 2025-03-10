import { useState, useEffect } from 'react';
import useStore from '../../zustand/store';
import './RegisterPage.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nameinput, setNameInput] = useState('');
  const register = useStore((state) => state.register)
  const errorMessage = useStore((state) => state.authErrorMessage);
  const setAuthErrorMessage = useStore((state) => state.setAuthErrorMessage);

  useEffect(() => {
    // Clear the auth error message when the component unmounts:
    return () => {
      setAuthErrorMessage('');
    }
  }, [])

  const handleRegister = (event) => {
    event.preventDefault();

    register({
      name: nameinput,
      username: username,
      password: password,
    })
  };

  return (
    <>
          <section id="Rform" >
      <Form onSubmit={handleRegister}>
      <Row className="align-items-center" >
      <Col sm={3} className="my-1"></Col>
      <h2 style={{display: 'flex', justifyContent: 'center'}}>Register Page</h2>

      <Form.Label htmlFor="name">Name:</Form.Label>
        <Form.Control
          type="text"
          id="name"
          required
          value={nameinput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <Form.Label htmlFor="username">Username:</Form.Label>
        <Form.Control
          type="text"
          id="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Form.Label htmlFor="password">Password:</Form.Label>
        <Form.Control
          type="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="dark" type="submit">
          Register 
        </Button>
        </Row>
      </Form>
      { // Conditionally render registration error:
        errorMessage && (
          <h3>{errorMessage}</h3>
        )
      }
      </section>
    </>
  );
}


export default RegisterPage;

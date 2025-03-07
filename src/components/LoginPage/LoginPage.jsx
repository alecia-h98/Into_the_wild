import { useState, useEffect } from 'react';
import useStore from '../../zustand/store';
import './LoginPage.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const logIn = useStore((state) => state.logIn)
  const errorMessage = useStore((state) => state.authErrorMessage);
  const setAuthErrorMessage = useStore((state) => state.setAuthErrorMessage);

  useEffect(() => {
    // Clear the auth error message when the component unmounts:
    return () => {
      setAuthErrorMessage('');
    }
  }, [])

  const handleLogIn = (event) => {
    event.preventDefault();

    logIn({
      username: username,
      password: password,
    })
  };

  return (
    <>
      {/* <h1>Into the Wild</h1> */}
      
      <section id="form" >
      <Form onSubmit={handleLogIn}>
        <Row className="align-items-center" >
          <Col sm={3} className="my-1"></Col>
          <h2 style={{display: 'flex', justifyContent: 'center'}}>Login Page</h2>

      <Form.Group className="col-sm-4">
        <Form.Label htmlFor="username">Username:</Form.Label >
        <Form.Control
          type="text"
          id="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        </Form.Group>
        <Form.Group className="col-sm-4" >
        <Form.Label  htmlFor="password">Password:</Form.Label >
        <Form.Control
          type="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
              </Form.Group>
        <Button variant="dark" className="col-sm-3" type="submit">
          Log In
        </Button>
        </Row>
      </Form>


      { // Conditionally render login error:
        errorMessage && (
          <h3>{errorMessage}</h3>
        )
      }
      </section>
      <div>
      <p id='discover' ><b>Discover your surroundings.</b></p>
      </div>
    </>
  );
}


export default LoginPage;

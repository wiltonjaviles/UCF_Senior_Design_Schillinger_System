import '.././Style.css';
import {Container, Row, Col, Form, Button} from 'react-bootstrap' 

function LogIn() {
  return (
    <Container fluid>
      <Form>
        <Form.Group controlId="formUsername">
          <Form.Label>Log in. </Form.Label>
          <Form.Control type="username" placeholder="username" />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Control type="password" placeholder="password" />
        </Form.Group>
        <Button variant="secondary" type="submit" className="float-right">Log In</Button>
      </Form>
    </Container> 
  );
}

export default LogIn;

import '.././Style.css';
import {Container, Form, Button} from 'react-bootstrap' 

function MakeAccount() {
  return (
    <Container fluid>
      <Form>
        <Form.Group controlId="formUsername">
          <Form.Label>Make an account. </Form.Label>
          <Form.Control type="username" placeholder="username" />
        </Form.Group>
        <Form.Group controlId="formUsername">
          <Form.Control type="username" placeholder="confirm username" />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Control type="password" placeholder="password" />
        </Form.Group>
        <Button variant="secondary" type="submit" className="float-right">Create Account</Button>
      </Form>
    </Container> 
  );
}

export default MakeAccount;

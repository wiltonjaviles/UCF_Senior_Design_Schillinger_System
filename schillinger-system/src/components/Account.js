import '.././Style.css';
import {Container, Row, Col, Form, Button} from 'react-bootstrap' 

function Account() {
  return (
    
    <Container fluid>
      <h1>Account Page</h1>
      
        <Row>
            <Col>
              <Form>
                <Form.Group controlId="formUsername">
                  <Form.Label>Log In </Form.Label>
                  <Form.Control type="username" placeholder="username" />
                </Form.Group>
                <Form.Group controlId="formPassword">
                  <Form.Control type="password" placeholder="password" />
                </Form.Group>
                <Button variant="secondary" type="submit" className="float-right">Log in</Button>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Group controlId="formUsername">
                  <Form.Label>Make an account </Form.Label>
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
            </Col>
          </Row>
        
      </Container> 
    
  );
}

export default Account;

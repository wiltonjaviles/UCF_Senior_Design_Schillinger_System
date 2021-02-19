import {Container, Row, Col, Card, Form, Button} from 'react-bootstrap' 
import '../.././Style.css';

function Grouping() {
  
  const doGrouping = async event => {
    event.preventDefault();
  }

  return (
    <div>
      <Container>
        <Card>
          <Card.Body>
            <Form>
              <h1>Grouping Applet</h1>
              <br></br>
              <Row className="align-items-bottom justify-content-md-center">
                <Col className="col-2">
                  <Form.Group controlId="grouping-form-a">
                    <Form.Control as="select">
                      <option>a</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col className="col-1">
                  <h1>÷</h1>
                </Col>
                <Col className="col-2">              
                  <Form.Group controlId="grouping-form-b">
                    <Form.Control as="select">
                      <option>b</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col className="col-2">
                  <Button variant="secondary" type="submit" className="float-right">Calculate Grouping</Button>
                </Col>
              </Row>
            </Form>
            <Row className="justify-content-md-center">
              <h3>Results:</h3>
            </Row>
            <Row>
              <Col>
                <h4>Grouped by ab: </h4>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Grouping;

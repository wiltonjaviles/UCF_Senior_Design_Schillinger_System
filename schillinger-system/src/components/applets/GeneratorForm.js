import {Container, Row, Col, Form, Dropdown, Card, Button} from 'react-bootstrap' 
import '../.././Style.css';

function GeneratorForm() {
  
  return (
    <Container>
      <Card>
        <Card.Body>
          <Form>
            <Row>
              <Col className="col-2">
                <Dropdown>
                  <Dropdown.Toggle  variant="Light">a</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>1</Dropdown.Item>
                    <Dropdown.Item>2</Dropdown.Item>
                    <Dropdown.Item>3</Dropdown.Item>
                    <Dropdown.Item>4</Dropdown.Item>
                    <Dropdown.Item>5</Dropdown.Item>
                    <Dropdown.Item>6</Dropdown.Item>
                    <Dropdown.Item>7</Dropdown.Item>
                    <Dropdown.Item>8</Dropdown.Item>
                    <Dropdown.Item>9</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col className="col-2">
                <h1>÷</h1>
              </Col>
              <Col className="col-2">
                <Dropdown>
                  <Dropdown.Toggle  variant="Light">b</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>1</Dropdown.Item>
                    <Dropdown.Item>2</Dropdown.Item>
                    <Dropdown.Item>3</Dropdown.Item>
                    <Dropdown.Item>4</Dropdown.Item>
                    <Dropdown.Item>5</Dropdown.Item>
                    <Dropdown.Item>6</Dropdown.Item>
                    <Dropdown.Item>7</Dropdown.Item>
                    <Dropdown.Item>8</Dropdown.Item>
                    <Dropdown.Item>9</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col className="col-2"></Col>
              <Col className="col-4">
                <Button variant="dark">Add Variable</Button>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Check type="checkbox" label="Underline" />
              </Col>
              <Col>
                <Form.Check type="checkbox" label="Balance" />
              </Col>
              <Col>
                <Form.Check type="checkbox" label="Contract" />
              </Col>
              <Col>
                <Form.Check type="checkbox" label="Synchronize" />
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default GeneratorForm;

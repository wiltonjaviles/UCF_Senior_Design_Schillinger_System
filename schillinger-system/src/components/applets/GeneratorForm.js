import {Container, Row, Col, Form, Dropdown, Card, Button} from 'react-bootstrap'
import '../.././Style.css';

function toggleThirdVariable() {
  var x = document.getElementById("variable-toggle");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function GeneratorForm() {
  
  return (
    <Container>
      <Card>
        <Card.Body>
          <Card>
            <Card.Body>
              <p>generator will be displayed here</p>
              
            </Card.Body>
          </Card>
          <Form>
            <Row className="align-items-center">
              <Col className="col-2">
                <Dropdown>
                  <Dropdown.Toggle variant="secondary">a</Dropdown.Toggle>
                  <Dropdown.Menu className="generator-dropdown-menu">
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
              <Col className="col-1">
                <h1>÷</h1>
              </Col>
              <Col className="col-2">
                <Dropdown>
                  <Dropdown.Toggle variant="secondary">b</Dropdown.Toggle>
                  <Dropdown.Menu className="generator-dropdown-menu">
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
              <Col className="col-1 toggle-add-variable">
                <h1  id="variable-toggle">÷</h1>
              </Col>
              <Col className="col-2 toggle-add-variable">
              <Dropdown>
                <Dropdown.Toggle variant="secondary">c</Dropdown.Toggle>
                  <Dropdown.Menu className="generator-dropdown-menu">
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
              <Col className="col-4">
                <Button variant="dark" onClick="toggleThirdVariable()">Add Variable</Button>
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

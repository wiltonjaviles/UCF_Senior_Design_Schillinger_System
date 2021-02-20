import {Container, Row, Col, Form, Dropdown, Card, Button} from 'react-bootstrap'
import '../.././Style.css';

function GeneratorForm() {
  
  return (
    <Container>
      <Card>
        <Card.Body>
          <Form>
            <Row className="align-items-center">
              <Col className="col-2">
                <Dropdown>
                  <Dropdown.Toggle variant="light">a</Dropdown.Toggle>
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
                  <Dropdown.Toggle variant="light">b</Dropdown.Toggle>
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
              {/* <Col className="col-1">
                <h1 className="third-variable-divide">÷</h1>
              </Col>
              <Col className="col-2">
              <Dropdown className="third-variable-toggle">
                <Dropdown.Toggle variant="light">c</Dropdown.Toggle>
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
                <Button variant="secondary" id="add-variable-button" onClick={AddVariableButton}>Add Variable</Button>
              </Col> */}
            </Row>
            <Row>
              <Col>
                <Form.Check type="checkbox" id="underline-checkbox" label="Underline" />
              </Col>
              <Col>
                <Form.Check type="checkbox" id="balance-checkbox" label="Balance" />
              </Col>
              <Col>
                <Form.Check type="checkbox" id="contract-checkbox" label="Contract" />
              </Col>
              <Col>
                <Form.Check type="checkbox" id="synchronize-checkbox" label="Synchronize" />
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default GeneratorForm;

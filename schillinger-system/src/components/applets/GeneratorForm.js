import {Container, Row, Col, Form, Cardd, Card} from 'react-bootstrap' 
import '../.././Style.css';

function GeneratorForm() {
  
  return (
    <Container>
      <Card>
        <Card.Body>
          <Form>
            <Row className="mr-auto">
              <Col className="mr-auto">
                <Form.Check type="checkbox" label="Underline" />
              </Col>
            </Row>
            <Row className="mr-auto">
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

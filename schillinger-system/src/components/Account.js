import {Container, Row, Col} from 'react-bootstrap' 
import LogIn from '.././components/LogIn'
import MakeAccount from '.././components/MakeAccount'
import '.././Style.css';

function Account() {
  return (
    <div>
      <Container fluid>
        <h1>Account Page</h1>
          <Row>
            <Col>
              <LogIn />
            </Col>
            <Col>
              <MakeAccount />
            </Col>
          </Row>
      </Container> 
    </div>
  );
}

export default Account;

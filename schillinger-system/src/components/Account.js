import {Container, Row, Col} from 'react-bootstrap' 
import LogIn from '.././components/LogIn'
import MakeAccount from '.././components/MakeAccount'
import '.././Style.css';
import isAuthenticated from '.././components/authUser';

function Account() {
  isAuthenticated();
  return (
    <Container fluid>
      <h1>Account Page</h1>
        <Row>
            <Col>
              <MakeAccount />
            </Col>
            <Col>
              <LogIn />
            </Col>
          </Row>
      </Container> 
    
  );
}

export default Account;

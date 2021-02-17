import { Container } from 'react-bootstrap';
import '.././Style.css';
import isAuthenticated from '.././components/authUser';

function TableOfContentsBar() {
  isAuthenticated();
  return (
    <div className="sticky-table-bar">
      <Container>
        
      </Container>      
    </div>
  );
}

export default TableOfContentsBar;

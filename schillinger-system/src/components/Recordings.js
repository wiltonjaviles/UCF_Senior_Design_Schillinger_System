import '.././Style.css';
import isAuthenticated from '.././components/authUser';

function Recordings() {
  isAuthenticated();
  return (
    <div>
      <h1>Recordings Page</h1>
    </div>
  );
}

export default Recordings;

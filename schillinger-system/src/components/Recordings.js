import '.././Style.css';
import isAuthenticated from '.././components/authUser';

function Recordings() {
  isAuthenticated();
  return (
    <div>
      <br />
      <h1>Recordings Page</h1>
    </div>
  );
}

export default Recordings;

import '.././Style.css';
import Ch2Generator from './applets/Ch2Generator'
import Ch4Generator from './applets/Ch4Generator'
import Ch5Generator from './applets/Ch5Generator'
import Ch6Generator from './applets/Ch6Generator'
import isAuthenticated from '.././components/authUser';

function Recordings() {
  isAuthenticated();
  return (
    <div>
      <h1>Recordings Page</h1>
      <Ch2Generator />
      <Ch4Generator />
      <Ch5Generator />
      <Ch6Generator />
    </div>
  );
}

export default Recordings;

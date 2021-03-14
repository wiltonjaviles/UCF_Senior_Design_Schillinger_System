import '.././Style.css';

import Ch3Generator from './applets/Ch3Generator'
import Ch2Generator from './applets/Ch2Generator'
import Ch4Generator from './applets/Ch4Generator'
import Ch5Generator from './applets/Ch5Generator'
import Ch6Generator from './applets/Ch6Generator'
import Ch9Generator from './applets/Ch9Generator';
import isAuthenticated from '.././components/authUser';

function Recordings() {
  isAuthenticated();
  return (
    <div>
      <br />
      <h1>Recordings Page</h1>
      <Ch2Generator />
      <Ch3Generator />
      <Ch4Generator />
      <Ch5Generator />
      <Ch6Generator />
      <Ch9Generator />
    </div>
  );
}

export default Recordings;

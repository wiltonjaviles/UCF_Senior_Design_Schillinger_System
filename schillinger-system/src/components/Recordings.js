import '.././Style.css';

import Ch3Generator from './applets/Ch3Generator'
import Ch2Generator from './applets/Ch2Generator'
import Ch4Generator from './applets/Ch4Generator'
import Ch5Generator from './applets/Ch5Generator'
import Ch6Generator from './applets/Ch6Generator'
import Ch9Generator from './applets/Ch9Generator';
import isAuthenticated from '.././components/authUser';
import Ch7Generator from './applets/Ch7Generator';

function Recordings() {
  isAuthenticated();
  return (
    <div>
      <br />
      <h1>Recordings Page</h1>
      <Ch4Generator />
      
      <Ch7Generator />
      <Ch9Generator />
    </div>
  );
}

export default Recordings;

/*
<Ch3Generator />
<Ch2Generator />
      <Ch4Generator />
      <Ch5Generator />
      <Ch6Generator />
      */
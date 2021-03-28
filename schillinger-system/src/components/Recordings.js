import '.././Style.css';
import Ch4Generator from './applets/Ch4Generator'
import Ch9Generator from './applets/Ch9Generator';
import isAuthenticated from '.././components/authUser';
import Ch7Generator from './applets/Ch7Generator';

function Recordings() {
  isAuthenticated();
  return (
    <div>
      <br />
      <h1>Recordings Page (Coming soon!)</h1>
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
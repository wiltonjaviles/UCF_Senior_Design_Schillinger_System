import '.././Style.css';
import Ch4Generator from './applets/Ch4Generator'
import Ch11Generator from './applets/Ch11Generator';
import isAuthenticated from '.././components/authUser';
import BasicTemplate from './applets/BasicTemplate';

function Recordings() {
  // isAuthenticated();
  return (
    <div>
      <br />
      <h1>Recordings Page (Coming soon!)</h1>
      <BasicTemplate />
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
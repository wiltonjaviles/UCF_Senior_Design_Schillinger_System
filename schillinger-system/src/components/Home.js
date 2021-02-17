import '.././Style.css';
import isAuthenticated from '.././components/authUser';

function Home() {
  isAuthenticated();
  return (
    <div>
      <br />
      <h1>Welcome to the Schillinger System of Musical Composition!</h1>
      <br />
      <p>Welcome to the Schillinger System of Musical Composition!</p>
    </div>
  );
}

export default Home;

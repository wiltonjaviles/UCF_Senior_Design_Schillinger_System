import '.././Style.css';
import {Container, Form, Button} from 'react-bootstrap' 
import React, { useState } from 'react';

const BASE_URL = 'https://learnschillinger.com/api/'

export default function LogIn() {

  const [state , setState] = useState({
    loginUsername : "",
    loginPassword : ""
  })
  const handleChange = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
  }

  const [message,setMessage] = useState('');

  const doLogin = async event => 
    {
      event.preventDefault();     
      if( state.loginUsername === '' || state.loginPassword === '' ){
        setMessage('Please fill out all fields!');
      }
      else{
        var js = 
        '{"username":"' + state.loginUsername + 
        '","password":"' + state.loginPassword 
        +'"}';

        try
        {    
            const response = await fetch(BASE_URL + 'login',
            {
              method:'POST',
              body:js,
              headers:
              {
                'Content-Type': 'application/json'
              }
            }
            );

            var res = JSON.parse(await response.text());

            if( res.error !==  '' )
            {
                setMessage(res.error);
            }
            else if( res.jwt === '' )
            {
                setMessage('Token Error')
            }
            else
            {
                let user = {username:res.username}
                let session = {token:res.jwt}
                localStorage.setItem('user_data', JSON.stringify(user));
                localStorage.setItem('session_token', JSON.stringify(session));

                setMessage('Login Successful');
                window.location.href = '/';
            }
        }
        catch(e)
        {
            alert(e.toString());
            return;
        }
      } 
    };

  return (
    <Container fluid>
      <Form>
        <Form.Group controlId="loginUsername">
          <Form.Label>Sign in.</Form.Label>
          <Form.Control type="username" placeholder="username" value={state.loginUsername} onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId="loginPassword">
          <Form.Control type="password" placeholder="password" value={state.loginPassword} onChange={handleChange} />
        </Form.Group>
        <Button variant="secondary" type="submit" className="float-right" onClick={doLogin}>Log In</Button>
        <span id="registerResult">{message}</span>
      </Form>
    </Container> 
  );
}
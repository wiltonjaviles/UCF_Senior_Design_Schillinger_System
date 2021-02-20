import '.././Style.css';
import {Container, Form, Button} from 'react-bootstrap'
import React, { useState } from 'react';

const BASE_URL = 'http://localhost:5000/api/'

export default function MakeAccount() {


  const [state , setState] = useState({
    formUsername : "",
    formPassword : "",
    formConfirmPassword : "",
  })
  const handleChange = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
  }

  const [message,setMessage] = useState('');

  const doRegister = async event => 
    {
      event.preventDefault();

      if( state.formUsername === '' || state.formPassword === '' || state.formConfirmPassword === '' ){
        setMessage('Please fill out all fields!');
      }
      else if( state.formPassword.length <= 6 ){
        setMessage('Password must have a length of 6 or more!');
      }
      else if( state.formPassword !== state.formConfirmPassword ){
        setMessage('Passwords do not match!');
      }
      else{
        var js = 
        '{"username":"' + state.formUsername + 
        '","password":"' + state.formPassword 
        + '"}';

        try
        {    
            const response = await fetch(BASE_URL + 'createUser',
            {
              method:'POST',
              body:js,
              headers:
              {
                'Content-Type': 'application/json'
              }
            }
            );
            if(response.status === 200){
              setMessage("Hello " + state.formUsername + ", welcome to LearnSchillinger!")
            }
            else{ 
              setMessage(response.statusText)
            }
        }
        catch(e)
        {
            alert(e.toString());
            return;
        }
      } 
    }


  return (
    <Container fluid>
      <Form>
        <Form.Group controlId="formUsername">
          <Form.Label>Sign up.</Form.Label>
          <Form.Control type="username" placeholder="username" value={state.formUsername} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Control type="password" placeholder="password" value={state.formPassword} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formConfirmPassword">
          <Form.Control type="password" placeholder="confirm password" value={state.formConfirmPassword} onChange={handleChange} />
        </Form.Group>
        <Button variant="secondary" onClick={doRegister} type="submit" className="float-right">Create Account</Button>
        <span id="registerResult">{message}</span>
      </Form>
    </Container> 
  );
}

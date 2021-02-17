import react from 'react';

export default function isAuthenticated()
{
    const BASE_URL = 'http://localhost:5000/';
    var _session = localStorage.getItem('session_token');
    var session = JSON.parse(_session);
    if(session !== null)
    {
        var validateToken = session.token;
    }
    else
    {
        validateToken = '';
        // alert('Session Invalid Please Log In!');
        console.log("Session Invalid!");
        // window.location.href = "/";
        return;
    }

    const doValidate = async event =>
    {
        var js = 
      '{"token":"' + validateToken  
      +'"}';

      try
      {    
          const response = await fetch(BASE_URL + 'api/validation',
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
              //alert('Session Invalid Please Log In!');
              localStorage.removeItem('session_token');
            //   window.location.href = '/'
              return;
          }
          else if( res.jwt === '' )
          {
              //alert('Token Response Error!')
              localStorage.removeItem('session_token');
            //   window.location.href = '/'
              return;
          }
          else
          {
              var newSession = {token:res.jwt}
              localStorage.removeItem('session_token');
              localStorage.setItem('session_token', JSON.stringify(newSession));
              return;
          }
      }
      catch(e)
      {
          alert(e.toString());
          return;
      }
    }
    doValidate();
    return; 
}
import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // logged in , redirect to hompage
        history.push('/');
      })
      .catch((e) => alert(e.message));
  };

  const register = (event) => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // create user and login
        history.push('/');
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1920px-Amazon_logo.svg.png'
          alt=''
          className='login__logo'
        />
      </Link>

      <div className='login__container'>
        <h1>Sign in</h1>
        <form action=''>
          <h5>E-mail</h5>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={login} type='submit' className='login__signInButton'>
            Sign In
          </button>
        </form>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          itaque amet doloremque iusto debitis quasi ex recusandae voluptatum
          deserunt possimus, sed minus ut eos provident quam pariatur esse!
          Temporibus odio recusandae ab sequi veniam excepturi voluptates cum,
          distinctio ex repellat?
        </p>
        <button onClick={register} className='login__registerButton'>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;

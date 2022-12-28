import { getAuth,  signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import app from '../utils/Config';
import Navbar from './Navbar';





const auth = getAuth(app)

const Login = (props) => {
  
  const navigate = useNavigate();
  //state for login error
  const [error, setError] = useState('');
  const [user, setUser]= useState('')
  //state for mail
  const [email, setMail] = useState('')

  //state of mail for forget password

  //login handler
  const handleLogin = (e) => {
    e.preventDefault();
    let form = e.target;
    let email = form.email.value
    let password = form.password.value


    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        console.log(user.email);
        
        form.reset();
        alert('Login Successful')
        goTo()
        setError('')
        setUser(user.email);
      })
   
      .catch(error => {

        console.error(error)
        setError(error.message)
      })

  }
  console.log({ user })
  //handle email
  const emailHandler = (e) => {

    let email = e.target.value
    setMail(email)
  
  }

// const handlerForgetPassword = () => {
//     sendPasswordResetEmail(auth, email)
//       .then(() => {

//         alert('Your password set link send to your mail');
//       })
//   }
 
  const goTo = ()=>{
   
    navigate('../ ')  
     
  }
console.log(props.name);
  return (
    <div>
     <h1>Bienvenido {props.name}</h1>
      <form className='' onSubmit={handleLogin}>
        <h3 className=''>Login Here please, {user}</h3>
        <div className="pTop">
          <label htmlFor="exampleInputEmail1" className="textAlign">Email address</label>
          <input onBlur={emailHandler} type="email" name='email' className="textAlign" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="pTop">
          <label htmlFor="exampleInputPassword1" className="textAlign">Password</label>
          <input type="password" name='password' className="textAlign" id="exampleInputPassword1" />
        </div>
        <h2><small className='red'>{error}</small></h2>

        <button type="submit"  className="btn3 bold" user={user.email}>Enviar</button>

        <h3><small>No tienes cuenta? Crea una Cuenta <Link to={'/registration'}>Registration</Link></small></h3>
       
      </form>
    </div>
  );
};
export default Login
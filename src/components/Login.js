import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../utils/Config.js";
import { useAuthState } from "react-firebase-hooks/auth";




function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("./");
  }, [user, loading]);
  return (
    <div className="login2">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn"
          onClick={() => signInWithEmailAndPassword(auth, email, password)}
        >
          Login
        </button>
        <button className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </button>
        <div>
          <Link to="/Reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/Registration">Register</Link> now.
        </div>
      </div>
    </div>
  );
}
export default Login;


// import { getAuth,  signInWithEmailAndPassword } from 'firebase/auth';
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import app from '../utils/Config';
// import Navbar from './Navbar';





// const auth = getAuth(app)

// const Login = ({users}) => {
  
//   const navigate = useNavigate();
//   //state for login error
//   const [error, setError] = useState('');
//   const [user, setUser]= useState('')
//   //state for mail
//   const [email, setMail] = useState('')

//   //state of mail for forget password

//   //login handler
//   const handleLogin = (e) => {
//     e.preventDefault();
//     let form = e.target;
//     let email = form.email.value
//     let password = form.password.value


//     signInWithEmailAndPassword(auth, email, password)
//       .then(result => {
//         const user = result.user;
//         console.log(user.email);
        
//         form.reset();
//         alert('Login Successful')
//         goTo()
//         setError('')
//         setUser(user.email);
//       })
   
//       .catch(error => {

//         console.error(error)
//         setError(error.message)
//       })

//   }
//   console.log({ user })
//   //handle email
//   const emailHandler = (e) => {

//     let email = e.target.value
//     setMail(email)
  
//   }

// // const handlerForgetPassword = () => {
// //     sendPasswordResetEmail(auth, email)
// //       .then(() => {

// //         alert('Your password set link send to your mail');
// //       })
// //   }
 
//   const goTo = ()=>{
   
//     navigate('../ ')  
     
//   }
// console.log(users);
//   return (
//     <div>
//      <h1>Bienvenido {users}</h1>
//       <form className='' onSubmit={handleLogin}>
//         <h3 className=''>Login Here please, {user}</h3>
//         <div className="pTop">
//           <label htmlFor="exampleInputEmail1" className="textAlign">Email address</label>
//           <input onBlur={emailHandler} type="email" name='email' className="textAlign" id="exampleInputEmail1" aria-describedby="emailHelp" />
//         </div>
//         <div className="pTop">
//           <label htmlFor="exampleInputPassword1" className="textAlign">Password</label>
//           <input type="password" name='password' className="textAlign" id="exampleInputPassword1" />
//         </div>
//         <h2><small className='red'>{error}</small></h2>

//         <button type="submit"  className="btn3 bold" user={user.email}>Enviar</button>

//         <h3><small>No tienes cuenta? Crea una Cuenta <Link to={'/registration'}>Registration</Link></small></h3>
       
//       </form>
//     </div>
//   );
// };
// export default Login
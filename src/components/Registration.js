import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import app from '../utils/Config';
import {Link, useNavigate} from 'react-router-dom';
import Login from './Login';


const auth = getAuth(app);

const Registration = () => {
     const navigate = useNavigate();//state for error
    const [error, setError] = useState('');
    

    //state for success
    const [success, setSuccess] = useState('')
    const [form, setForm] = useState(true);
    //handler for submit registration form
    const [name, setName]=useState('')
    const submitHandler = (e) => {
        e.preventDefault();
        let form = e.target;
        let name = form.name.value
        
        let email = form.email.value
        let password = form.password.value
            
        // console.log(name, email, password);

        //handle regular expression for password
        if (!/(?=.*[0-9])/.test(password)) {

            setError('Please use atleast a digit..');
            return;
        }

        if (!/(?=.*[!@#$%^&*])/.test(password)) {

            setError('Please use atleast a special character(@,#,$,%,^,&,*,)')
            return;
        }

        if (password.length < 8) {

            setError('Please use password length atleast 8')
            return;
        }

        setError('')
        setName(name);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess('Registration successful...');
                form.reset();
                mailVarification();
                clear()
            })
            .catch(err => {

                console.log(err)
                setError('This username is already Exist! try another one')
            })
    }

    //email varification
    const mailVarification = () => {

        sendEmailVerification(auth.currentUser)
            .then(() => {

                alert('Perfecto, Ya Puedes Loguearte Para Ingresar')
            })
            .catch(error => {

                console.error(error)
            })
      
        }
    
    const clear = ()=>{
        setForm(false);
      console.log('dd');
    }
    // const goTo = () => {
    //     navigate('../pages/home')

    // }
        const usuario = (e) =>{
            setName(e.target.value)
        }
        console.log(name);
        return (
        
        <div>
            <form  onSubmit={submitHandler} className=''>
                <h3 className='text-warning my-3'>Te Debes Registrar Para Ingresar,</h3>
                    <div className="pTop">
                    <label htmlFor="formGroupExampleInput" className="">Name:</label>
                    <input type="text" name='name' className="" id="formGroupExampleInput" placeholder="FullName" onChange={usuario} />
                </div>
                    <div className="pTop">
                    <label htmlFor="formGroupExampleInput2" className="">Email:</label>
                    <input type="email" name='email' className="" id="formGroupExampleInput2" placeholder="Email" required />
                </div>

                    <div className="pTop">
                    <label htmlFor="formGroupExampleInput3" className="form-label">Password:</label>
                    <input type="password" name='password' className="" id="formGroupExampleInput3" placeholder="Password" required />
                    <h2><small className=''>{error}</small></h2>
                    <h2><small className=''>{success}</small></h2>
                </div>
                {/* <input className="center bold green" type="submit" value=" Sign In" /> */}
                    <button type="submit"  className="btn3 bold">Enviar</button>
                <h3 className='bold'><small>Already have an account? <Link props={name} to={'/Login'} onClick={clear}>Login</Link></small></h3>
            </form>
                 
        </div>
    
    );
};

export default Registration;
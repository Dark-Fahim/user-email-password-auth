import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { auth } from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';

const Login = () => {
    const [loginError, setLoginError] = useState('')
    const [successLogin, setSuccessLogin] = useState('')
    const emailRef = useRef(null)


    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        setLoginError('')
        setSuccessLogin('')
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user);
            setSuccessLogin('Login Successful')
        })
        .catch(error => {
            console.log(error.message);
            setLoginError('Invalid Email or Password')
        })
    }

    const handleForgetPassword = ()  => {
        console.log('Forget password', emailRef.current.value);
        const email = emailRef.current.value;
        if(!email){
            console.log('Please write a email');
            return
        }
        else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            console.log('Please write a valid email');
            return
        }
        // 
        sendPasswordResetEmail(auth, email)
        .then(result => {
            console.log(`reset email sent`);
        })
        .catch(err => {
            console.error(err.error);
            
        })
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input ref={emailRef} type="email" className="input" placeholder="Email" name="email" />
                                <label className="label">Password</label>
                                <input type="password" className="input" placeholder="Password" name="password" />
                                <div><a onClick={handleForgetPassword} className="link link-hover">Forgot password?</a></div>
                                <div>
                                    {
                                        loginError && <p className='text-red-500 font-bold text-center text-lg'>{loginError}</p>
                                    }
                                    {
                                        successLogin && <p className='text-green-500 font-bold text-center text-lg'>{successLogin}</p>
                                    }
                                </div>
                                <button className="btn btn-neutral mt-4">Login</button>
                                <p>New to this site? Please <Link to={'/register'}>Register</Link></p>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase/firebase.config';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Register = () => {
    const [regError, setRegError] = useState('')
    const [success, setSuccess] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const handleRegister = e => {
        e.preventDefault()
        console.log(e);
        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value
        const accepted = e.target.terms.checked
        if (password.length < 6) {
            setRegError('Password should be at least 6 characters or longer')
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setRegError('Password have should be a uppercase character')
            return
        }
        else if(!accepted){
            setRegError("Please Accept Our Terms And Conditions")
            return
        }

        setRegError('')
        setSuccess('')
        // console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                sendEmailVerification(result.user)
                .then(() => {
                    alert('Please Check you email for verify your account')
                })
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: 'https://drive.google.com/file/d/17_xKae9SkY1MRZPcYb2H6oHOI992bZgi/view?usp=sharing'
                })
                .then( () => console.log('Profile updated'))
                .catch()
                setSuccess('User Created Successfully')
            })
            .catch(error => {
                console.error(error)
                setRegError('User Already Exist')
            })
    }
    return (
        <div className='mx-auto max-w-[1170px]'>
            <h2 className="text-3xl my-5 text-center">Please Register</h2>
            <form className='flex flex-col' onSubmit={handleRegister}>
                <input className='py-3 px-4 my-3 w-1/2 mx-auto  shadow-xl' type="text" placeholder='Your name' name='name' required />
                <input className='py-3 px-4 my-3 w-1/2 mx-auto  shadow-xl' type="email" placeholder='Email Address' name='email' required />
                <div className='w-2/3 mx-auto flex justify-center items-center'>
                    <input
                        className='py-3 px-4 my-3 w-2/3 shadow-xl'
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Password'
                        name='password' />
                    <span onClick={() => setShowPassword(!showPassword)} className="btn">
                        {
                            showPassword ? <FaEyeSlash/>  :  <FaEye></FaEye>
                        }
                    </span>
                </div>
                <div className='flex justify-center'>
                    <input type="checkbox" name="terms" id="" />
                    <label htmlFor="terms">Accept <a href="">Terms And Conditions</a></label>
                </div>
                <input className='btn py-3 px-4 my-3 w-1/2 mx-auto' type="submit" value="Register" />
            </form>
            <p className='text-center'>Already Have an Account? Please <Link to={'/login'}>Login</Link></p>
            {
                regError && <p className='text-red-500 font-bold text-center text-xl'>{regError}</p>
            }
            {
                success && <p className='text-green-500 font-bold text-center text-3xl'>{success}</p>
            }
        </div>
    );
};

export default Register;
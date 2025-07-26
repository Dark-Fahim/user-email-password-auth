import React from 'react';

const Register = () => {
    const handleRegister = e => {
        e.preventDefault()
        console.log(e);
        const email = e.target.email.value;
        const password = e.target.password.value
        console.log(email, password);
    }
    return (
        <div className='mx-auto max-w-[1170px]'>
            <h2 className="text-3xl my-5 text-center">Please Register</h2>
            <form onSubmit={handleRegister}>
                <input className='py-3 px-4 my-3 w-1/2 mx-auto block shadow-xl' type="text" placeholder='Email Address' name='email'/>
                <input className='py-3 px-4 my-3 w-1/2 mx-auto block shadow-xl' type="password" placeholder='Password' name='password'/>
                <input className='btn py-3 px-4 my-3 w-1/2 mx-auto block' type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;
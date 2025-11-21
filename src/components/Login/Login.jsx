import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState('')

    const navigate = useNavigate();


    const {signInUser} = use(AuthContext)
    const handleLogin = e =>{
        e.preventDefault();
        console.log('handleLogin');

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        signInUser(email,password)
        .then(result =>{
            console.log('saru',result.user)
            setSuccess('account successfully');
            navigate('/orders')
        })
        .catch(error =>{
            console.log(error.message)
            setErrorMessage(error.message)
        })
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <form onSubmit={handleLogin} className="fieldset">
                    <label className="label">Name</label>
                    <input type="name" className="input" name='name' placeholder="Name" />
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <p>Please ? <Link className='text-green-500' to={'/register'}>Register</Link></p>
                {
                    <p className='text-red-500'>{errorMessage}</p>
                }
                {
                    <p className='text-green-400'>{success}</p>
                }
            </div>

        </div>
    );
};

export default Login;
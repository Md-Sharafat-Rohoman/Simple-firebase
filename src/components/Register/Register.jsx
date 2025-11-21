import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

const Register = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState('');

    const {createUser} = use(AuthContext)
    // console.log(createUser)
    const navigate = useNavigate();


    const handleRegister = e => {
        e.preventDefault();
        console.log('handleRegister')
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then(result =>{
            console.log(result.user)
            setSuccess('Account successfully')
            navigate('/')
        })
        .catch(error =>{
            console.log(error);
            setErrorMessage(error)

        })

        
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Register now!</h1>
                <form onSubmit={handleRegister} className="fieldset">
                    <label className="label">Name</label>
                    <input type="name" className="input" name='name' placeholder="Name" />
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Register</button>
                </form>
                <p>Already have an account . Please <Link className='text-green-500' to={'/login'}>Login</Link></p>
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

export default Register;
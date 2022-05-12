import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import "./Login.css";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth)
    const onSubmit = data => {
        const { email, password } = data;
        signInWithEmailAndPassword(email, password)
    };
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <Container className='bg-light px-4 py-5 login my-4 col-5'>
            <h2 className='text-center'>Login Here</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="supplier">
                    <Form.Label>Email Address</Form.Label>
                    <input className='form-control' {...register("email")} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="supplier">
                    <Form.Label>Password</Form.Label>
                    <input className='form-control' type="password" {...register("password")} required />
                </Form.Group>
                {/* errors will return when field validation fails  */}
                <p className='text-danger'>{error?.message}</p>
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" value="Login" className='btn btn-primary' />
            </form>
            <p>New to Sports End? <Link to="/register">Create Account</Link></p>
            <div className='d-flex align-items-center justify-content-center'>
                <div className='or-border'></div>
                <div>Or</div>
                <div className='or-border'></div>
            </div>
            <button className="btn btn-info text-white">Continue with Google</button>
        </Container>
    );
};

export default Login;
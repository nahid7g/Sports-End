import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [aError, setAerror] = useState("")
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const onSubmit = data => {
        const { email, password, confirmPassword } = data;
        if (password !== confirmPassword) {
            setAerror("Password din't match.")
            return;
        }
        createUserWithEmailAndPassword(email, password)
        reset();
    };
    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }
    if (loading || loading1) {
        return <Loading></Loading>
    }
    if (user || user1) {
        navigate("/")
    }

    return (
        <Container className='bg-light px-4 py-5 login my-4 col-5'>
            <h2 className='text-center'>Register Here</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <input className='form-control' {...register("email")} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <input className='form-control' type="password" {...register("password")} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="confirm-password">
                    <Form.Label>Confirm PasswordPassword</Form.Label>
                    <input className='form-control' type="password" {...register("confirmPassword")} required />
                </Form.Group>
                {/* errors will return when field validation fails  */}
                <p className='text-danger'>{aError}</p>
                <p className='text-danger'>{error?.message || error1?.message}</p>
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit" value="Register" className='btn btn-primary' />
            </form>
            <p>Already have and account? <Link to="/login">Login here</Link></p>
            <div className='d-flex align-items-center justify-content-center'>
                <div className='or-border'></div>
                <div>Or</div>
                <div className='or-border'></div>
            </div>
            <button onClick={handleGoogleSignIn} className="btn btn-info text-white">Continue with Google</button>
        </Container>
    );
};

export default Register;
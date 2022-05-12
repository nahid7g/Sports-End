import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const AddNewItem = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [product, setProduct] = useState({});
    const [user] = useAuthState(auth);
    const email = user.email;
    const onSubmit = data => {
        const { name, Category, description, price, inStock, supplier, img } = data;
        const newProduct = { name, Category, description, price, inStock, supplier, img, email }
        fetch("https://sports-end.herokuapp.com/products", {
            method: "POST",
            headers: {
                'Content-Type': "Application/json",
            },
            body: JSON.stringify(newProduct),
        })
            .then(res => res.json())
            .then(data => alert("Successfully added."));
        reset();
    };
    return (
        <Container className='bg-light p-4 my-4'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Product Title</Form.Label>
                    <input className='form-control' {...register("name")} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="category">
                    <Form.Label>Category</Form.Label>
                    <input className='form-control' {...register("Category")} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <input className='form-control' {...register("description")} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="price">
                    <Form.Label>Price</Form.Label>
                    <input className='form-control' {...register("price")} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="stock">
                    <Form.Label>Stock</Form.Label>
                    <input className='form-control' {...register("inStock")} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="supplier">
                    <Form.Label>Supplier</Form.Label>
                    <input className='form-control' {...register("supplier")} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="supplier">
                    <Form.Label>Image Url</Form.Label>
                    <input className='form-control' {...register("img")} required />
                </Form.Group>
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input className='btn btn-primary' type="submit" value="Add Product" />
            </form>
        </Container>
    );
};

export default AddNewItem;
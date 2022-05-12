import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyItem from '../MyItem/MyItem';

const MyItems = () => {
    const [myProducts, setMyProducts] = useState();
    const [user] = useAuthState(auth);
    const email = user.email;
    useEffect(() => {
        const url = `http://localhost:5000/myproducts?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyProducts(data));
    }, [myProducts]);
    const deleteProduct = id => {
        const confirm = window.confirm("Are you Sure?")
        if (confirm) {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deleteCount > 0) {
                        const remaining = myProducts.filter(product => product._id !== id)
                        setMyProducts(remaining);
                    }
                });
        }
    }
    return (
        <Container className='p-4 my-4' id='stocks'>
            <h2>Inventory List</h2>
            <Table hover>
                <thead>
                    <tr>
                        <th>PRODUCTS</th>
                        <th>CATEGORY</th>
                        <th>Description</th>
                        <th>PRICE</th>
                        <th>IN STOCK</th>
                        <th>SUPPLIER</th>
                    </tr>
                </thead>
                {
                    myProducts?.map(product => <MyItem deleteProduct={deleteProduct} product={product} key={product._id}></MyItem>)
                }
            </Table>
        </Container>
    );
};

export default MyItems;
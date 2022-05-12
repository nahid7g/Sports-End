import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InventoryDetail from '../InventoryDetail/InventoryDetail';

const ManageInventory = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products]);
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
                        const remaining = products.filter(product => product._id !== id)
                        setProducts(remaining);
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
                    products.map(product => <InventoryDetail deleteProduct={deleteProduct} product={product} key={product._id}></InventoryDetail>)
                }
            </Table>
            <section className='inventory-link'>
                <Link to="/add-new-item" className='btn btn-secondary'>Add New Item</Link>
            </section>
        </Container>
    );
};

export default ManageInventory;
import React, { useEffect, useState } from 'react';
import "./Stocks.css";
import { Container, Table } from 'react-bootstrap';
import Stock from '../Stock/Stock';
import { Link } from 'react-router-dom';
import Loading from '../../Loading/Loading';

const Stocks = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://sports-end.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products]);
    return (
        <Container className='p-4 mb-4' id='stocks'>
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
                    products.map(product => <Stock product={product} key={product._id}></Stock>)
                }
            </Table>
            <section className='inventory-link'>
                <Link to="/manage-inventory" className='btn btn-secondary'>Manage Inventory</Link>
            </section>
        </Container>
    );
};

export default Stocks;
import React from 'react';
import "./Stock.css";

const Stock = ({ product }) => {
    const { name, price, description, Category, inStock, supplier, img } = product;
    return (
        <>
            <tbody>
                <tr>
                    <td><img src={img} alt={name} /> {name}</td>
                    <td>{Category}</td>
                    <td>{description}</td>
                    <td>${price}</td>
                    <td>{inStock}</td>
                    <td>{supplier}</td>
                    <td><button className='btn btn-warning'>Update</button></td>
                </tr>
            </tbody>
        </>
    );
};

export default Stock;
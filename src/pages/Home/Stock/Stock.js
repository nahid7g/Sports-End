import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Stock.css";

const Stock = ({ product }) => {
    const { name, price, _id, description, Category, inStock, supplier, img } = product;
    const navigate = useNavigate();
    const handleInventory = id => {
        navigate(`/inventory/${id}`);
    }
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
                    <td><button onClick={() => handleInventory(_id)} className='btn btn-warning'>Update</button></td>
                </tr>
            </tbody>
        </>
    );
};

export default Stock;
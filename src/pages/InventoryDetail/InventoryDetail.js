import React from 'react';

const InventoryDetail = ({ product, deleteProduct }) => {
    const { name, price, _id, description, Category, inStock, supplier, img } = product;
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
                    <td><button onClick={() => deleteProduct(_id)} className='btn btn-danger'>Delete</button></td>
                </tr>
            </tbody>
        </>
    );
};

export default InventoryDetail;
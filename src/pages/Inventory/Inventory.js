import React, { useEffect, useState } from 'react';
import { Button, Card, Container, FormControl, InputGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import "./Inventory.css";

const Inventory = () => {
    const [product, setProduct] = useState({});
    const [stocks, setStock] = useState({});
    const { productId } = useParams();
    const url = `http://localhost:5000/products/${productId}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [product]);
    const { img, name, supplier, inStock, description, price } = product;
    const handleUpdate = event => {
        event.preventDefault();
        const stock = parseInt(event.target.stock.value);
        const theProduct = { stock, inStock }
        if (typeof stock === "number" && stock > 0) {
            fetch(url, {
                method: "PUT",
                headers: { "Content-Type": "Application/json" },
                body: JSON.stringify(theProduct)
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
        event.target.reset();
    }

    const handleDelivery = event => {
        event.preventDefault();
        const delivered = { inStock };
        // fetch(url, {
        //     method: "PUT",
        //     headers: { "Content-Type": "Application/json" },
        //     body: JSON.stringify(delivered)
        // })
        //     .then(res => res.json())
        //     .then(data => console.log(data))
    }
    return (
        <Container className='col-5 my-4'>
            <Card className="p-2">
                <div className="d-flex justify-content-center">
                    <Card.Img variant="top" src={img} className="fluid" />
                </div>
                <Card.Body>
                    <Card.Title>
                        title: {name}
                    </Card.Title>
                    <Card.Text>supplier: {supplier}</Card.Text>
                    <Card.Text>In Stock: {inStock}</Card.Text>
                    <Card.Text>description: {description}</Card.Text>
                    <Card.Text>price: ${price}</Card.Text>
                    <button onClick={handleDelivery} className='btn btn-primary'>Delivered</button>
                </Card.Body>
            </Card>
            <section className='my-2'>
                <h2 className='text-center'>Update Stock</h2>
                <form onSubmit={handleUpdate}>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Update Stock"
                            name='stock'
                        />
                        <Button type="submit" variant="outline-secondary" id="button-addon2">
                            Update
                        </Button>
                    </InputGroup>
                </form>
            </section>
        </Container>
    );
};

export default Inventory;
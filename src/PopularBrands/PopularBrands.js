import React from 'react';
import { Container } from 'react-bootstrap';
import "./PopularBrands.css";

const PopularBrands = () => {
    return (
        <Container id='popular-brands' className='bg-light p-4 my-4'>
            <h2 className='text-center mb-4'>Our Top Suppliers</h2>
            <div className='d-flex justify-content-between'>
                <div>
                    <img src="https://i.ibb.co/hKrSVZM/Adidas-logo.webp" alt="Adidas" />
                </div>
                <div>
                    <img src="https://i.ibb.co/jy33NVd/nike.png" alt="Nike" />
                </div>
                <div>
                    <img src="https://i.ibb.co/GvGLcNK/reebok.jpg" alt="Reebok" />
                </div>
                <div>
                    <img src="https://i.ibb.co/Kxq373T/puma.webp" alt="Puma" />
                </div>
                <div>
                    <img src="https://i.ibb.co/JsmSf76/nb.jpg" alt="New Balance" />
                </div>
            </div>
        </Container>
    );
};

export default PopularBrands;
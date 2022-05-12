import React from 'react';
import { Container } from 'react-bootstrap';

const OurLocation = () => {
    return (
        <Container className='my-4'>
            <h2 className='text-center mb-4'>Our Location</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14447.832549358101!2d89.37751282505937!3d25.13710611838337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fce283e0177e69%3A0x7cfcecb38e55a53a!2sGobindogonj!5e0!3m2!1sen!2sbd!4v1652370710497!5m2!1sen!2sbd" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </Container>
    );
};

export default OurLocation;
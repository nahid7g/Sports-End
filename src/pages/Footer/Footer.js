import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className='text-center text-white bg-primary pt-4 pb-2 mb-0'>
            <p>&copy;{year} || All rights reserved by Sport End.</p>
        </div>
    );
};

export default Footer;
import React from 'react';

const Footer = () => {
    const today = new Date();
    const currentyear = today.getFullYear();
    return (
        <footer className='text-center mt-5 bg-black p-5'>
            <p className='text-light'>Copy Right &copy; MD: Arif hasan {currentyear}</p>
        </footer>
    );
};

export default Footer;
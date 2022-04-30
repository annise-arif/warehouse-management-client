import React from 'react';

const Footer = () => {
    const today = new Date();
    const currentyear = today.getFullYear();
    return (
        <footer className='text-center mt-5 bg-black p-5'>
            <p className='text-light'><b>Copy Right &copy; MD: Arif hasan {currentyear}</b></p>
        </footer>
    );
};

export default Footer;
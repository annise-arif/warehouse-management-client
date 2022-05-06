import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const currentyear = today.getFullYear();
    return (
        <footer className='mt-5'>
            <div className="row text-white">
                <div className="col-lg-6 text-center text-lg-left mb-3 mb-lg-0">
                    <p className="small mb-0 mt-1 ">Copy Right &copy; MD: Arif hasan {currentyear}</p>
                </div>
                <div className="col-lg-6 text-center text-lg-right">
                    <a href="/">Home</a>
                    <a href="/#"><i id='facebook' className="fab fa-facebook text-light"></i></a>
                    <a href="/#"><i className="fab fa-youtube"></i></a>
                    <a href="/#"><i className="fab fa-instagram"></i></a>
                    <a href="/#"><i className="fab fa-twitter"></i></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
        <footer className="px-5 py-4">
            <section className="row">
                <div className="col-lg-6 text-center text-lg-start text-white">
                    <p className="small mb-3 mb-lg-0 mt-1 mx-2">
                        {" "}
                        &copy; Copyright by Epicurean Edge{" "}
                    </p>
                </div>

                <div className="col-lg-6 text-center text-lg-end">
                    <Link to="/" className="mx-2 fw-bold home">
                        {" "}
                        <i className="fa-solid fa-house"></i>{" "}
                    </Link>

                    <a
                        href="https://www.facebook.com"
                        className="mx-2"
                        target="_blank"
                    >
                        {" "}
                        <i className="fab fa-facebook" style={{color: "#3b5998"}}></i>{" "}
                    </a>
                    <a
                        href="https://www.youtube.com"
                        className="mx-2"
                        target="_blank"
                    >
                        {" "}
                        <i className="fab fa-youtube" style={{color: "#ff0000"}}></i>{" "}
                    </a>
                    <a
                        href="https://www.instagram.com"
                        className="mx-2"
                        target="_blank"
                    >
                        {" "}
                        <i className="fab fa-instagram" style={{color: "#feda75"}}></i>{" "}
                    </a>
                    <a
                        href="https://www.linkedin.com"
                        className="mx-2"
                        target="_blank"
                    >
                        {" "}
                        <i className="fab fa-linkedin" style={{color: "#0072b1"}}></i>{" "}
                    </a>
                    <a
                        href="https://www.twitter.com"
                        className="mx-2"
                        target="_blank"
                    >
                        {" "}
                        <i className="fab fa-twitter" style={{color: "#00acee"}}></i>{" "}
                    </a>
                </div>
            </section>
        </footer>
        </div>
    );
};

export default Footer;
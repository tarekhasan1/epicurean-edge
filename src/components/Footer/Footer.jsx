import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
        <footer class="px-5 py-4">
            <section class="row">
                <div class="col-lg-6 text-center text-lg-start text-white">
                    <p class="small mb-3 mb-lg-0 mt-1 mx-2">
                        {" "}
                        &copy; Copyright by Epicurean Edge{" "}
                    </p>
                </div>

                <div class="col-lg-6 text-center text-lg-end">
                    <Link to="/" class="mx-2 fw-bold home">
                        {" "}
                        <i class="fa-solid fa-house"></i>{" "}
                    </Link>

                    <a
                        href="https://www.facebook.com"
                        class="mx-2"
                        target="_blank"
                    >
                        {" "}
                        <i class="fab fa-facebook"></i>{" "}
                    </a>
                    <a
                        href="https://www.youtube.com"
                        class="mx-2"
                        target="_blank"
                    >
                        {" "}
                        <i class="fab fa-youtube"></i>{" "}
                    </a>
                    <a
                        href="https://www.instagram.com"
                        class="mx-2"
                        target="_blank"
                    >
                        {" "}
                        <i class="fab fa-instagram"></i>{" "}
                    </a>
                    <a
                        href="https://www.linkedin.com"
                        class="mx-2"
                        target="_blank"
                    >
                        {" "}
                        <i class="fab fa-linkedin"></i>{" "}
                    </a>
                    <a
                        href="https://www.twitter.com"
                        class="mx-2"
                        target="_blank"
                    >
                        {" "}
                        <i class="fab fa-twitter"></i>{" "}
                    </a>
                </div>
            </section>
        </footer>
        </div>
    );
};

export default Footer;
import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';

function Footer() {
  return (
    <footer className="text-center text-lg-start text-muted pt-5">
        <section className="">
            <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                    
                </div>
            </div>
        </section>

        <div className="text-center p-4" id="footer-con">
            <div id="footer-social-icons" className="mb-4">
                <li className="list-inline-item">
                    <NavLink className="px-1" to="linkedin.com"><i className="fab fa-linkedin-in fa-2x"></i></NavLink>
                </li>
                <li className="list-inline-item">
                    <NavLink className="px-1" to="twitter.com"><i className="fab fa-twitter fa-2x"></i></NavLink>
                </li>
                <li className="list-inline-item">
                    <NavLink className="px-1" to="youtube.com"><i className="fab fa-youtube fa-2x"></i></NavLink>
                </li>
                <li className="list-inline-item">
                    <NavLink className="px-1" to="facebook.com"><i className="fab fa-facebook fa-2x"></i></NavLink>
                </li>
                <li className="list-inline-item">
                    <NavLink className="px-1" to="instagram.com"><i className="fab fa-instagram fa-2x"></i></NavLink>
                </li>
                <li className="list-inline-item">
                    <NavLink className="px-1" to="whatsapp.com"><i className="fab fa-whatsapp fa-2x"></i></NavLink>
                </li>
            </div>
            <div id="footer-nav-links" className="mb-4">
                <NavLink to="/whatwedo">What we do</NavLink>|
                <NavLink to="/about">About Us</NavLink>|
                <NavLink to="/blog">Blog</NavLink>|
                <NavLink to="/privacyp">Privacy Policy</NavLink>|
                <NavLink to="/login">Admin</NavLink>
            </div>
            {/* Copyright */}
            {/* <p className="copyright">
                © { new Date().getFullYear()} Copyright: <a className="text-reset fw-bold" href="https://www.adage.lk/">Adage Digital All rights reserved</a>
            </p> */}
        </div>
    </footer>
  );
}

export default Footer;

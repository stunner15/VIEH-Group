import React from 'react'
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import './dashboard.css'
import {PRODUCTS} from "../products"
import {Product} from "./product"


const Dashboard = () => {
  return (
    <div className="screen">
        <div className="navbar">
          <div className="head">Ecual Stores</div>
          <div className="link">
            <Link to="/home"> Home </Link>
            <Link to="/home/cart">
              <ShoppingCart size={32} />
            </Link>
          </div>
        </div>
        <div className="shop">
            <div className="products">
              {PRODUCTS.map((product) => (
                <Product data={product} />
             ))}
            </div>

        </div>
        <footer class="footer">

        <div class="footer-left">
            <h3>ECUAL<span>Stores</span></h3>

            <p class="footer-links">
                <a href="#">Home</a>
                |
                <a href="#">About</a>
                |
                <a href="#">Contact</a>
                |
                <a href="#">Blog</a>
            </p>

            <p class="footer-company-name">Copyright © 2021 <strong>EcualStores</strong> All rights reserved</p>
        </div>

        <div class="footer-center">
            <div>
                <i class="fa fa-map-marker"></i>
                <p><span>Chennai</span>
                    </p>
            </div>

            <div>
                <i class="fa fa-phone"></i>
                <p>+91 74**9**156</p>
            </div>
            <div>
                <i class="fa fa-envelope"></i>
                <p><a href="mailto:ecual00001.co@gmail.com">Ecualstores@gmail.com</a></p>
            </div>
        </div>
        <div class="footer-right">
            <p class="footer-company-about">
                <span>About the company</span>
                <strong>Ecual Stores</strong> is a premium shop where you can find more quality and
                affordable products at Good market price.
            </p>
            <div class="footer-icons">
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                <a href="#"><i class="fa-brands fa-youtube"></i></a>
            </div>
        </div>
    </footer>
    </div>
  
    
  )
}

export default Dashboard
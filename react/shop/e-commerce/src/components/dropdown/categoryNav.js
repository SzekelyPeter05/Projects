import React from 'react';
import WomanSideDropDown from './womanDropDown';
import ManSideDropDown from './manDropdown';

const categoryNav = ()=>{
    
    return (
    <div className="category-nav">
    <span className="category-header">Categories <i className="fa fa-list"></i></span>
    <ul className="category-list open">
        <WomanSideDropDown />
        <li><a href="/#">Men’s Clothing</a></li>
        <ManSideDropDown />
        <li><a href="/#">Computer & Office</a></li>
        <li><a href="/#">Consumer Electronics</a></li>
        <li className="dropdown side-dropdown">
            <a  href="/#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Jewelry & Watches <i className="fa fa-angle-right"></i></a>
            <div className="custom-menu">
                <div className="row">
                    <div className="col-md-4">
                        <ul className="list-links">
                            <li>
                                <h3 className="list-links-title">Categories</h3></li>
                            <li><a href="/#">Women’s Clothing</a></li>
                            <li><a href="/#">Men’s Clothing</a></li>
                            <li><a href="/#">Phones & Accessories</a></li>
                            <li><a href="/#">Jewelry & Watches</a></li>
                            <li><a href="/#">Bags & Shoes</a></li>
                        </ul>
                        <hr/>
                        <ul className="list-links">
                            <li>
                                <h3 className="list-links-title">Categories</h3></li>
                            <li><a href="/#">Women’s Clothing</a></li>
                            <li><a href="/#">Men’s Clothing</a></li>
                            <li><a href="/#">Phones & Accessories</a></li>
                            <li><a href="/#">Jewelry & Watches</a></li>
                            <li><a href="/#">Bags & Shoes</a></li>
                        </ul>
                        <hr className="hidden-md hidden-lg" />
                    </div>
                    <div className="col-md-4">
                        <ul className="list-links">
                            <li>
                                <h3 className="list-links-title">Categories</h3></li>
                            <li><a href="/#">Women’s Clothing</a></li>
                            <li><a href="/#">Men’s Clothing</a></li>
                            <li><a href="/#">Phones & Accessories</a></li>
                            <li><a href="/#">Jewelry & Watches</a></li>
                            <li><a href="/#">Bags & Shoes</a></li>
                        </ul>
                        <hr />
                        <ul className="list-links">
                            <li>
                                <h3 className="list-links-title">Categories</h3></li>
                            <li><a href="/#">Women’s Clothing</a></li>
                            <li><a href="/#">Men’s Clothing</a></li>
                            <li><a href="/#">Phones & Accessories</a></li>
                            <li><a href="/#">Jewelry & Watches</a></li>
                            <li><a href="/#">Bags & Shoes</a></li>
                        </ul>
                        <hr className="hidden-md hidden-lg" />
                    </div>
                    <div className="col-md-4">
                        <ul className="list-links">
                            <li>
                                <h3 className="list-links-title">Categories</h3></li>
                            <li><a href="/#">Women’s Clothing</a></li>
                            <li><a href="/#">Men’s Clothing</a></li>
                            <li><a href="/#">Phones & Accessories</a></li>
                            <li><a href="/#">Jewelry & Watches</a></li>
                            <li><a href="/#">Bags & Shoes</a></li>
                        </ul>
                        <hr />
                        <ul className="list-links">
                            <li>
                                <h3 className="list-links-title">Categories</h3></li>
                            <li><a href="/#">Women’s Clothing</a></li>
                            <li><a href="/#">Men’s Clothing</a></li>
                            <li><a href="/#">Phones & Accessories</a></li>
                            <li><a href="/#">Jewelry & Watches</a></li>
                            <li><a href="/#">Bags & Shoes</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </li>
        <li><a href="/#">Bags & Shoes</a></li>
        <li><a href="/#">View All</a></li>
    </ul>
</div>);
}

export default categoryNav;
import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import {setScreen,changeLogoUrl} from '../../store/actions';

const MenuNav = ()=> {
	const dispatch = useDispatch()
	const history = useHistory();
	const openScreen = (screen) => {
		history.push("/");
		dispatch(setScreen(screen));
		dispatch(changeLogoUrl("./img/logo.png"));
		
	}
    return (
        <div className="menu-nav">
					<span className="menu-header">Menu <i className="fa fa-bars"></i></span>
					<ul className="menu-list">
						<li><a href="/#" onClick={ (event) => {event.preventDefault(); openScreen('main')}}>Home</a></li>
						<li><a href="/#"  onClick={(event) => {event.preventDefault();openScreen('shop')}}>Shop</a></li>
						<li className="dropdown mega-dropdown"><a href="/#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Women <i className="fa fa-caret-down"></i></a>
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
										<hr className="hidden-md hidden-lg"/>
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
										<hr className="hidden-md hidden-lg"/>
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
									</div>
								</div>
								<div className="row hidden-sm hidden-xs">
									<div className="col-md-12">
										<hr/>
										<a className="banner banner-1" href="/#">
											<img src="./img/banner05.jpg" alt="" />
											<div className="banner-caption text-center">
												<h2 className="white-color">NEW COLLECTION</h2>
												<h3 className="white-color font-weak">HOT DEAL</h3>
											</div>
										</a>
									</div>
								</div>
							</div>
						</li>
						<li className="dropdown mega-dropdown full-width"><a href="/#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">Men <i className="fa fa-caret-down"></i></a>
							<div className="custom-menu">
								<div className="row">
									<div className="col-md-3">
										<div className="hidden-sm hidden-xs">
											<a className="banner banner-1" href="/#">
												<img src="./img/banner06.jpg" alt="" />
												<div className="banner-caption text-center">
													<h3 className="white-color text-uppercase">Women’s</h3>
												</div>
											</a>
											<hr/>
										</div>
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
									<div className="col-md-3">
										<div className="hidden-sm hidden-xs">
											<a className="banner banner-1" href="/#">
												<img src="./img/banner07.jpg" alt="" />
												<div className="banner-caption text-center">
													<h3 className="white-color text-uppercase">Men’s</h3>
												</div>
											</a>
										</div>
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
									</div>
									<div className="col-md-3">
										<div className="hidden-sm hidden-xs">
											<a className="banner banner-1" href="/#">
												<img src="./img/banner08.jpg" alt="" />
												<div className="banner-caption text-center">
													<h3 className="white-color text-uppercase">Accessories</h3>
												</div>
											</a>
										</div>
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
									</div>
									<div className="col-md-3">
										<div className="hidden-sm hidden-xs">
											<a className="banner banner-1" href="/#" >
												<img src="./img/banner09.jpg" alt="" />
												<div className="banner-caption text-center">
													<h3 className="white-color text-uppercase">Bags</h3>
												</div>
											</a>
										</div>
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
									</div>
								</div>
							</div>
						</li>
						<li><a href="/#">Sales</a></li>
						
					</ul>
				</div>

    );
}


export default MenuNav;
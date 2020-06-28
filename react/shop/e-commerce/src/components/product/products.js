import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {changeLogoUrl} from '../../store/actions';

const Products = ()=>{
	const dispatch = useDispatch();
	const history = useHistory();
	const openProduct = (id_val)=>{
		history.push({
			pathname: '/Product',
			search: '?id=' + id_val,
			state: { id: id_val }
		  })
		
		dispatch(changeLogoUrl("../img/logo.png"));
	}

    return (
    <div>
        <div id="breadcrumb">
            <div className="container">
                <ul className="breadcrumb">
                    <li><a href="/#">Home</a></li>
                    <li className="active">Products</li>
                </ul>
            </div>
        </div>
        <div className="section">
		
		<div className="container">
			
			<div className="row">
				
				<div id="aside" className="col-md-3">
					
					<div className="aside">
						<h3 className="aside-title">Shop by:</h3>
						<ul className="filter-list">
							<li><span className="text-uppercase">color:</span></li>
							<li><a href="/#" style={{color:"#FFF", backgroundColor:"#8A2454"}}>Camelot</a></li>
							<li><a href="/#" style={{color:"#FFF", backgroundColor:"#475984"}}>East Bay</a></li>
							<li><a href="/#" style={{color:"#FFF", backgroundColor:"#BF6989"}}>Tapestry</a></li>
							<li><a href="/#" style={{color:"#FFF", backgroundColor:"#9A54D8"}}>Medium Purple</a></li>
						</ul>

						<ul className="filter-list">
							<li><span className="text-uppercase">Size:</span></li>
							<li><a href="/#">X</a></li>
							<li><a href="/#">XL</a></li>
						</ul>

						<ul className="filter-list">
							<li><span className="text-uppercase">Price:</span></li>
							<li><a href="/#">MIN: $20.00</a></li>
							<li><a href="/#">MAX: $120.00</a></li>
						</ul>

						<ul className="filter-list">
							<li><span className="text-uppercase">Gender:</span></li>
							<li><a href="/#">Men</a></li>
						</ul>

						<button className="primary-btn">Clear All</button>
					</div>
					
					<div className="aside">
						<h3 className="aside-title">Filter by Price</h3>
						<div id="price-slider"></div>
					</div>
					
					<div className="aside">
						<h3 className="aside-title">Filter By Color:</h3>
						<ul className="color-option">
							<li><div  style={{backgroundColor:"#475984"}}></div></li>
							<li><div style={{backgroundColor:"#8A2454"}}></div></li>
							<li className="active"><div style={{backgroundColor:"#BF6989"}}></div></li>
							<li><div style={{backgroundColor:"#9A54D8"}}></div></li>
							<li><div style={{backgroundColor:"#675F52"}}></div></li>
							<li><div style={{backgroundColor:"#050505"}}></div></li>
							<li><div style={{backgroundColor:"#D5B47B"}}></div></li>
						</ul>
					</div>
					
					<div className="aside">
						<h3 className="aside-title">Filter By Size:</h3>
						<ul className="size-option">
							<li className="active"><a href="/#">S</a></li>
							<li className="active"><a href="/#">XL</a></li>
							<li><a href="/#">SL</a></li>
						</ul>
					</div>
					
					<div className="aside">
						<h3 className="aside-title">Filter by Brand</h3>
						<ul className="list-links">
							<li><a href="/#">Nike</a></li>
							<li><a href="/#">Adidas</a></li>
							<li><a href="/#">Polo</a></li>
							<li><a href="/#">Lacost</a></li>
						</ul>
					</div>
					
					<div className="aside">
						<h3 className="aside-title">Filter by Gender</h3>
						<ul className="list-links">
							<li className="active"><a href="/#">Men</a></li>
							<li><a href="/#">Women</a></li>
						</ul>
					</div>
					
					<div className="aside">
						<h3 className="aside-title">Top Rated Product</h3>
						
						<div className="product product-widget">
							<div className="product-thumb">
								<img src="./img/thumb-product01.jpg" alt="" />
							</div>
							<div className="product-body">
								<h2 className="product-name"><a href="/#">Product Name Goes Here</a></h2>
								<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
								<div className="product-rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star-o empty"></i>
								</div>
							</div>
						</div>
						
						<div className="product product-widget">
							<div className="product-thumb">
								<img src="./img/thumb-product01.jpg" alt="" />
							</div>
							<div className="product-body">
								<h2 className="product-name"><a href="/#">Product Name Goes Here</a></h2>
								<h3 className="product-price">$32.50</h3>
								<div className="product-rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star-o empty"></i>
								</div>
							</div>
						</div>
						
					</div>
					
				</div>
				
				<div id="main" className="col-md-9">
					
					<div className="store-filter clearfix">
						<div className="pull-left">
							<div className="row-filter">
								<a href="/#"><i className="fa fa-th-large"></i></a>
								<a href="/#" className="active"><i className="fa fa-bars"></i></a>
							</div>
							<div className="sort-filter">
								<span className="text-uppercase">Sort By:</span>
								<select className="input">
										<option value="0">Position</option>
										<option value="0">Price</option>
										<option value="0">Rating</option>
									</select>
								<a href="/#" className="main-btn icon-btn"><i className="fa fa-arrow-down"></i></a>
							</div>
						</div>
						<div className="pull-right">
							<div className="page-filter">
								<span className="text-uppercase">Show:</span>
								<select className="input">
										<option value="0">10</option>
										<option value="1">20</option>
										<option value="2">30</option>
									</select>
							</div>
							<ul className="store-pages">
								<li><span className="text-uppercase">Page:</span></li>
								<li className="active">1</li>
								<li><a href="/#">2</a></li>
								<li><a href="/#">3</a></li>
								<li><a href="/#"><i className="fa fa-caret-right"></i></a></li>
							</ul>
						</div>
					</div>
					
					<div id="store">
						
						<div className="row">
							
							<div className="col-md-4 col-sm-6 col-xs-6">
								<div className="product product-single" onClick={() =>openProduct("3")}>
									<div className="product-thumb">
										<div className="product-label">
											<span>New</span>
											<span className="sale">-20%</span>
										</div>
										<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
										<img src="./img/product01.jpg" alt="" />
									</div>
									<div className="product-body">
										<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
										<div className="product-rating">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star-o empty"></i>
										</div>
										<h2 className="product-name"><a href="/#">Product Name Goes Here</a></h2>
										<div className="product-btns">
											<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
											<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
											<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
										</div>
									</div>
								</div>
							</div>
							
							<div className="col-md-4 col-sm-6 col-xs-6">
								<div className="product product-single">
									<div className="product-thumb">
										<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
										<img src="./img/product02.jpg" alt="" />
									</div>
									<div className="product-body">
										<h3 className="product-price">$32.50</h3>
										<div className="product-rating">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star-o empty"></i>
										</div>
										<h2 className="product-name"><a href="/#">Product Name Goes Here</a></h2>
										<div className="product-btns">
											<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
											<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
											<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
										</div>
									</div>
								</div>
							</div>
							

							<div className="clearfix visible-sm visible-xs"></div>

							
							<div className="col-md-4 col-sm-6 col-xs-6">
								<div className="product product-single">
									<div className="product-thumb">
										<div className="product-label">
											<span>New</span>
											<span className="sale">-20%</span>
										</div>
										<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
										<img src="./img/product03.jpg" alt="" />
									</div>
									<div className="product-body">
										<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
										<div className="product-rating">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star-o empty"></i>
										</div>
										<h2 className="product-name"><a href="/#">Product Name Goes Here</a></h2>
										<div className="product-btns">
											<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
											<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
											<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
										</div>
									</div>
								</div>
							</div>
						

							<div className="clearfix visible-md visible-lg"></div>

							
							<div className="col-md-4 col-sm-6 col-xs-6">
								<div className="product product-single">
									<div className="product-thumb">
										<div className="product-label">
											<span>New</span>
										</div>
										<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
										<img src="./img/product04.jpg" alt="" />
									</div>
									<div className="product-body">
										<h3 className="product-price">$32.50</h3>
										<div className="product-rating">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star-o empty"></i>
										</div>
										<h2 className="product-name"><a href="/#">Product Name Goes Here</a></h2>
										<div className="product-btns">
											<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
											<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
											<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
										</div>
									</div>
								</div>
							</div>
							
							<div className="clearfix visible-sm visible-xs"></div>

						
							<div className="col-md-4 col-sm-6 col-xs-6">
								<div className="product product-single">
									<div className="product-thumb">
										<div className="product-label">
											<span>New</span>
										</div>
										<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
										<img src="./img/product05.jpg" alt="" />
									</div>
									<div className="product-body">
										<h3 className="product-price">$32.50</h3>
										<div className="product-rating">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star-o empty"></i>
										</div>
										<h2 className="product-name"><a href="/#">Product Name Goes Here</a></h2>
										<div className="product-btns">
											<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
											<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
											<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
										</div>
									</div>
								</div>
							</div>
							
							<div className="col-md-4 col-sm-6 col-xs-6">
								<div className="product product-single">
									<div className="product-thumb">
										<div className="product-label">
											<span>New</span>
											<span className="sale">-20%</span>
										</div>
										<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
										<img src="./img/product06.jpg" alt="" />
									</div>
									<div className="product-body">
										<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
										<div className="product-rating">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star-o empty"></i>
										</div>
										<h2 className="product-name"><a href="/#">Product Name Goes Here</a></h2>
										<div className="product-btns">
											<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
											<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
											<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
										</div>
									</div>
								</div>
							</div>
							

							<div className="clearfix visible-md visible-lg visible-sm visible-xs"></div>

							
							<div className="col-md-4 col-sm-6 col-xs-6">
								<div className="product product-single">
									<div className="product-thumb">
										<div className="product-label">
											<span>New</span>
											<span className="sale">-20%</span>
										</div>
										<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
										<img src="./img/product07.jpg" alt="" />
									</div>
									<div className="product-body">
										<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
										<div className="product-rating">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star-o empty"></i>
										</div>
										<h2 className="product-name"><a href="/#">Product Name Goes Here</a></h2>
										<div className="product-btns">
											<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
											<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
											<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
										</div>
									</div>
								</div>
							</div>
							
							<div className="col-md-4 col-sm-6 col-xs-6">
								<div className="product product-single">
									<div className="product-thumb">
										<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
										<img src="./img/product08.jpg" alt="" />
									</div>
									<div className="product-body">
										<h3 className="product-price">$32.50</h3>
										<div className="product-rating">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star-o empty"></i>
										</div>
										<h2 className="product-name"><a href="/#">Product Name Goes Here</a></h2>
										<div className="product-btns">
											<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
											<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
											<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
										</div>
									</div>
								</div>
							</div>
							

							<div className="clearfix visible-sm visible-xs"></div>

							
							<div className="col-md-4 col-sm-6 col-xs-6">
								<div className="product product-single">
									<div className="product-thumb">
										<div className="product-label">
											<span className="sale">-20%</span>
										</div>
										<button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
										<img src="./img/product01.jpg" alt="" />
									</div>
									<div className="product-body">
										<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
										<div className="product-rating">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star-o empty"></i>
										</div>
										<h2 className="product-name"><a href="/#">Product Name Goes Here</a></h2>
										<div className="product-btns">
											<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
											<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
											<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
										</div>
									</div>
								</div>
							</div>
							
						</div>
						
					</div>
				
					<div className="store-filter clearfix">
						<div className="pull-left">
							<div className="row-filter">
								<a href="/#"><i className="fa fa-th-large"></i></a>
								<a href="/#" className="active"><i className="fa fa-bars"></i></a>
							</div>
							<div className="sort-filter">
								<span className="text-uppercase">Sort By:</span>
								<select className="input">
										<option value="0">Position</option>
										<option value="0">Price</option>
										<option value="0">Rating</option>
									</select>
								<a href="/#" className="main-btn icon-btn"><i className="fa fa-arrow-down"></i></a>
							</div>
						</div>
						<div className="pull-right">
							<div className="page-filter">
								<span className="text-uppercase">Show:</span>
								<select className="input">
										<option value="0">10</option>
										<option value="1">20</option>
										<option value="2">30</option>
									</select>
							</div>
							<ul className="store-pages">
								<li><span className="text-uppercase">Page:</span></li>
								<li className="active">1</li>
								<li><a href="/#">2</a></li>
								<li><a href="/#">3</a></li>
								<li><a href="/#"><i className="fa fa-caret-right"></i></a></li>
							</ul>
						</div>
					</div>
					
				</div>
				
			</div>
			
		</div>
		
	</div>

    </div>
    )
    ;
}

export default Products;
import React, {useEffect} from 'react';

const Product = ()=> {
	
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const id = urlParams.get('id');
	
	useEffect(() => {
		const script = document.createElement("script");
		script.src = "/js/main.js";
		script.async = true;
		document.body.appendChild(script);
		
		
	 return ()=>{
		 document.body.removeChild(script);
	 }
	  });
    return (
<div className="section">
		<div className="container">
			<div className="row">
				<div className="product product-details clearfix">
					<div className="col-md-6">
						<div id="product-main-view">
							<div className="product-view">
								<img src={`../Products/${id}/img/main-product01.jpg`} alt="" />
							</div>
							<div className="product-view">
								<img src={`../Products/${id}/img/main-product02.jpg`} alt="" />
							</div>
							<div className="product-view">
								<img src={`../Products/${id}/img/main-product03.jpg`} alt="" />
							</div>
							<div className="product-view">
								<img src={`../Products/${id}/img/main-product04.jpg`} alt="" />
							</div>
						</div>
						<div id="product-view">
							<div className="product-view">
								<img src={`../Products/${id}/img/thumb-product01.jpg`} alt="" />
							</div>
							<div className="product-view">
								<img src={`../Products/${id}/img/thumb-product02.jpg`} alt="" />
							</div>
							<div className="product-view">
								<img src={`../Products/${id}/img/thumb-product03.jpg`} alt="" />
							</div>
							<div className="product-view">
								<img src={`../Products/${id}/img/thumb-product04.jpg`} alt="" />
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="product-body">
							<div className="product-label">
								<span>New</span>
								<span className="sale">-20%</span>
							</div>
							<h2 className="product-name">Product Name Goes Here</h2>
							<h3 className="product-price">$32.50 <del className="product-old-price">$45.00</del></h3>
							<div>
								<div className="product-rating">
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star"></i>
									<i className="fa fa-star-o empty"></i>
								</div>
								<a href="/#">3 Review(s) / Add Review</a>
							</div>
							<p><strong>Availability:</strong> In Stock</p>
							<p><strong>Brand:</strong> E-SHOP</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
								dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
							<div className="product-options">
								<ul className="size-option">
									<li><span className="text-uppercase">Size:</span></li>
									<li className="active"><a href="/#">S</a></li>
									<li><a href="/#">XL</a></li>
									<li><a href="/#">SL</a></li>
								</ul>
								<ul className="color-option">
									<li><span className="text-uppercase">Color:</span></li>
									<li className="active"><a style={{backgroundColor:"#475984"}} href="/#"> </a></li>
									<li><a href="/#" style={{backgroundColor:"#8A2454"}}> </a></li>
									<li><a href="/#" style={{backgroundColor: "#BF6989"}}> </a></li>
									<li><a href="/#" style={{backgroundColor:"#9A54D8"}}> </a></li>
								</ul>
							</div>

							<div className="product-btns">
								<div className="qty-input">
									<span className="text-uppercase">QTY: </span>
									<input className="input" type="number" />
								</div>
								<button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
								<div className="pull-right">
									<button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
									<button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
									<button className="main-btn icon-btn"><i className="fa fa-share-alt"></i></button>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-12">
						<div className="product-tab">
							<ul className="tab-nav">
								<li className="active"><a data-toggle="tab" href="#tab1">Description</a></li>
								<li><a data-toggle="tab" href="#tab1">Details</a></li>
								<li><a data-toggle="tab" href="#tab2">Reviews (3)</a></li>
							</ul>
							<div className="tab-content">
								<div id="tab1" className="tab-pane fade in active">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
										irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
								</div>
								<div id="tab2" className="tab-pane fade in">

									<div className="row">
										<div className="col-md-6">
											<div className="product-reviews">
												<div className="single-review">
													<div className="review-heading">
														<div><a href="/#"><i className="fa fa-user-o"></i> John</a></div>
														<div><a href="/#"><i className="fa fa-clock-o"></i> 27 DEC 2017 / 8:0 PM</a></div>
														<div className="review-rating pull-right">
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star-o empty"></i>
														</div>
													</div>
													<div className="review-body">
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute
															irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
													</div>
												</div>

												<div className="single-review">
													<div className="review-heading">
														<div><a href="/#"><i className="fa fa-user-o"></i> John</a></div>
														<div><a href="/#"><i className="fa fa-clock-o"></i> 27 DEC 2017 / 8:0 PM</a></div>
														<div className="review-rating pull-right">
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star-o empty"></i>
														</div>
													</div>
													<div className="review-body">
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute
															irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
													</div>
												</div>

												<div className="single-review">
													<div className="review-heading">
														<div><a href="/#"><i className="fa fa-user-o"></i> John</a></div>
														<div><a href="/#"><i className="fa fa-clock-o"></i> 27 DEC 2017 / 8:0 PM</a></div>
														<div className="review-rating pull-right">
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star-o empty"></i>
														</div>
													</div>
													<div className="review-body">
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute
															irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
													</div>
												</div>

												<ul className="reviews-pages">
													<li className="active">1</li>
													<li><a href="/#">2</a></li>
													<li><a href="/#">3</a></li>
													<li><a href="/#"><i className="fa fa-caret-right"></i></a></li>
												</ul>
											</div>
										</div>
										<div className="col-md-6">
											<h4 className="text-uppercase">Write Your Review</h4>
											<p>Your email address will not be published.</p>
											<form className="review-form">
												<div className="form-group">
													<input className="input" type="text" placeholder="Your Name" />
												</div>
												<div className="form-group">
													<input className="input" type="email" placeholder="Email Address" />
												</div>
												<div className="form-group">
													<textarea className="input" placeholder="Your review"></textarea>
												</div>
												<div className="form-group">
													<div className="input-rating">
														<strong className="text-uppercase">Your Rating: </strong>
														<div className="stars">
															<input type="radio" id="star5" name="rating" value="5" /><label htmlFor="star5"></label>
															<input type="radio" id="star4" name="rating" value="4" /><label htmlFor="star4"></label>
															<input type="radio" id="star3" name="rating" value="3" /><label htmlFor="star3"></label>
															<input type="radio" id="star2" name="rating" value="2" /><label htmlFor="star2"></label>
															<input type="radio" id="star1" name="rating" value="1" /><label htmlFor="star1"></label>
														</div>
													</div>
												</div>
												<button className="primary-btn">Submit</button>
											</form>
										</div>
									</div>



								</div>
							</div>
						</div>
					</div>

				</div>
			
			</div>
			
		</div>
		
	</div>

    );
}

export default Product;
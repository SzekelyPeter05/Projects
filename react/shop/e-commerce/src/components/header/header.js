import React from 'react';
import {useSelector, connect} from 'react-redux';
import {changeLogoUrl} from '../../store/actions';


const Header = () => {

    let imageLogo = useSelector(state => state.logoUrl);
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if(urlParams.get('id'))
    {
      imageLogo = "../img/logo.png" 
    }

    return (
     <div id="header">
        <div className="container">
          <div className="pull-left">
            
            <div className="header-logo">
              <a className="logo" href="szekelypeter.com">
                <img src={imageLogo} alt="" />
              </a>
            </div>
            <div className="header-search">
              <form>
                <input className="input search-input" type="text" placeholder="Enter your keyword" />
                <select className="input search-categories">
                  <option value="0">All Categories</option>
                  <option value="1">Under development</option>
                  
                </select>
                <button className="search-btn"><i className="fa fa-search"></i></button>
              </form>
            </div>
            
          </div>
          <div className="pull-right">
            <ul className="header-btns">
              
              <li style={{visibility : "hidden"}} className="header-account dropdown default-dropdown">
                <div  className="dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="true">
                  <div className="header-btns-icon">
                    <i className="fa fa-user-o"></i>
                  </div>
                  <strong className="text-uppercase">My Account <i className="fa fa-caret-down"></i></strong>
                </div>
                <a href="szekelypeter.com" className="text-uppercase">Under development</a> / <a href="szekelypeter.com" className="text-uppercase">Join</a>
                <ul className="custom-menu">
                  <li><a href="szekelypeter.com"><i className="fa fa-user-o"></i> Under development</a></li>
                  <li><a href="szekelypeter.com"><i className="fa fa-heart-o"></i> Under development</a></li>
                  <li><a href="szekelypeter.com"><i className="fa fa-exchange"></i> Under development</a></li>
                  <li><a href="szekelypeter.com"><i className="fa fa-check"></i> Under development</a></li>
                  <li><a href="szekelypeter.com"><i className="fa fa-unlock-alt"></i> Under development</a></li>
                  <li><a href="szekelypeter.com"><i className="fa fa-user-plus"></i> Under development</a></li>
                </ul>
              </li>

              <li className="header-cart dropdown default-dropdown">
                <div  className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                  <div className="header-btns-icon">
                    <i className="fa fa-shopping-cart"></i>
                    <span className="qty">3</span>
                  </div>
                  <strong className="text-uppercase">My Cart:</strong>
                  <br/>
                  <span>35.20$</span>
                </div>
                <div className="custom-menu">
                  <div id="shopping-cart">
                    <div className="shopping-cart-list">
                      <div className="product product-widget">
                        <div className="product-thumb">
						
                          <img src="./img/thumb-product01.jpg" alt="" />
                        </div>
                        <div className="product-body">
                          <h3 className="product-price">$32.50 <span className="qty">x3</span></h3>
                          <h2 className="product-name"><a href="/">Product Name Goes Here</a></h2>
                        </div>
                        <button className="cancel-btn"><i className="fa fa-trash"></i></button>
                      </div>
                      <div className="product product-widget">
                        <div className="product-thumb">
                          <img src="./img/thumb-product01.jpg" alt="" />
                        </div>
                        <div className="product-body">
                          <h3 className="product-price">$32.50 <span className="qty">x3</span></h3>
                          <h2 className="product-name"><a href="/">Product Name Goes Here</a></h2>
                        </div>
                        <button className="cancel-btn"><i className="fa fa-trash"></i></button>
                      </div>
                    </div>
                    <div className="shopping-cart-btns">
                      <button className="main-btn">View Cart</button>
                      <button className="primary-btn">Checkout <i className="fa fa-arrow-circle-right"></i></button>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-toggle">
                <button className="nav-toggle-btn main-btn icon-btn"><i className="fa fa-bars"></i></button>
              </li>
              
            </ul>
          </div>
        </div>
       
      </div>
    );
}

export default connect(changeLogoUrl)(Header);
import React from 'react';


const ProductListItem = (props)=>{
   
    const IsNew = props.new ?  <span>New</span> : null;
    const sale = props.sale !== undefined ? <span className="sale">{props.sale}</span> : null;
    
    
    return (
    <div className="col-md-4 col-sm-6 col-xs-6">
        <div className="product product-single" onClick={() =>props.openProduct(props.prodId)}>
            <div className="product-thumb">
                <div className="product-label">
                    {IsNew}
                    {sale}
                </div>
                <button className="main-btn quick-view"><i className="fa fa-search-plus"></i> Quick view</button>
                <img src={props.imgSrc} alt="" />
            </div>
            <div className="product-body">
                <h3 className="product-price">{props.newPrice} <del className="product-old-price">{props.oldPrice}</del></h3>
                <div className="product-rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star-o empty"></i>
                </div>
                <h2 className="product-name"><a href="/#">{props.name}</a></h2>
                <div className="product-btns">
                    <button className="main-btn icon-btn"><i className="fa fa-heart"></i></button>
                    <button className="main-btn icon-btn"><i className="fa fa-exchange"></i></button>
                    <button className="primary-btn add-to-cart"><i className="fa fa-shopping-cart"></i> Add to Cart</button>
                </div>
            </div>
        </div>
    </div>       
    );
    
}

export default ProductListItem;
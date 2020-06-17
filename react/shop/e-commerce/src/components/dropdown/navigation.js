import React from 'react';
import CategoryNav from './categoryNav';
import MenuNav from './menuNav';





const navigation = ()=> {
	

    return (
        <div id="navigation">
		<div className="container">
			<div id="responsive-nav">
				<CategoryNav/>
				<MenuNav />				
			</div>
		</div>
	
	</div>
    );
}

export default navigation;
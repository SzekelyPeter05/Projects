import React from 'react';
import Header from './components/header/header';
import Navigation from './components/dropdown/navigation';
import MainArea from './components/main/mainArea';
import Footer from './components/footer/footer';
import Product from './components/product/product';
import Products from './components/product/products';
import {  useSelector, connect } from 'react-redux'
import {setScreen} from './store/actions';
import {
	BrowserRouter as Router,
	Switch,
	Route,
  } from "react-router-dom";



import './App.css';

function App() {

	const Page  =  useSelector(state => state.selectedScreen) ;
	const mainScreen = Page === "main" ?  <MainArea /> : Page === "product" ? <Product /> : Page === "shop" ? <Products /> : null;


  return (
	<Router >
		<div>
			<Header/>
			<Navigation />
			<Switch  >
				<Route path="/Product">
            		<Product />
          		</Route>
				<Route path="/">
					{mainScreen}
				</Route>
			</Switch>
			<Footer />
		</div>
	</Router>
  );
}

export default connect(setScreen)(App);

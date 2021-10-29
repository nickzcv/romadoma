import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Search from './pages/About/Search';
import ResetPassword from './pages/Authentications/ResetPassword';
import OurTeam from './pages/About/OurTeam';

import Contact from './pages/About/Contact';
import Faqs from './pages/About/Faqs';
import Error404 from './pages/About/Error-404';
import TrackingOrder from './pages/About/TrackingOrder';
import Compare from './pages/About/Compare';
import TermsOfService from './pages/About/TermsOfService';
import PrivacyPolicy from './pages/About/PrivacyPolicy';
import MyAccount from './pages/About/MyAccount';
import Shop from './pages/Shop/Shop';
import Cart from './pages/Shop/Cart';
import Orders from './pages/Shop/Orders';
import Checkout from './pages/Shop/Checkout';
import ProductsDetails from './pages/Shop/ProductsDetails';
import ProductsDetailsSidebar from './pages/Shop/ProductsDetailsSidebar';
import Blog from './pages/Blog/Blog';
import BlogListView from './pages/Blog/BlogListView';
import BlogLeftSidebar from './pages/Blog/BlogLeftSidebar';
import BlogRightSidebar from './pages/Blog/BlogRightSidebar';
import BlogFullWidth from './pages/Blog/BlogFullWidth';
import BlogDetails from './pages/Blog/BlogDetails';
import AddProduct from './pages/Products/AddProduct';
import User from './pages/User/User';
import Products from './pages/Products/Products';
import ComingSoon from './pages/About/ComingSoon';

import CartContext from './contexts/cart-context';

import Navbar from './components/Layout/Navbar';

function App() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const _cartItems = JSON.parse(localStorage.getItem('cart-items'));
    if (_cartItems && _cartItems.length > 0) {
      setCartItems(_cartItems);
    }
  }, []);

  const addItemToCart = (product) => {
    let exist = false;
    const newState =
      cartItems &&
      cartItems.map((cartItem) => {
        if (cartItem._id === product._id) {
          exist = true;
          return {
            ...cartItem,
            quantity: product.quantity,
          };
        }
        return cartItem;
      });
    if (exist) {
      setCartItems(newState);
      localStorage.setItem('cart-items', JSON.stringify(newState));
    } else {
      localStorage.setItem(
        'cart-items',
        JSON.stringify([...cartItems, product])
      );
      setCartItems([...cartItems, product]);
    }
  };

  const removeItemFromCart = (id) => {
    let _cartItems = [...cartItems];
    let index = _cartItems.findIndex((cart) => cart._id === id);
    _cartItems.splice(index, 1);
    localStorage.setItem('cart-items', JSON.stringify(_cartItems));
    setCartItems(_cartItems);
  };

  return (
    <Router>

        <CartContext.Provider
          value={{
            cartItems,
            addItemToCart,
            removeItemFromCart,
          }}
        >
          <div className="app">
            <Toaster />
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/our-team" component={OurTeam} />

              <Route path="/search" component={Search} />
              <Route path="/contact" component={Contact} />
              <Route path="/faqs" component={Faqs} />
              <Route path="/my-account" component={MyAccount} />
              <Route path="/error-404" component={Error404} />
              <Route path="/tracking-order" component={TrackingOrder} />
              <Route path="/compare" component={Compare} />
              <Route path="/terms-of-service" component={TermsOfService} />
              <Route path="/privacy-policy" component={PrivacyPolicy} />
              <Route exact path="/shop" component={Shop} />
              <Route exact path="/shop/:keyword" component={Shop} />
              <Route exact path="/page/:pageNumber" component={Shop} />
              <Route
                exact
                path="/search/:keyword/page/:pageNumber"
                component={Shop}
              />
              <Route path="/cart" component={Cart} />
              <Route path="/order" component={Orders} />
              <Route path="/checkout" component={Checkout} />
              <Route
                path="/products-details/:productId"
                component={ProductsDetails}
              />
              <Route
                path="/products-details-sidebar"
                component={ProductsDetailsSidebar}
              />
              <Route path="/blog" component={Blog} />
              <Route path="/blog-list-view" component={BlogListView} />
              <Route path="/blog-left-sidebar" component={BlogLeftSidebar} />
              <Route path="/blog-right-sidebar" component={BlogRightSidebar} />
              <Route path="/blog-full-width" component={BlogFullWidth} />
              <Route path="/blog-details" component={BlogDetails} />
              <Route path="/coming-soon" component={ComingSoon} />
              <Route path="/add-product" component={AddProduct} />
              <Route path="/profile" component={User} />
              <Route path="/products" component={Products} />
              <Route path="/reset" component={ResetPassword} />
            </Switch>
          </div>
        </CartContext.Provider>

    </Router>
  );
}

export default App;

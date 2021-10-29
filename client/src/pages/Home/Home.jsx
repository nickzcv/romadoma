import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

//actions
import { listProducts } from '../../redux/Product/ProductAction';

//components
import Footer from '../../components/Footer/Footer';
import NewArrivals from '../../components/Common/NewArrivals';
import Support from '../../components/Common/Support';
import BestSellers from '../../components/Common/BestSellers';
import LatestNews from '../../components/Common/LatestNews';
import Collection from '../../components/Common/Collection';
import Overview from '../../components/Home/Home-one/Overview';
import Banner from '../../components/Home/Home-one/Banner';
import SpecialOffer from '../../components/Home/Home-one/SpecialOffer';
import QuickView from '../../components/Products/QuickView';
import Preloader from '../../components/Common/Preloader';
import cartContext from '../../contexts/cart-context';
import './Home.scss';

function Home() {
  const [product, setProduct] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setisLoading] = useState(true);

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productReducer);
  const context = useContext(cartContext);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 1000);
  }, []);

  const showQuickView = (product) => {
    setIsOpen(true);
    setProduct(product);
  };

  const closeModal = () => {
    setIsOpen(false);
    setProduct({});
  };

  const addToCart = (product) => {
    let currentItem = {
      _id: product._id,
      name: product.name,
      price: product.price,
      type: product.type,
      total_in_stock: product.total_in_stock,
      image_public_id: product.image_public_id,
      quantity,
    };
    context.addItemToCart(currentItem);
  };

  return (
    <div className="home-wrapper">
      <Helmet>
        <title>Деревянные развивающие игрушки и конструкторы из натурального дерева.</title>
        <meta name="description" content="Развивающие игрушки и конструкторы из дерева. Купить деревянные эко игрушки, развивающие игры, Цвик-Арт и Нить-Арт" />
      </Helmet>
      {isLoading === true ? (
        <Preloader />
      ) : (
        <>
          <Banner />
          <Overview />
          <Support />
          <NewArrivals
            paddingClass="pt-100 pb-70"
            products={products}
            addToCart={addToCart}
            showQuickView={showQuickView}
          />
          <SpecialOffer products={products} />
          <Collection />
          <BestSellers
            paddingClass="pb-70"
            products={products}
            showQuickView={showQuickView}
            addToCart={addToCart}
          />

          <LatestNews />
          <Footer />
          <QuickView
            isOpen={isOpen}
            closeModal={closeModal}
            product={product}
          />
          <div className="go-top">
            <i className="bx bx-up-arrow-alt"></i>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;

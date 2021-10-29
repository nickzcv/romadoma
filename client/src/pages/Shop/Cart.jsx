import PageTitle from '../../components/Common/PageTitle';
import Footer from '../../components/Footer/Footer';
import CartArea from '../../components/Shop/CartArea';

function Cart() {
  return (
    <div className="cart-wrapper">
      <PageTitle title="Корзина" />
      <CartArea />
      <Footer />
    </div>
  );
}

export default Cart;

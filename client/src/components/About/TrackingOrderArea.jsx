import trackOrder from '../../assets/img/track-order.jpg';

function TrackingOrderArea() {
  return (
    <section className="track-order-area ptb-50">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="track-order-image">
              <img src={trackOrder} alt="image" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="track-order-content">
              <p>
                Для того чтобы узнать статус вашего заказа введите ниже Идентификатор(id) вашего заказа.
                Id заказа был отправлен вам на email.
                Для сохраниния конфиденциальности введите e-mail который вы указали при оформлении заказа.
              </p>

              <form>
                <div className="form-group">
                  <label>ID заказа</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="form-group">
                  <label>E-mail</label>
                  <input type="email" className="form-control" />
                </div>

                <button type="submit" className="default-btn">
                  Отследить мой заказ
                  <span></span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrackingOrderArea;

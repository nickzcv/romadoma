import React, { useState, useEffect } from 'react';
import Preloader from '../../components/Common/Preloader';
import TrackingOrderArea from '../../components/About/TrackingOrderArea';
import PageTitle from '../../components/Common/PageTitle';
import Support from '../../components/Common/Support';
import Footer from '../../components/Footer/Footer';

function TrackingOrder() {

  return (
    <>
      <div className="tracking-order-wrapper">
        <PageTitle title="Отследить заказ" />
        <TrackingOrderArea />
        <Support />
        <Footer />
      </div>
    </>
  );
}

export default TrackingOrder;

function Support({ paddingClass = null }) {
  return (
    <section className={'support-area ' + paddingClass}>
      <div className="container-fluid">
        <div className="support-inner-box">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-support">
                <span className="icon ecoToys"></span>
                <div className="support-content">
                  <h3>Развивающие игрушки для творчества из натурального дерева.</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-support">
                <span className="icon ecoHouse"></span>
                <div className="support-content">
                  <h3>Гипоаллергенные эко краски для детской продукции из Италии. Гарантия безопасности для детей</h3>
                </div>
              </div>
            </div>


            <div className="col-lg-4 col-md-6">
              <div className="single-support">
                <span className="icon belarus"></span>
                <div className="support-content">
                  <h3>Производство в Беларуси. Склад отправки в Киеве.</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Support;

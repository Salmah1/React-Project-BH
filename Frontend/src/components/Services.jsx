function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-8 mx-auto text-center">
            <h6 className="text-primary">SERVICES</h6>
            <h2>Our Services</h2>
          </div>
        </div>
        <div className="row g-4 mx-4 py-5">
          <div className="col-lg-6">
            <div className="service card-effect bounceInUp">
              <img src={require("../img/hero-4.jpg")} alt="" />
              <div className="iconbox">
                <i className="bx bxs-donate-heart"></i>
              </div>
              <h5 className="mt-4 mb-2">Donations pickup</h5>
              <p>
                We will come to your doorstep to pick up the donations in the
                chosen slot and deliver them to the NGO where they can be given
                a new life.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="service card-effect">
              <img
                className="service-image2"
                src={require("../img/hero-5.jpg")}
                alt=""
              />
              <div className="iconbox">
                <i className="bx bxs-package"></i>
              </div>
              <h5 className="mt-4 mb-2">Products</h5>
              <p>
                Our products are carefully crafted by people of determination to
                be sold. The entire profit earned from the sales will go
                directly to the charity home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

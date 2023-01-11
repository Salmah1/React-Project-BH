import React from "react";
import Link from "@mui/material/Link";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import Button from "@mui/material/Button";

function Cart() {
  return (
    <div className="h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol>
          <MDBCard>
            <MDBCardBody className="text-black">
              <MDBRow>
                <MDBCol lg="7" className="px-5 py-4">
                  <MDBTypography
                    tag="h3"
                    className="mb-5 pt-2 text-center fw-bold text-uppercase"
                  >
                    Your products
                  </MDBTypography>

                  <div className="d-flex align-items-center mb-5">
                    <div className="flex-shrink-0">
                      <MDBCardImage
                        src="http://res.cloudinary.com/dm4murokj/image/upload/v1671654344/j6hbvhb6pcfds3xamv1b.webp"
                        fluid
                        style={{ width: "150px" }}
                        alt="Generic placeholder image"
                      />
                    </div>

                    <div className="flex-grow-1 ms-3">
                      <a href="#!" className="float-end text-black">
                        <MDBIcon fas icon="times" />
                      </a>
                      <MDBTypography tag="h5" className="text-primary">
                        Oak Coloured Floating Nightstand
                      </MDBTypography>
                      <MDBTypography tag="h6" style={{ color: "#9e9e9e" }}>
                        Furniture
                      </MDBTypography>

                      <div className="d-flex align-items-center">
                        <p className="fw-bold mb-0 me-5 pe-3">$ 174.99</p>

                        <div className="def-number-input number-input">
                          <input
                            className="quantity fw-bold"
                            min={1}
                            max={1000}
                            defaultValue={1}
                            type="number"
                            name="number"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-5">
                    <div className="flex-shrink-0">
                      <MDBCardImage
                        src="http://res.cloudinary.com/dm4murokj/image/upload/v1671653381/zdqtrul19jkgenxsf9ll.webp"
                        fluid
                        style={{ width: "150px" }}
                        alt="Generic placeholder image"
                      />
                    </div>

                    <div className="flex-grow-1 ms-3">
                      <a href="#!" className="float-end text-black">
                        <MDBIcon fas icon="times" />
                      </a>
                      <MDBTypography tag="h5" className="text-primary">
                        Assorted Dipped Stoneware
                      </MDBTypography>
                      <MDBTypography tag="h6" style={{ color: "#9e9e9e" }}>
                        Utensils
                      </MDBTypography>

                      <div className="d-flex align-items-center">
                        <p className="fw-bold mb-0 me-5 pe-3">$ 85</p>

                        <div className="def-number-input number-input">
                          <input
                            className="quantity fw-bold"
                            min={1}
                            max={1000}
                            defaultValue={2}
                            type="number"
                            name="number"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-5">
                    <div className="flex-shrink-0">
                      <MDBCardImage
                        src="http://res.cloudinary.com/dm4murokj/image/upload/v1671653673/qk0omdhrrkpe0qpefman.webp"
                        fluid
                        style={{ width: "150px" }}
                        alt="Generic placeholder image"
                      />
                    </div>

                    <div className="flex-grow-1 ms-3">
                      <a href="#!" className="float-end text-black">
                        <MDBIcon fas icon="times" />
                      </a>
                      <MDBTypography tag="h5" className="text-primary">
                        Minimal Concrete Bud Vases
                      </MDBTypography>
                      <MDBTypography tag="h6" style={{ color: "#9e9e9e" }}>
                        Home Decor
                      </MDBTypography>

                      <div className="d-flex align-items-center">
                        <p className="fw-bold mb-0 me-5 pe-3">$ 22.92</p>

                        <div className="def-number-input number-input">
                          <input
                            className="quantity fw-bold"
                            min={1}
                            max={1000}
                            defaultValue={1}
                            type="number"
                            name="number"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr
                    className="mb-4"
                    style={{
                      height: "2px",
                      backgroundColor: "#1266f1",
                      opacity: 1,
                    }}
                  />

                  <div className="d-flex justify-content-between px-x">
                    <p className="fw-bold">Discount:</p>
                    <p className="fw-bold">$ 0</p>
                  </div>
                  <div
                    className="d-flex justify-content-between p-2 mb-2"
                    style={{ backgroundColor: "#e1f5fe" }}
                  >
                    <MDBTypography tag="h5" className="fw-bold mb-0">
                      Total:
                    </MDBTypography>
                    <MDBTypography tag="h5" className="fw-bold mb-0">
                      $ 367.91
                    </MDBTypography>
                  </div>
                </MDBCol>
                <MDBCol lg="5" className="px-5 py-4">
                  <MDBTypography
                    tag="h3"
                    className="mb-5 pt-2 text-center fw-bold text-uppercase"
                  >
                    Payment
                  </MDBTypography>

                  <form className="mb-5">
                    <p>Card number: </p>
                    <MDBInput
                      className="mb-5"
                      placeholder="### ###"
                      type="text"
                      size="lg"
                    />

                    <p>Name on card: </p>
                    <MDBInput
                      className="mb-5"
                      type="text"
                      size="lg"
                      placeholder="Name"
                    />

                    <MDBRow>
                      <MDBCol md="6" className="mb-5">
                        <p>Expiration: </p>
                        <MDBInput
                          className="mb-4"
                          type="text"
                          size="lg"
                          minLength="7"
                          maxLength="7"
                          placeholder="MM/YYYY"
                        />
                      </MDBCol>

                      <MDBCol md="6" className="mb-5">
                        <p>Cvv: </p>
                        <MDBInput
                          className="mb-4"
                          type="text"
                          size="lg"
                          minLength="3"
                          maxLength="3"
                          placeholder="&#9679;&#9679;&#9679;"
                        />
                      </MDBCol>
                    </MDBRow>

                    <Button
                      sx={{ "background-color": "#0d6efd" }}
                      href="/buynow"
                      size="large"
                      variant="contained"
                      className="text-white"
                    >
                      Buy now
                    </Button>

                    <MDBTypography
                      tag="h5"
                      className="fw-bold mb-5"
                      style={{ position: "absolute", bottom: "0" }}
                    >
                      <Link href="/products/list">
                        <MDBIcon fas icon="angle-left" />
                        Back to shopping
                      </Link>
                    </MDBTypography>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default Cart;

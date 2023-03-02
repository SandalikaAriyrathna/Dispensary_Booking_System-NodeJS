import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBRipple,
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter
      className="text-center text-white"
      style={{ backgroundColor: 'white' }}
    >
      <MDBContainer className="p-4">
        <section className="">
          <MDBRow>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img
                  style={{ height: '130px', opacity: '0.7' }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl8JZUwkJX_oB8uDIwwTXXO8N9kY2SfrvTdIr455odkByuzDztNPUGiTe_TjSf_9uE5mA&usqp=CAU"
                  className="w-100"
                  alt=""
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img
                  style={{ height: '130px', opacity: '0.7' }}
                  src="https://thumbs.dreamstime.com/z/inside-interior-pharmacy-dispensary-mall-johannesburg-south-africa-july-136957247.jpg"
                  className="w-100"
                  alt=""
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img
                  style={{ height: '130px', opacity: '0.7' }}
                  src="https://thumbs.dreamstime.com/z/alternative-medicines-germany-march-shelves-herbal-medicinal-products-sold-directly-to-consumer-prescription-69032394.jpg"
                  className="w-100"
                  alt=""
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img
                  style={{ height: '130px', opacity: '0.7' }}
                  src="https://thumbs.dreamstime.com/z/pharmacy-otc-products-turkey-64209774.jpg"
                  className="w-100"
                  alt=""
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img
                  style={{ height: '130px', opacity: '0.7' }}
                  src="https://thumbs.dreamstime.com/b/pharmacy-otc-products-turkey-64209585.jpg"
                  className="w-100"
                  alt=""
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg="2" md="12" className="mb-4 mb-md-0">
              <MDBRipple
                rippleColor="light"
                className="bg-image hover-overlay shadow-1-strong rounded"
              >
                <img
                  style={{ height: '130px', opacity: '0.7' }}
                  src="https://thumbs.dreamstime.com/z/pharmacist-reading-prescription-pharmacy-16753516.jpg"
                  className="w-100"
                  alt=""
                />
                <a href="#!">
                  <div
                    className="mask"
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
          </MDBRow>
        </section>

        <section className="mb-4 mt-4">
          <a
            className="btn btn-outline-dark btn-floating m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </a>

          <a
            className="btn btn-outline-dark btn-floating m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="twitter" />
          </a>

          <a
            className="btn btn-outline-dark btn-floating m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="google" />
          </a>
          <a
            className="btn btn-outline-dark btn-floating m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </a>

          <a
            className="btn btn-outline-dark btn-floating m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </a>

          <a
            className="btn btn-outline-dark btn-floating m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </a>
        </section>
      </MDBContainer>

      <div
        className="text-center text-dark p-3"
        style={{ backgroundColor: '#EEE' }}
      >
        © 2020 Copyright:
        <a className="text-dark" href="https://gorent.com/">
          GoRent.com
        </a>
      </div>
    </MDBFooter>
  );
}

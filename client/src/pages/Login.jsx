import axios from 'axios';
import React, { useContext, useRef, useState } from 'react';
import { Context } from '../context/Context';
// import jwt_decode from "jwt-decode";

export default function Login() {
  const { isFetching, dispatch } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/UserAuth/login', {
        email: emailRef.current?.value,
        password: passwordRef.current?.value,
      });
      localStorage.setItem('user', JSON.stringify(res.data.data.user));
      localStorage.setItem('access_token', res.data.data.access_token);
      window.location.href = '/user-profile';
    } catch (err) {
      console.log(err);
    }
  };

  const emailRef = useRef();
  const passwordRef = useRef();

  return (
    <>
      {/* <!-- Section: Design Block --> */}
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: '10' }}>
              <h1
                className="my-5 display-5 fw-bold ls-tight"
                style={{ color: 'hsl(218, 81%, 95%)' }}
              >
                Green House <br />
                <span style={{ color: 'hsl(218, 81%, 75%)' }}>Dispensary</span>
              </h1>
              <p
                className="mb-4 opacity-70"
                style={{ color: 'hsl(218, 81%, 85%)' }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              ></div>
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              ></div>

              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  <form onSubmit={handleSubmit}>
                    {/* <form> */}
                    <br />
                    <br />

                    {/* <!-- Email input --> */}
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control"
                        ref={emailRef}
                      />
                      <label
                        className="form-label reg-label"
                        htmlFor="form3Example3"
                      >
                        Email address
                      </label>
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control"
                        ref={passwordRef}
                      />
                      <label
                        className="form-label reg-label"
                        htmlFor="form3Example4"
                      >
                        Password
                      </label>
                    </div>

                    {/* <!-- Submit button --> */}
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                    >
                      Sign In
                    </button>

                    <div class="text-center">
                      <p>or login with:</p>
                      <button
                        type="button"
                        class="btn btn-link btn-floating me-4"
                      >
                        <i class="fab fa-facebook-f"></i>
                      </button>

                      <button
                        type="button"
                        class="btn btn-link btn-floating me-4"
                      >
                        <i class="fab fa-google"></i>
                      </button>

                      <button
                        type="button"
                        class="btn btn-link btn-floating me-4"
                      >
                        <i class="fab fa-twitter"></i>
                      </button>
                    </div>
                    <br />
                    <div class="text-center">
                      <p>
                        Not a member? <a href="/register">Sign Up</a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Section: Design Block --> */}
    </>
  );
}

import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import '../index.css';
import { Col, Row, Form } from 'react-bootstrap';
import { MDBCol } from 'mdb-react-ui-kit';

export default function SignUp(props) {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [mobile_number, setMobileNumber] = useState('');
  const [profile_pic, setProfilepic] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [file, setFile] = useState(null);

  const userData = {
    first_name,
    last_name,
    mobile_number,
    profile_pic,
    email,
    password,
  };

  async function submitForm(e) {
    e.preventDefault();
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      userData.profile_pic = filename;
      try {
        await axios.post('http://localhost:5000/api/upload', data);
      } catch (err) {
        alert(err);
      }
    }
    if (
      first_name.length === 0 ||
      last_name.length === 0 ||
      mobile_number.length === 0 ||
      email.length === 0 ||
      password.length === 0
    ) {
      swal(' Fields Cannot empty !', 'Please enter all data !', 'error');
    } else {
      console.log(userData);
      axios
        .post('http://localhost:5000/api/UserAuth/register', userData)
        .then(function (response) {
          console.log(response);
          setFirstName('');
          setLastName('');
          setMobileNumber('');
          setEmail('');
          setPassword('');
          setProfilepic('');
          swal({
            text: 'Successfully Added',
            icon: 'success',
            button: 'Okay!',
          });
          window.location.replace('/login');
        })
        .catch(function (error) {
          console.log(error);
          alert('not added');
        });
    }
  }

  return (
    <div>
      <section class="bg-light bg-gradient">
        <div
          class="p-5 bg-image"
          style={{
            backgroundImage:
              "url('https://thumbs.dreamstime.com/b/medical-coverage-insurance-concept-hands-doctor-covering-symbols-icons-blue-background-copy-space-web-banner-template-152592412.jpg')",
            height: '300px',
          }}
        ></div>

        <div className="row d-flex justify-content-center ">
          <div
            class="col-md-6 card mx-4 mx-md-5 shadow-5-strong mb-5"
            style={{
              marginTop: '-100px',
              background: ' hsla(0, 0%, 100%, 0.8)',
              backdropFilter: 'blur(30px)',
            }}
          >
            <div class="card-body py-5 px-md-5 ">
              <div class="row d-flex justify-content-center">
                <h2 class="fw-bold mb-5 text-center">Create Your Account</h2>

                <form onSubmit={submitForm}>
                  <div className="row justify-content-center">
                    <Col sm={3}>
                      <fieldset>
                        <Form.Group className="p-2 bd-highlight d-flex flex-column justify-content-center">
                          <MDBCol className="mb-4">
                            {file && (
                              <img
                                className="img-fluid rounded"
                                src={URL.createObjectURL(file)}
                                alt=""
                              />
                            )}
                          </MDBCol>
                        </Form.Group>
                      </fieldset>
                    </Col>
                  </div>

                  <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm="3">
                      Select Cloth Image
                    </Form.Label>
                    <Col sm="7">
                      <Form.Control
                        type="file"
                        id="fileInput"
                        onChange={(e) => setFile(e.target.files[0])}
                        required
                      />
                    </Col>
                  </Form.Group>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example3">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="form3Example3"
                      class="form-control"
                      value={first_name}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example3">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="form3Example3"
                      class="form-control"
                      value={last_name}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example3">
                      Mobile Number
                    </label>
                    <input
                      type="text-area"
                      id="form3Example3"
                      class="form-control"
                      value={mobile_number}
                      onChange={(e) => {
                        setMobileNumber(e.target.value);
                      }}
                    />
                  </div>

                  <br />
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example3">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="form3Example3"
                      class="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example4">
                      Password
                    </label>
                    <input
                      type="password"
                      id="form3Example4"
                      class="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div class="text-center">
                    <button
                      type="submit"
                      class="btn btn-primary btn-block mb-4 w-50"
                    >
                      Sign up
                    </button>
                  </div>

                  <div class="text-center">
                    <p>or sign up with:</p>
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
                      Already a member? <a href="/login">Login</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

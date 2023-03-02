import React, { useEffect } from 'react';
import { useState } from 'react';
import './UserProfile.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function UserProfile() {
  const PF = 'http://localhost:5000/api/profile_pic/';

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
  };

  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile_number, setMobile] = useState('');
  const [profile_pic, setProfile] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    setFirstName(user?.first_name);
    setLastName(user?.last_name);
    setEmail(user?.email);
    setMobile(user?.mobile_number);
    setProfile(user?.profile_pic);
  }, []);

  return (
    <div className="profile">
      <Header />
      <div className="container d-flex justify-content-center">
        <div className="card-user p-3 py-4">
          <div className="text-center">
            <img
              src={PF + profile_pic}
              width="200"
              className="rounded-circle"
            />
            <br />
            <h5 className="text-dark mt-2">
              {first_name} {last_name}
            </h5>{' '}
            <h5 className="text-dark mt-2">{email}</h5>
            <h5 className="text-dark mt-2">{mobile_number}</h5>
            <div className="social-buttons mt-5">
              <button className="neo-button">
                <i className="fab fa-facebook"></i>{' '}
              </button>
              <button className="neo-button">
                <i className="fab fa-whatsapp"></i>
              </button>
              <button className="neo-button">
                <i className="fab fa-google"></i>{' '}
              </button>
              <button className="neo-button">
                <i className="fab fa-twitter"></i>{' '}
              </button>
            </div>
            <div className="profile mt-5">
              <button className="profile_button px-5">Edit profile</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

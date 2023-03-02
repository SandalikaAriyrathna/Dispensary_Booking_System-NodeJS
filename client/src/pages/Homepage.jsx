import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

import '../App.css';

export default function Home() {
  return (
    <div>
      <Header />
      <div
        class="p-5 bg-image"
        style={{
          backgroundImage:
            "url('https://thumbs.dreamstime.com/b/medical-coverage-insurance-concept-hands-doctor-covering-symbols-icons-blue-background-copy-space-web-banner-template-152592412.jpg')",
          height: '800px',
        }}
      ></div>

      <Footer />
    </div>
  );
}

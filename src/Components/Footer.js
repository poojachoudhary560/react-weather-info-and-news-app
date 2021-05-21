import React from 'react';
import '../App.css';

const Footer = () => (
  <>
    <div style={{ marginTop: '20px' }}>
      <div style={{ backgroundColor: '#a1a1a1', height: '3px' }}></div>
      <div
        className='titles bg-info text-white text-center'
        style={{ paddingTop: '4em', paddingBottom: '3em' }}
      >
        <p>
          Website Made by{' '}
          <span style={{ fontWeight: '700', fontSize: '18px' }}>
            Pooja Choudhary
          </span>
        </p>
      </div>
    </div>
  </>
);

export default Footer;

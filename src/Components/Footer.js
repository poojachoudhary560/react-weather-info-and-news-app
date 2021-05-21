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
    <img rel="shortcut icon" src={process.env.PUBLIC_URL + '/pclogo1.png'}
    style={{height: '50px'}}
   />{'  '}{' '}

          Made by{' '}
          <span style={{ fontWeight: '700', fontSize: '18px' }}>
            Pooja Choudhary
          </span>
        </p>
      </div>
    </div>
  </>
);

export default Footer;

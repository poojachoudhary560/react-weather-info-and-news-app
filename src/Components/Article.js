import React from 'react';
const Article = (props) => (
  <div className='card'>
    <img className='card-img-top' src={props.image} />
    <div className='card-body'>
      <h5
        className='card-title'
        style={{ height: '2.5em', overflow: 'hidden' }}
      >
        {props.title} ...
      </h5>
      <p className='card-text' style={{ height: '6em', overflow: 'hidden' }}>
        {props.abstract}
      </p>
      <p className='card-text' style={{ height: '3em' }}>
        {props.author}
      </p>
    </div>
  </div>
);
export default Article;

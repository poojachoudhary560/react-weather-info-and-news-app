import React from 'react';
const Article = (props) => (
  <div className="card">
    <img className="card-img-top" src={props.image} />
    <div className="card-body">
      <h5 className="card-title" >
        {props.title}
      </h5>
      <p className="card-text">
        {props.abstract}
      </p>
      <p>
        {props.author}
      </p>
    </div>
  </div>
);
export default Article;

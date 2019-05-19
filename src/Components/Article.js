import React from 'react';
const Article = (props) => (
  <div className="card">
    <img className="card-img-top" src={props.image} />
    <div className="card-body">
      <p className="card-text">
        {props.title}
      </p>
      <p>
        {props.author}
      </p>
    </div>
  </div>
);
export default Article;

import React from "react";
import "./article.scss";

const Article = (props) => {
  const { abstract, author, image, title } = props;
  return (
    <div className="card">
      <img className="card-img-top" src={image} alt={title} />
      <div className="card-body">
        <h5 className="card-title article__title">{title} ...</h5>
        <p className="card-text article__content">{abstract}</p>
        <p className="card-text article__author">{author}</p>
      </div>
    </div>
  );
};
export default Article;

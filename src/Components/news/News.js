import React, { Fragment } from "react";
import Article from "Components/article/Article";
import "./news.scss";

function News(props) {
  return (
    <div className="row">
      {props.articles.map((article) => {
        return (
          <Fragment key={article._id}>
            {article.multimedia.length > 0 ? (
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 news__multimedia">
                <Article
                  key={article._id}
                  image={
                    "https://static01.nyt.com/" + article.multimedia[0].url
                  }
                  author={article.byline.original}
                  title={
                    article.headline.print_headline
                      ? article.headline.print_headline
                      : article.headline.main
                  }
                  abstract={article.abstract}
                />
              </div>
            ) : (
              ""
            )}
          </Fragment>
        );
      })}
    </div>
  );
}

export default News;

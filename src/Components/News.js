import React, { Component } from 'react';
import Article from './Article';
class News extends Component{

  render(){
    const { articles } = this.props;
    return(
      <div className="row">
        {



          this.props.articles.map((article) => {
            console.log(article);
            // if(!article.urlToImage || !article.author) return;
            return (
              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <div className="card-group">
                  <Article
                  key={article._id}

                  author={article.byline.original}
                  title={article.abstract}/>
                </div>

              </div>
            );
          })
        }

      </div>
    );
  }
}


export default News;

import React, { Component } from 'react';
import Article from './Article';
class News extends Component{

  render(){
    const { articles } = this.props;
    return(
      <div className="row">
        {

          

          this.props.articles
          .slice(0, 10)
          .map((article) => {
            console.log(article);
            if(!article.urlToImage || !article.author) return;
            return (
              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <div className="card-group">
                  <Article key={article.author} image={article.urlToImage} author={article.author} title={article.title}/>
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

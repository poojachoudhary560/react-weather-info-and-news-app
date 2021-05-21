import React, { Component } from 'react';
import Article from './Article';
class News extends Component {
  render() {
    return (
      <div className='row'>
        {this.props.articles.map((article) => {
          return (
            <>
              {article.multimedia.length > 0 ? (
                <div
                  className='col-xs-12 col-sm-6 col-md-6 col-lg-4'
                  style={{ marginBottom: '2em' }}
                >
                  <Article
                    key={article._id}
                    image={
                      'https://static01.nyt.com/' + article.multimedia[0].url
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
                ''
              )}
            </>
          );
        })}
      </div>
    );
  }
}

export default News;

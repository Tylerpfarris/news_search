import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({ articles }) => {
  return (
    <ul aria-label='article list'>
      {articles.map(({source, author,title, description, url, image, publishedAt, content}) => (
        <li key={`${author}-${title}-${publishedAt}`}>
          <Article
            source={source}
            author={author}
            title={title}
            description={description}
            url={url}
            image={image}
            publishedAt={publishedAt}
            content={content}
          />
        </li>
      ))}
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      source: PropTypes.string,
      author: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string,
      image: PropTypes.string,
      publishedAt: PropTypes.string,
      content: PropTypes.string,
    })
  ).isRequired,
};

export default ArticleList;

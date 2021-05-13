import React from 'react'
import PropTypes from 'prop-types'

const Article = ({source, author, title, description, url, image, publishedAt, content}) => {
    return (
        <figure>
            <h2><a href={url}>{title}</a></h2>
            <h4>By: {author}</h4>
            <img src={image} alt={description} />
            <h3>{source}</h3>
            <h6>{publishedAt}</h6>
            <figcaption>{description}</figcaption>
       </figure>
    )
}

Article.propTypes = {
    source: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.string,
    publishedAt: PropTypes.string,
    content: PropTypes.string,
}

export default Article

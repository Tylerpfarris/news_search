// import dotenv from 'dotenv';
// dotenv.config();


const mungeResponse = (obj) => {
    return obj.map(({ source, author, title, description, url, urlToImage, publishedAt, content }) => ({
        source: source.name,
        author: author,
        title: title,
        description: description,
        url: url,
        image: urlToImage,
        publishedAt: publishedAt,
        content: content
    }));
}


export const fetchNewsArticles = async () => {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`);
    const { articles } = await res.json();
    
   return mungeResponse(articles);

}

export const fetchNewsBySearch = async (query) => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.NEWS_API_KEY}`);
    const { articles } = await res.json();
    
    return mungeResponse(articles);
}
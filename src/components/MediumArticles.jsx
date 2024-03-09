import React, { useState, useEffect } from 'react';

const MediumArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchMediumArticles();
  }, []);

  const fetchMediumArticles = async () => {
    try {
      const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@pavithrank02');
      if (response.ok) {
        const data = await response.json();
        setArticles(data.items);
      } else {
        console.error('Failed to fetch Medium articles');
      }
    } catch (error) {
      console.error('Error fetching Medium articles:', error);
    }
  };

  return (
    <div className="medium-articles">
      <h2 className="articles-header">Medium Articles</h2>
      <div className="article-list">
        {articles.map((article, index) => (
          <div className="article" key={index}>
            <h3 className="article-title">{article.title}</h3>
            <p className="article-date">{new Date(article.pubDate).toLocaleDateString()}</p>
            {/* <p className="article-summary">{article.description}</p> */}
            <a className="read-article-btn" href={article.link} target="_blank" rel="noopener noreferrer">Read Article</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediumArticles;

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const MediumArticles = () => {
  const [articles, setArticles] = useState([]);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('show');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };
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
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className="section">
      <div className="medium-articles">
        <h2 className="articles-header">Medium Articles</h2>
        <div className="article-list">
          {articles.map((article, index) => (
            <div className="article" key={index}>
              <h3 className="article-title">{article.title}</h3>
              <p className="article-date">{new Date(article.pubDate).toLocaleDateString()}</p>
              <a className="read-article-btn" href={article.link} target="_blank" rel="noopener noreferrer">Read Article</a>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MediumArticles;

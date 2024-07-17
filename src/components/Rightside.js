import React, { useState, useEffect } from 'react';

const Rightside = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Adjust the category to something more general or specific to your needs
        const response = await fetch('https://newsapi.org/v2/everything?q=safety+theft+lost+found&language=en&apiKey=4422030c2710474aa36d50f2c0618904');
        const data = await response.json();
        // Manually filter articles here if necessary
        setArticles(data.articles.slice(0, 5)); // Limit to 5 articles for brevity
      } catch (error) {
        console.error("Failed to fetch news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="container-fluid" >
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card text-center my-3">
            <div className="card-body">
              <h5 className="card-title">Safety &amp; Security News</h5>
              <div className="card-text">
              {articles.map((article, index) => (
  <div key={index} className="my-3">
    <a href={article.url} target="_blank" rel="noopener noreferrer">
      <img src={article.urlToImage} alt={article.title} className="img-fluid mb-2" style={{ maxWidth: '100%', maxHeight: '200px' }} />
      <h6 className="card-subtitle mb-2 text-muted">{article.title}</h6>
    </a>
  </div>
))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightside;
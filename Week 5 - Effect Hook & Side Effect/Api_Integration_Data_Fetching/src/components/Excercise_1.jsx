import { useState, useEffect } from "react";


function NewsAggregator() {
    const[articles, setArticles] = useState([]);

    useEffect(() => {
        async function fetchNews() {
            const res = await fetch ("https://newsapi.org/v2/top-headlines?country=us&apiKey=57365b8585a347c392c0ba55bc46b904")
            const data = await res.json();
            setArticles(data.articles);
        }
        fetchNews();
    }, []);

    return (
        <div>
            <h2>Latest News</h2>
            <ul>
                {articles.map((articles, index) => (
                    <li key={index}>{articles.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default NewsAggregator;
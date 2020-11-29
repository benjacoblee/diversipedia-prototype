import React, { useState, useEffect } from "react";
import Item from "./Item";
import dummyArticles from "./dummy.json";

const Search = ({ history }) => {
    const [data, setData] = useState("");
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const searchParams = history.location.search.split("=")[1];

        const filteredArticles = dummyArticles.filter((articles) =>
            articles.tags.includes(searchParams)
        );
        setArticles(() => [...filteredArticles]);
    }, [history.location.search]);

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/search?q=${data}`);
    };

    const handleChange = (e) => {
        setData(() => e.target.value);
    };

    return (
        <div className="container p-14">
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    className="border-b-2 border-gray-200 text-5xl text-gray-600 outline-none"
                    placeholder="Search Diversipedia"
                    type="text"
                />
            </form>

            {articles.length > 0 ? (
                <div className="mt-5 font-bold text-xl mb-20">Stories</div>
            ) : null}

            {articles.map((article) => (
                <Item key={article.id} article={article} />
            ))}
        </div>
    );
};

export default Search;

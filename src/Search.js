import React, { useState, useEffect } from "react";
import Item from "./Item";
import dummyArticles from "./dummy.json";

const Search = ({ history }) => {
    const [data, setData] = useState("");
    const [articles, setArticles] = useState([]);
    const searchParams = history.location.search.split("=")[1];
    const tagParams = history.location.pathname.split("/")[
        history.location.pathname.split("/").length - 1
    ];
    const isSearch = history.location.pathname === "/search";

    useEffect(() => {
        if (searchParams) {
            const filteredArticles = dummyArticles.filter((articles) =>
                articles.tags.includes(searchParams)
            );
            setArticles(() => [...filteredArticles]);
        } else {
            const filteredArticles = dummyArticles.filter((articles) =>
                articles.tags.includes(tagParams)
            );
            setArticles(() => [...filteredArticles]);
        }
    }, [history.location.search]);

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/search?q=${data}`);
    };

    const handleChange = (e) => {
        setData(() => e.target.value);
    };

    const displayForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    className="border-b-2 border-gray-200 text-5xl text-gray-600 outline-none"
                    placeholder="Search Diversipedia"
                    type="text"
                />
            </form>
        );
    };

    const displayTaggedIn = () => {
        return (
            <div className="mt-5 font-light text-xl mb-20 tracking-wide">
                TAGGED IN{" "}
                <span className="font-light font-semibold text-2xl">
                    {tagParams.replace(/^\w/, (c) => c.toUpperCase())}
                </span>
            </div>
        );
    };

    return (
        <div className="container p-14">
            {isSearch ? displayForm() : displayTaggedIn()}
            {articles.length > 0 && isSearch ? (
                <div className="mt-5 font-bold text-xl mb-20">Stories</div>
            ) : null}

            {articles.map((article) => (
                <Item key={article.id} article={article} history={history} />
            ))}
        </div>
    );
};

export default Search;

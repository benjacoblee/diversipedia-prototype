import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegHandPeace } from "react-icons/fa";
import dummyArticles from "./dummy.json";

const Search = ({ history }) => {
    const [data, setData] = useState("");
    const [articles, setArticles] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/search?q=${data}`);
        const searchParams = history.location.search.split("=")[1];

        const filteredArticles = dummyArticles.filter((articles) =>
            articles.tags.includes(searchParams)
        );
        setArticles(() => [...filteredArticles]);
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

            {articles.map((article) => {
                const {
                    id,
                    author,
                    title,
                    body,
                    timeToRead,
                    date,
                    likes
                } = article;
                return (
                    <div className="border-b-2 border-gray-200 mb-5">
                        <div className="mb-5">
                            <p className="text-green-500 text-xl font-semibold">
                                {author}
                            </p>
                            <p className="text-gray-500 font-medium">
                                {date} - {timeToRead}
                            </p>
                        </div>

                        <div className="mb-5">
                            <p className="text-3xl text-gray-800 font-bold">
                                {title}
                            </p>
                        </div>
                        <div>
                            <p className="text-gray-800">
                                {body.substring(0, 150)}...
                            </p>
                        </div>
                        <div className="my-5 text-gray-400">
                            <Link to={`/articles/${id}`}>Read more...</Link>
                        </div>
                        <div className="mb-5 flex text-gray-500">
                            <FaRegHandPeace className="text-xl mr-2" />
                            {""}
                            <span> {likes}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Search;

import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import dummyArticles from "./dummy.json";
const featured = dummyArticles[0];

const Home = () => {
    const renderArticles = (articles) => {
        return articles.map((article) => {
            if (article.id !== featured.id) {
                return (
                    <div className="flex justify-between mb-5">
                        <div className="w-2/3">
                            <div className="mb-2 text-xs font-semibold">
                                {article.author}
                            </div>
                            <div className="mb-2 font-semibold">
                                <Link to={`/articles/${article.id}`}>
                                    {article.title}
                                </Link>
                            </div>
                            <div className="text-gray-500 text-xs">
                                {article.date} - {article.timeToRead}
                            </div>
                        </div>
                        <div>
                            {" "}
                            <img
                                className="mb-5"
                                src="https://source.unsplash.com/100x100/?peace,empathy"
                                alt=""
                            />
                        </div>
                    </div>
                );
            }
        });
    };

    const renderFeatured = () => {
        return (
            <Fragment>
                <img
                    className="mb-5"
                    src="https://source.unsplash.com/450x350/?peace,empathy"
                    alt=""
                />
                <div className="w-4/5">
                    <div className="mb-5 text-xs">{featured.author}</div>
                    <div className="mb-5 text-2xl font-bold text-gray-900">
                        {featured.title}
                    </div>
                    <div className="article mb-5">
                        {featured.body.substring(0, 150)}...
                    </div>
                    <div className="text-gray-500 text-xs">
                        <Link to={`/articles/${featured.id}`}>
                            Read more - {featured.timeToRead}
                        </Link>
                    </div>
                </div>
            </Fragment>
        );
    };

    return (
        <Fragment>
            <div className="flex border-b-2 border-gray-200">
                <div className="w-1/2 mr-5 mb-5">{renderFeatured()}</div>
                <div className="w-1/2 flex flex-col">
                    {renderArticles(dummyArticles)}
                </div>
            </div>
        </Fragment>
    );
};

export default Home;

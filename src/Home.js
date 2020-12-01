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
                            <div className="mb-2 font-bold text-gray-900 text-sm lg:text-base">
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
            <div>
                <img
                    className="mb-5"
                    src="https://source.unsplash.com/450x350/?peace,empathy"
                    alt=""
                />
                <div className="w-full lg:w-4/5">
                    <div className="mb-5 text-xs font-semibold">
                        {featured.author}
                    </div>
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
            </div>
        );
    };

    return (
        <Fragment>
            <div className="flex flex-col lg:flex-row border-b-2 border-gray-200">
                <div className="w-full lg:w-1/2 mr-5 mb-5 block">
                    {renderFeatured()}
                </div>

                <div className="mb-5 lg:hidden font-bold py-2 border-b-2">
                    Stories
                </div>

                <div className="w-full lg:w-1/2 flex flex-col">
                    {renderArticles(dummyArticles)}
                </div>
            </div>
            <div class="fixed z-50 text-xs font-bold text-black p-2">
                <span class="sm:hidden rounded px-1 bg-yellow-400 p-1">XS</span>
                <span class="hidden sm:inline-block md:hidden rounded px-1 bg-yellow-400">
                    SM
                </span>
                <span class="hidden sm:hidden md:inline-block lg:hidden rounded px-1 bg-yellow-400">
                    MD
                </span>
                <span class="hidden lg:inline-block xl:hidden rounded px-1 bg-yellow-400">
                    LG
                </span>
                <span class="hidden xl:inline-block rounded px-1 bg-yellow-400">
                    XL
                </span>
            </div>
        </Fragment>
    );
};

export default Home;

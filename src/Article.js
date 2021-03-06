import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import {
    FaRegShareSquare,
    FaRegBookmark,
    FaRegHandPeace,
    FaRegComment
} from "react-icons/fa";

import dummyArticles from "./dummy.json";

const Article = ({ match }) => {
    useEffect(() => window.scrollTo(0, 0));

    const { id: articleId } = match.params;

    const article = dummyArticles.find(
        (article) => article.id === Number(articleId)
    );

    const {
        author,
        title,
        body,
        timeToRead,
        date,
        likes,
        comments,
        tags
    } = article;

    return (
        <Fragment>
            <div className="text-3xl article lg:text-4xl lg:font-bold text-gray-800 mb-5 lg:mb-10">
                {title}
            </div>
            <div className="flex mb-5">
                <FaRegShareSquare className="text-2xl mr-5 text-gray-500" />
                <FaRegBookmark className="text-2xl mr-5 text-gray-500" />
            </div>
            <div className="mb-5">
                <span className="text-green-500 text-sm block lg:inline lg:text-xl font-base  lg:font-semibold">
                    {author}
                </span>
                <span className="lg:ml-3 text-gray-500 text-sm lg:font-medium">
                    {date} - {timeToRead}
                </span>
            </div>
            <div className="mb-5 text-base leading-relaxed text-lg lg:text-xl article text-gray-800">
                <p>
                    {body.split("\n").map((value, index) => {
                        return (
                            <span key={index}>
                                {value}
                                <br />
                                <br />
                            </span>
                        );
                    })}
                </p>
            </div>
            <div className="mb-5 flex text-gray-500">
                <div className="flex mr-10">
                    <FaRegHandPeace className="text-xl mr-1" />
                    {""}
                    <span>{likes}</span>
                </div>
                <div className="flex">
                    <FaRegComment className="text-xl mr-1" />
                    {""}
                    <span>{comments}</span>
                </div>
            </div>
            <div className="mb-5 flex text-gray-500">
                <div>
                    {tags.map((tag) => {
                        return (
                            <span
                                key={tag}
                                className="rounded-md inline-block font-light bg-gray-200 p-2 mr-5 mb-5"
                            >
                                <Link to={`/tagged/${tag}`}>{tag}</Link>
                            </span>
                        );
                    })}
                </div>
            </div>
        </Fragment>
    );
};

export default Article;

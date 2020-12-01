import React, { useReducer } from "react";
import { Link } from "react-router-dom";
import { FaRegHandPeace } from "react-icons/fa";

const Item = ({ article }) => {
    const { id, author, title, body, timeToRead, date, likes } = article;

    return (
        <div className="border-b-2 border-gray-200 mb-5">
            <div className="mb-5">
                <p className="text-green-500 text-base lg:text-xl font-semibold">
                    {author}
                </p>
                <p className="text-gray-500 font-medium">
                    {date} - {timeToRead}
                </p>
            </div>

            <div className="mb-5">
                <p className="text-2xl lg:text-3xl text-gray-800 font-bold">
                    {title}
                </p>
            </div>
            <div className="mb-5">
                <img
                    src="https://source.unsplash.com/600x180/?peace,empathy"
                    alt=""
                />
            </div>
            <div>
                <p className="text-gray-800 article">
                    {body.substring(0, 300)}...
                </p>
            </div>
            <div className="my-5 text-gray-500">
                <Link to={`/articles/${id}`}>Read more...</Link>
            </div>
            <div className="mb-5 flex text-gray-500">
                <FaRegHandPeace className="text-xl mr-2" />
                {""}
                <span> {likes}</span>
            </div>
        </div>
    );
};

export default Item;

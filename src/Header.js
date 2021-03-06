import React from "react";
// import { GoSearch, GoBell } from "react-icons/go";
import { Link } from "react-router-dom";
import { BsBell, BsSearch } from "react-icons/bs";

const Header = () => {
    return (
        <nav className="w-full py-4 lg:py-6 bg-gray-100 rounded-lg shadow-xl">
            <div className="flex flex-row justify-between items-center">
                <div className="ml-6 pt-1">
                    <Link to="/">
                        <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                            Diversipedia
                        </h1>
                    </Link>
                    <p className="text-base text-gray-700 leading-normal">
                        Bringing people together
                    </p>
                </div>
                <div className="flex items-center">
                    <Link to="/search">
                        <BsSearch className="text-2xl mr-5 text-gray-700" />
                    </Link>
                    <BsBell className="text-2xl mr-5 text-gray-700 hidden lg:block" />
                    <img
                        className="w-12 hidden lg:block"
                        src="https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png"
                        alt=""
                    />
                </div>
            </div>
        </nav>
    );
};

export default Header;

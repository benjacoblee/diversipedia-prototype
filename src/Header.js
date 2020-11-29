import React from "react";
// import { GoSearch, GoBell } from "react-icons/go";
import { BsBell, BsSearch } from "react-icons/bs";

const Header = () => {
    return (
        <nav className="w-full p-6 bg-gray-100  rounded-lg shadow-xl">
            <div className="flex flex-row justify-between items-center">
                <div className="ml-6 pt-1">
                    <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                        Diversipedia
                    </h1>
                    <p className="text-base text-gray-700 leading-normal">
                        Building people together
                    </p>
                </div>
                <div className="flex items-center">
                    <BsSearch className="text-2xl mr-5 text-gray-700" />
                    <BsBell className="text-2xl mr-5 text-gray-700" />
                    <img
                        className="w-12"
                        src="https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png"
                        alt=""
                    />
                </div>
            </div>
        </nav>
    );
};

export default Header;

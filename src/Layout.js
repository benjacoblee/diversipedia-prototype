import { Fragment } from "react";
import Header from "./Header";

const Layout = (props) => {
    return (
        <Fragment>
            <Header />
            <div className="container p-4 w-full lg:p-14 centered">
                {props.children}
            </div>
        </Fragment>
    );
};

export default Layout;

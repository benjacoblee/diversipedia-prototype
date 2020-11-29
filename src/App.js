import { BrowserRouter as Router, Route } from "react-router-dom";
import "./tailwind.output.css";
import Header from "./Header";
import Search from "./Search";
import Article from "./Article";

function App() {
    return (
        <Router>
            <Route path="/" component={Header} />
            <Route path="/search" component={Search} />
            {<Route path="/articles/:id" component={Article} />}
        </Router>
    );
}

export default App;

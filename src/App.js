import { BrowserRouter as Router, Route } from "react-router-dom";
import "./tailwind.output.css";
import "./App.css";
import Home from "./Home";
import Search from "./Search";
import Article from "./Article";
import Layout from "./Layout";

function App() {
    return (
        <Router>
            <Layout>
                <Route exact path="/" component={Home} />
                <Route path="/search" component={Search} />
                <Route path="/tagged" component={Search} />
                <Route path="/articles/:id" component={Article} />
            </Layout>
        </Router>
    );
}

export default App;

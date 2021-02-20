import "./App.css";
import Heading from "./Components/Heading/Heading";
import Navbar from "./Components/Navbar";
import Saved from "./Pages/Saved";
import Search from "./Pages/Search";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Heading />
      <Router>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </Router>
    </div>
  );
}

export default App;

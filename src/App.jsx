// import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/partial/About";

// import { ErrorPage } from "./pages/ErrorPage";
function App() {
  return (
    <Home />
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/about" element={<About />} />
    //   {/* Add routes for other pages */}
    // </Routes>
  );
  // <Router>
  //   <div>
  //     <Switch>
  //       <Route path="/" exact component={Home} />
  //       {/* Add routes for other pages */}
  //     </Switch>
  //   </div>
  // </Router>
}

export default App;

//App.js from Geovane2

import React from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Articles from "./pages/Articles";
import Maps from "./pages/Maps"

const App = () => (
  <Router>
  <div>
    <Route exact path="/" component={Articles} />
    <Route exact path="/articles" component={Articles} />
    <Route exact path="/articles/:id" component={Articles} />
    <Route exact path="/maps" component={Maps} />
    {/* <Articles /> */}
  </div>
  </Router>
);


export default App;

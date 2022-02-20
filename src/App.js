import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route path = "/login">
          <Login/>
        </Route>
        <Route path = "/register">
          <Register/>
        </Route>
        <Route path = "/products">
          <ProductList/>
        </Route>
        <Route path = "/">
          <Home/>
        </Route>
      </Switch>
    </Router>

  );
};

export default App;
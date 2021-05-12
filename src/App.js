import "./App.css";
import { connect } from "react-redux";
import AddPage from "./pages/AddPage";
import HomePages from "./pages/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPages from "./pages/LoginPages";


function App() {
  return (
    <Router>
      <Route path="/" exact component={HomePages}></Route>
      <Route path="/add" component={AddPage}></Route>
      <Route path="/login" component={LoginPages}></Route>
    </Router>
  );
}

export default connect(null, null)(App);

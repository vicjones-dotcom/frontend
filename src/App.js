import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./containers/Routes/Routes";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <Routes />
      </Router>
    </div>
  );
}

export default App;

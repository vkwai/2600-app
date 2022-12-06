import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Documentation from "./pages/Documentation";
import Sources from "./pages/Sources";
import Admin from "./pages/Admin";
import Edit from "./pages/Edit";
import EventPage from "./pages/EventPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Events" component={Events} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Admin" component={Admin} />
        <Route exact path="/Documentation" component={Documentation} />
        <Route exact path="/Sources" component={Sources} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/events/:id" component={EventPage} />
        <Route component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => {
  // # The React Router <Switch> component looks through its children <Route>s and renders the first one that matches the current URL pattern
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path={["/about", "/about-us"]}>
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/reviews">
            <Reviews />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

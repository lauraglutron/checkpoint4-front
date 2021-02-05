import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Pages/Home";
import Footer from "./Footer";
import Projets from "./Pages/Projets";
import WilderBookProject from "./Pages/WilderBookProject";
import Contact from "./Pages/Contact";
import { GlobalStyle } from "./GlobalStyle";

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projets" component={Projets} />
        <Route exact path="/wilderBookProject" component={WilderBookProject} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;

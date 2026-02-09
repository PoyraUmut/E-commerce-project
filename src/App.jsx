import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import PageContent from "./layout/PageContent";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Contact from "./pages/Contact";
import TeamPage from "./pages/TeamPage";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
  return (
    <Router>
      <Header />

      <PageContent>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/product-detail" component={ProductDetailPage} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/team" component={TeamPage} />
          <Route exact path="/about" component={AboutUsPage} />
        </Switch>
      </PageContent>

      <Footer />
    </Router>
  );
}

export default App;
import './App.scss';
// ********************** adding components ****************
import Auction from './components/Auction/Auction';
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Search from "./components/Search/Search"
import Trending from "./components/Trending/Trending"
import Footer from "./components/Footer/Footer"
import Review from "./components/Review/Review"
import Sellers from "./components/Sellers/Sellers"
const App =() => {
  return (
    <div className="App">
       <Navbar />
       <Home />
       <Search />
       <Trending />
       <Sellers />
       <Auction />
       <Review />
       <Footer />
    </div>
  );
}

export default App;

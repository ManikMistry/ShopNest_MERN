import "./App.css";
import Footer from "./customer/components/Footer/Footer";
import Navigation from "./customer/components/Navigation/Navigation";
import Product from "./customer/components/Product/Product";
import HomePage from "./customer/pages/HomePage/HomePage";

function App() {
  return (
    <>
      <div>
        <Navigation />
      </div>
      <div>
        {/* <HomePage /> */}
        <Product/>
      </div>
      <Footer/>
    </>
  );
}

export default App;

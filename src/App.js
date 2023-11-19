import { BrowserRouter,Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";


function App() {
  return (
    <>
    <h2 className="text-warning">Jai Shree Ram</h2>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route  path="/" exact  element={<ProductListing/>}/>
    <Route  path="/product/:productId" element={<ProductDetails/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

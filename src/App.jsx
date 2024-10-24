import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import Product from "./pages/Product";
import Auth from './pages/Auth/Auth';
import SignIn from './pages/Auth/Sigin';
import SignUp from './pages/Auth/Signup';
import Carts from './pages/Carts'; // Make sure this component is imported
import About from "./pages/About";

function App() { 
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth parent route */}
        <Route path="/auth" element={<Auth />}>
          <Route index element={<Auth />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Carts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

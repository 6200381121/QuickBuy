import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';

import Signup from './pages/Signup';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ManFashion from './pages/ManFashion';
import WomanFashion from './pages/WomanFashion';
import Wishlist from "./Pages/Wishlist";
import Checkout from './pages/Checkout';
import Electronics from './pages/Electronics';
import Login from './pages/Login';
import ForgetPassword from './pages/ForgetPassword';
import AdminDashboard from './pages/AdminDashboard';
import ProductDetail from "./pages/Product"; // Import Product Detail page
import ViewCart from './pages/ViewCart'; // Import Cart page
import OrderList from './pages/OrderList';
import AccountPage from "./pages/AccountPage";
import AdminLogin from "./pages/Adminlogin"; // Import AdminLogin
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        

        <main style={{ padding: '1rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/man-fashion" element={<ManFashion />} />
            <Route path="/woman-fashion" element={<WomanFashion />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forget-password" element={<ForgetPassword/>} />
            <Route path="/admin" element={<AdminDashboard />} /> {/* Admin Route */}
            <Route path="/viewcart" element={<ViewCart />} /> {/* ✅ Ensure lowercase "/viewcart" */}
            <Route path="/product-detail" element={<ProductDetail />} />
            <Route path="/order-list" element={<OrderList />} />
            <Route path="/accountPage" element={<AccountPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path='/product-details' element={<ProductDetails />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

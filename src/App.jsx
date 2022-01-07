import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import PageProducts from "./pages/PageProducts";
import PageProductDetail from "./pages/PageProductDetail";
import PageCart from "./pages/PageCart";

function App() {
	return (
		<div className='App'>
			<Announcement />
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='products' element={<PageProducts />} />
					<Route path='product/:id' element={<PageProductDetail />} />
					<Route path='cart' element={<PageCart />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;

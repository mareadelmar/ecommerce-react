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
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/products' element={<PageProducts />}>
						<Route
							path='details/:id'
							element={<PageProductDetail />}
						/>
					</Route>
					<Route path='/cart' element={<PageCart />} />
					<Route path='*' element={<h1>NOT FOUND</h1>} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;

import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
	return (
		<div className='App'>
			<Announcement />
			<Navbar />
			<Home />
			<Footer />
		</div>
	);
}

export default App;

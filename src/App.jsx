import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import Home from "./pages/Home";

function App() {
	return (
		<div className='App'>
			<Announcement />
			<Navbar />
			<Home />
		</div>
	);
}

export default App;

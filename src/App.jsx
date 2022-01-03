import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";

function App() {
	return (
		<div className='App'>
			<Announcement />
			<Navbar />
			<h1>holis</h1>
		</div>
	);
}

export default App;

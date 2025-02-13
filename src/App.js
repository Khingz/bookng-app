import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import Booking from "./Pages/BookingForm/Booking";

function App() {
	return (
		<div className="app-container">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Booking />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;

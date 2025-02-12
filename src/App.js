import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/Landing/Landing";
import Navbar from "./Components/NavBar/Navbar";
import Booking from "./Pages/BookingForm/Booking";

function App() {
	return (
		<div>
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

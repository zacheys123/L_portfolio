import React from 'react';
import { APP } from './../../css/MainWrapper';
import Home from '../pages/Home';

import About from '../pages/About';
import Footer from '../pages/Footer';
import Contact from '../pages/Contact';
import Nopage from '../pages/Nopage';
import Faq from '../pages/Faq';
import Navbar from '../pages/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
import AnimatedRoutes from '../pages/AnimatedRoutes';
import './App.css';
function App() {
	return (
		<>
			<APP>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route exact path="pages/about" element={<About />} />
					<Route exact path="pages/contact" element={<Contact />} />
					<Route exact path="*" element={<Nopage />} />
					<Route exact path="pages/faq" element={<Faq />} />
				</Routes>
				<Footer />
			</APP>
		</>
	);
}

export default App;

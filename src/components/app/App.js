import React, { useState } from 'react';
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
	const [childdata, setOpennav] = useState(null);

	const Parentcallback = (childdata) => {
		setOpennav(childdata);
	};
	return (
		<>
			<APP>
				<Navbar Navcallback={Parentcallback} />
				<Routes>
					<Route path="/" element={<Home opennav={childdata} />} />
					<Route
						exact
						path="pages/about"
						element={<About opennav={childdata} />}
					/>
					<Route
						exact
						path="pages/contact"
						element={<Contact opennav={childdata} />}
					/>
					<Route exact path="*" element={<Nopage />} />
					<Route exact path="pages/faq" element={<Faq />} />
				</Routes>
				<Footer />
			</APP>
		</>
	);
}

export default App;

import React from 'react';
import Home from './Home';

import About from './About';
import Footer from './Footer';
import Contact from './Contact';
import Nopage from './Nopage';
import Faq from './Faq';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';
function AnimatedRoutes() {
	const location = useLocation();
	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Home />} />
				<Route exact path="pages/about" element={<About />} />
				<Route exact path="pages/contact" element={<Contact />} />
				<Route exact path="*" element={<Nopage />} />
				<Route exact path="pages/faq" element={<Faq />} />
			</Routes>
		</AnimatePresence>
	);
}

export default AnimatedRoutes;

import React from 'react';
import './App.css';
import NavBar from './components/sections/navbar';
import HeroSection from './components/sections/Header';
import AboutSection from './components/sections/about';
import StatsSection from './components/sections/stats';
import ServicesSection from './components/sections/services';

import Footer from './components/sections/footer';
function App() {
	return (
		<>
			<NavBar />
			<HeroSection />
			<AboutSection />
			<StatsSection />
			<ServicesSection />
			<Footer />
		</>
	);
}

export default App;

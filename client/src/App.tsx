// import React from 'react';
import './App.css';
import NavBar from './components/sections/navbar';
import HeroSection from './components/sections/Header';
import AboutSection from './components/sections/about';
import StatsSection from './components/sections/stats';
import ServicesSection from './components/sections/services';
import WhyUsSection from './components/sections/why-us';
import ContactSection from './components/sections/contact';
import Footer from './components/sections/footer';
function App() {
	return (
		<>
			<NavBar />
			<HeroSection />
			<AboutSection />
			<StatsSection />
			<ServicesSection />
			<WhyUsSection />
			<ContactSection />
			<Footer />
		</>
	);
}

export default App;

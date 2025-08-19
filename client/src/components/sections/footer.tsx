const Footer = () => {
	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const quickLinks = [
		{ label: 'Home', id: 'home' },
		{ label: 'About', id: 'about' },
		{ label: 'Services', id: 'services' },
		{ label: 'Contact', id: 'contact' },
	];

	return (
		<footer className='bg-brand-navy dark:bg-black/50 text-brand-white'>
			<div className='container mx-auto px-6 py-12'>
				<div className='grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left'>
					<div>
						<h3 className='text-xl font-bold'>WealthWise</h3>
						<p className='mt-2 text-sm opacity-70'>
							Your trusted partner in financial growth.
						</p>
					</div>

					<div>
						<h3 className='text-lg font-semibold'>Quick Links</h3>
						<ul className='mt-4 space-y-2'>
							{quickLinks.map(link => (
								<li key={link.id}>
									<button
										onClick={() => scrollToSection(link.id)}
										className='text-sm opacity-70 hover:text-brand-gold hover:opacity-100 transition-all'>
										{link.label}
									</button>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className='text-lg font-semibold'>Follow Us</h3>
						<div className='mt-4 flex justify-center gap-4 md:justify-start'>
							{/* Add social media icons here if needed */}
						</div>
					</div>
				</div>

				<div className='mt-12 border-t border-white/20 pt-8 text-center text-sm opacity-70'>
					<p>© 2025 WealthWise. All Rights Reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

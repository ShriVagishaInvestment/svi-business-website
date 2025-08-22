// const Footer = () => {
// 	const scrollToSection = (sectionId: string) => {
// 		const element = document.getElementById(sectionId);
// 		if (element) {
// 			element.scrollIntoView({ behavior: 'smooth' });
// 		}
// 	};

// 	const quickLinks = [
// 		{ label: 'Home', id: 'home' },
// 		{ label: 'About', id: 'about' },
// 		{ label: 'Services', id: 'services' },
// 		{ label: 'Contact', id: 'contact' },
// 	];

// 	return (
// 		<footer className='bg-brand-navy dark:bg-black/50 text-brand-white'>
// 			<div className='container mx-auto px-6 py-12'>
// 				<div className='grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left'>
// 					<div>
// 						<h3 className='text-xl font-bold'>WealthWise</h3>
// 						<p className='mt-2 text-sm opacity-70'>
// 							Your trusted partner in financial growth.
// 						</p>
// 					</div>

// 					<div>
// 						<h3 className='text-lg font-semibold'>Quick Links</h3>
// 						<ul className='mt-4 space-y-2'>
// 							{quickLinks.map(link => (
// 								<li key={link.id}>
// 									<button
// 										onClick={() => scrollToSection(link.id)}
// 										className='text-sm opacity-70 hover:text-brand-gold hover:opacity-100 transition-all'>
// 										{link.label}
// 									</button>
// 								</li>
// 							))}
// 						</ul>
// 					</div>

// 					<div>
// 						<h3 className='text-lg font-semibold'>Follow Us</h3>
// 						<div className='mt-4 flex justify-center gap-4 md:justify-start'>
// 							{/* Add social media icons here if needed */}
// 						</div>
// 					</div>
// 				</div>

// 				<div className='mt-12 border-t border-white/20 pt-8 text-center text-sm opacity-70'>
// 					<p>© 2025 WealthWise. All Rights Reserved.</p>
// 				</div>
// 			</div>
// 		</footer>
// 	);
// };

// export default Footer;

import {
	Phone,
	Mail,
	MapPin,
	Facebook,
	Instagram,
	Twitter,
} from 'lucide-react';

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
		{ label: 'Why us', id: 'why-us' },
		{ label: 'Contact', id: 'contact' },
	];

	const contactInfo = [
		{
			icon: Phone,
			label: 'Phone',
			value: '+1 (555) 123-4567',
			href: 'tel:+15551234567',
		},
		{
			icon: Mail,
			label: 'Email',
			value: 'info@wealthwise.com',
			href: 'mailto:info@wealthwise.com',
		},
		{
			icon: MapPin,
			label: 'Address',
			value: '123 Financial St, Business District',
			href: null,
		},
	];

	const socialLinks = [
		{
			icon: Facebook,
			label: 'Facebook',
			href: 'https://facebook.com/wealthwise',
			color: 'hover:text-blue-500',
		},
		{
			icon: Instagram,
			label: 'Instagram',
			href: 'https://instagram.com/wealthwise',
			color: 'hover:text-pink-500',
		},
		{
			icon: Twitter,
			label: 'Twitter',
			href: 'https://twitter.com/wealthwise',
			color: 'hover:text-blue-400',
		},
	];

	// Coordinates for New York Financial District (example location)
	const latitude = 40.7074;
	const longitude = -74.0113;

	return (
		<footer className='bg-brand-navy dark:bg-black/50 text-brand-white'>
			<div className='container mx-auto px-6 py-12'>
				<div className='grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left'>
					{/* Company Info */}
					<div>
						<h3 className='text-xl font-bold'>WealthWise</h3>
						<p className='mt-2 text-sm opacity-70 pb-4'>
							Your trusted partner in financial growth.
						</p>

						<ul className='space-y-2'>
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

					{/* Contact Info */}
					<div>
						<h3 className='text-lg font-semibold mb-4'>Contact Us</h3>
						<div className='space-y-3'>
							{contactInfo.map((contact, index) => {
								const IconComponent = contact.icon;
								return (
									<div
										key={index}
										className='flex items-center justify-center md:justify-start gap-2'>
										<IconComponent size={16} className='opacity-70' />
										{contact.href ? (
											<a
												href={contact.href}
												className='text-sm opacity-70 hover:text-brand-gold hover:opacity-100 transition-all'>
												{contact.value}
											</a>
										) : (
											<span className='text-sm opacity-70'>
												{contact.value}
											</span>
										)}
									</div>
								);
							})}
							{/* </div>

						<div className='justify-center md:justify-start gap-4 mb-6'> */}
							{socialLinks.map((social, index) => {
								const IconComponent = social.icon;
								return (
									<a
										key={index}
										href={social.href}
										target='_blank'
										rel='noopener noreferrer'
										className={`opacity-70 hover:opacity-100 transition-all ${social.color}`}
										aria-label={social.label}>
										<span className='flex gap-2 py-2'>
											{social.label} <IconComponent size={20} />
										</span>
									</a>
								);
							})}
						</div>
					</div>

					{/* Social Media & Map */}
					<div>
						{/* Mini Map */}
						<div className='w-full h-full rounded-lg overflow-hidden border border-white/20'>
							<iframe
								src={`https://www.openstreetmap.org/export/embed.html?bbox=${
									longitude - 0.01
								},${latitude - 0.01},${longitude + 0.01},${
									latitude + 0.01
								}&layer=mapnik&marker=${latitude},${longitude}`}
								width='100%'
								height='100%'
								style={{ border: 0 }}
								allowFullScreen
								loading='lazy'
								referrerPolicy='no-referrer-when-downgrade'
								title='Office Location'></iframe>
						</div>
					</div>
				</div>

				<div className='mt-12 border-t border-white/20 pt-8 text-center'>
					<div className='text-sm opacity-70 space-y-2'>
						<p>© 2025 WealthWise. All Rights Reserved.</p>
						<p>
							Designed & Developed by{' '}
							<span className='text-brand-gold font-medium'>
								Your Developer Name
							</span>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

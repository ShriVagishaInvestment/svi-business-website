import {
	Phone,
	Mail,
	MapPin,
	Facebook,
	Instagram,
	Twitter,
} from 'lucide-react';

export const FOOTER_COMPANY = {
	title: 'WealthWise',
	subtitle: 'Your trusted partner in financial growth.',
};

export const FOOTER_LINKS = [
	{ label: 'Home', id: 'home' },
	{ label: 'About', id: 'about' },
	{ label: 'Services', id: 'services' },
	{ label: 'Why us', id: 'why-us' },
	{ label: 'Contact', id: 'contact' },
];

export const FOOTER_CONTACT = {
	title: 'Contact Us',
	contacts: [
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
	],
};

export const FOOTER_SOCIAL = [
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

export const FOOTER_MAP = {
	latitude: 40.7074,
	longitude: -74.0113,
	get iframeSrc() {
		const { latitude, longitude } = this;
		return `https://www.openstreetmap.org/export/embed.html?bbox=${
			longitude - 0.01
		},${latitude - 0.01},${longitude + 0.01},${
			latitude + 0.01
		}&layer=mapnik&marker=${latitude},${longitude}`;
	},
};

export const FOOTER_COPYRIGHT = {
	copyright: '© 2025 WealthWise. All Rights Reserved.',
	designedBy: 'Designed & Developed by ',
	developer: 'Your Developer Name',
};
import { User, TrendingUp, Users } from 'lucide-react';

// Why Us Section Texts
export const WHY_US_SECTION_TITLE = 'Why Clients Trust Us';
export const WHY_US_SECTION_SUBTITLE =
	'Hover over each card to discover what makes us different';
export const WHY_US_REASONS = [
	{
		icon: User,
		title: 'Personalized Advice',
		description: [
			'Tailored strategies for your unique financial goals.',
		],
	},
	{
		icon: TrendingUp,
		title: 'Proven Track Record',
		description: [
			'Consistent success in helping clients achieve their goals.',
			'Trusted by hundreds of satisfied clients worldwide.',
		],
	},
	{
		icon: Users,
		title: 'Trusted by Many',
		description: [
			'A reputation built on trust and client satisfaction.',
		],
	},
	{
		icon: Phone,
		title: 'Always Available',
		description: ['Dedicated support whenever you need it.'],
	},
];
// Services Section Texts
export const SERVICES_SECTION_TITLE = 'Our Services';
export const SERVICES_SECTION_DESCRIPTION =
	'We offer a complete range of financial solutions to help you grow and secure your future.';
export const SERVICES_LIST = [
	{
		title: 'Mutual Funds',
		description:
			'Diversify your portfolio and achieve your long-term wealth goals.',
	},
	{
		title: 'NPS',
		description:
			'Plan for a secure retirement with the National Pension System.',
	},
	{
		title: 'Insurance',
		description:
			"Protect yourself and your loved ones from life's uncertainties.",
	},
	{
		title: 'Bonds',
		description:
			'Invest in fixed-income securities for stable and predictable returns.',
	},
	{
		title: 'PAN Card Services',
		description: 'Assistance with all your PAN card related needs.',
	},
	{
		title: 'Loan Against Securities',
		description:
			'Unlock the value of your investments for your liquidity needs.',
	},
];
export const NAV_LINKS = [
	{ label: 'Home', id: 'home' },
	{ label: 'About', id: 'about' },
	{ label: 'Services', id: 'services' },
	{ label: 'Why Choose Us', id: 'why-us' },
	{ label: 'Contact', id: 'contact' },
];

// Hero Section Texts
export const HERO_TITLE = 'Transform your';
export const HERO_ROTATE = ['Finances', 'Life'];
export const HERO_SUBTITLE =
	'Decades of experience helping you secure your future through personalized financial solutions.';
export const HERO_BOOK_BUTTON = 'Book a Consultation';
export const HERO_SERVICES_BUTTON = 'Explore Services';
export const HERO_IMAGE_ALT =
	'Financial advisor with charts illustration';

// About Section Texts
export const ABOUT_TITLE = 'About Us';
export const ABOUT_DESCRIPTION =
	'At WealthWise, we have a rich history of providing tailored financial guidance. Our core values revolve around integrity, client-centricity, and a commitment to long-term success.';

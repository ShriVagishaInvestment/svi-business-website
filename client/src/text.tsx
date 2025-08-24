export const CONTACT_FORM_TEXT = {
	heading: 'Contact Us',
	description:
		'Connect with us and get to know more about our services, we will contact you soon!!',
	accessKey: '12b19b40-9740-4064-b007-9c47ffcef47e',
	apiUrl: 'https://api.web3forms.com/submit',
	sending: 'Sending....',
	success: 'Form Submitted Successfully',
	button: 'Send Message',
	buttonClass:
		'w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg px-6 py-3 font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2',
	fields: [
		{
			id: 'fullname',
			label: 'Full Name',
			labelClass:
				'text-sm font-medium text-gray-700 dark:text-gray-300',
			placeholder: 'John Doe',
			type: 'text',
			name: 'user_name',
			inputClass:
				'w-full focus-ring bg-white dark:bg-black border-white dark:border-white text-white placeholder-gray-400 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300',
			required: true,
		},
		{
			id: 'email',
			label: 'Email Address',
			labelClass:
				'text-sm font-medium text-gray-700 dark:text-gray-300',
			placeholder: 'johndoe@gmail.com',
			type: 'email',
			name: 'user_email',
			inputClass:
				'w-full focus-ring bg-white dark:bg-black border-white dark:border-white text-white placeholder-gray-400 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300',
			required: true,
		},
		{
			id: 'phone',
			label: 'Phone Number',
			labelClass:
				'text-sm font-medium text-gray-700 dark:text-gray-300',
			placeholder: '(+91)-1234567890',
			type: 'tel',
			name: 'user_phone',
			inputClass:
				'w-full focus-ring bg-white dark:bg-black border-white dark:border-white text-white placeholder-gray-400 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300',
			required: false,
		},
		{
			id: 'message',
			label: 'Message',
			labelClass:
				'text-sm font-medium text-gray-700 dark:text-gray-300',
			placeholder:
				'Tell me about your project or how we can collaborate....',
			type: 'textarea',
			name: 'message',
			textareaClass:
				'flex w-full border border-white dark:border-white bg-white dark:bg-black text-black dark:text-white shadow-sm rounded-lg px-3 py-2 text-sm placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-0 focus-visible:ring-offset-gray-100 dark:focus-visible:ring-offset-gray-900 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 resize-none hover:border-blue-500 dark:hover:border-blue-500',
			required: true,
		},
	],
	renderResult: (result: string) => (
		<div
			className={`fixed top-12 transform z-50 p-3 md:p-4 rounded-lg text-center font-outfit max-w-xs md:max-w-sm mx-4 ${
				result === 'Sending....'
					? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-700'
					: result === 'Form Submitted Successfully'
					? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border border-green-200 dark:border-green-700'
					: 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-700'
			}`}>
			<div className='flex items-center justify-center gap-2'>
				{result === 'Sending....' && (
					<div className='animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 dark:border-blue-400'></div>
				)}
				{result === 'Form Submitted Successfully' && (
					<svg
						className='w-4 h-4 md:w-5 md:h-5'
						fill='currentColor'
						viewBox='0 0 20 20'>
						<path
							fillRule='evenodd'
							d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
							clipRule='evenodd'
						/>
					</svg>
				)}
				{result !== 'Sending....' &&
					result !== 'Form Submitted Successfully' && (
						<svg
							className='w-4 h-4 md:w-5 md:h-5'
							fill='currentColor'
							viewBox='0 0 20 20'>
							<path
								fillRule='evenodd'
								d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
								clipRule='evenodd'
							/>
						</svg>
					)}
				<span className='font-medium text-sm md:text-base'>
					{result}
				</span>
			</div>
		</div>
	),
};
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

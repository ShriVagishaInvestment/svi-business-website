import { Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { NAV_LINKS } from '../../text';

export default function NavBar() {
	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<header className='fixed top-0 left-1 z-50 w-full flex items-center justify-between shadow-sm border-b transition-all duration-300'>
			<div className='flex items-center gap-3 text-brand-navy dark:text-brand-white pl-6 md:pl-10'>
				<svg
					className='h-8 w-8 text-brand-navy dark:text-brand-gold'
					fill='none'
					viewBox='0 0 48 48'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z'
						fill='currentColor'
					/>
				</svg>
				<h2 className='text-xl font-bold tracking-tight'>
					WealthWise
				</h2>
			</div>

			<nav className='hidden md:flex items-center gap-8 end-4'>
				{NAV_LINKS.map(item => (
					<Button
						key={item.id}
						variant='link'
						onClick={() => scrollToSection(item.id)}
						className='text-sm font-medium text-muted-foreground hover:text-brand-gold transition-colors'>
						{item.label}
					</Button>
				))}
				<Button></Button>
			</nav>
			<Button
				variant='ghost'
				size='icon'
				className='md:hidden text-brand-navy dark:text-brand-white'>
				<Menu className='h-6 w-6' />
			</Button>

			{/* <div className='flex items-center gap-4 pr-6 md:pr-10'></div> */}
		</header>
	);
}

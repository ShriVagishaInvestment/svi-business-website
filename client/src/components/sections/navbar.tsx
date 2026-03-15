import { Menu, X } from 'lucide-react';
import { Button } from '../ui/buttons/button';
import { NAV_LINKS, COMPANY_NAME } from '../../text';
import { useState, useEffect } from 'react';

export default function NavBar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
		setIsMobileMenuOpen(false);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as HTMLElement;
			if (isMobileMenuOpen && !target.closest('header')) {
				setIsMobileMenuOpen(false);
			}
		};

		if (isMobileMenuOpen) {
			document.addEventListener('click', handleClickOutside);
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.removeEventListener('click', handleClickOutside);
			document.body.style.overflow = 'unset';
		};
	}, [isMobileMenuOpen]);

	return (
		<header className='fixed top-0 left-0 z-50 w-full backdrop-blur-xs bg-white/90 dark:bg-gray-900/90 shadow-sm border-b border-gray-200/20 dark:border-gray-800/20 transition-all duration-300'>
			<div className='flex items-center justify-between px-6 md:px-10 py-2'>
				{/* Logo */}
				<div className='flex items-center gap-2 text-brand-navy dark:text-brand-white'>
					<img
						src='/company-logo.png'
						alt='Company Logo'
						className='h-4 sm:h-8 w-12 sm:w-24 object-cover'
					/>
					<h2 className='text-xs sm:text-lg font-bold tracking-tight'>
						{COMPANY_NAME}
					</h2>
				</div>

				{/* Desktop Navigation */}
				<nav className='hidden md:flex items-center gap-2'>
					{NAV_LINKS.map(item => (
						<Button
							key={item.id}
							variant='link'
							onClick={() => scrollToSection(item.id)}
							className='text-sm font-medium text-muted-foreground transition-colors'>
							{item.label}
						</Button>
					))}
				</nav>

				{/* Mobile Menu Button */}
				<Button
					variant='ghost'
					size='icon'
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					className='md:hidden text-brand-navy dark:text-brand-white'
					aria-label='Toggle mobile menu'
					aria-expanded={isMobileMenuOpen}>
					{isMobileMenuOpen ? (
						<X className='h-6 w-6' />
					) : (
						<Menu className='h-6 w-6' />
					)}
				</Button>
			</div>

			{/* Mobile Menu Overlay — rendered first so dropdown sits on top */}
			{isMobileMenuOpen && (
				<div
					className='md:hidden fixed inset-0 bg-black/20 z-40'
					onClick={() => setIsMobileMenuOpen(false)}
				/>
			)}

			{isMobileMenuOpen && (
				<div className='md:hidden absolute top-full w-full bg-white/95 dark:bg-gray-900/95 border-b border-gray-200/20 dark:border-gray-800/20 shadow-lg z-50'>
					<nav className='flex flex-col py-4'>
						{NAV_LINKS.map(item => (
							<Button
								key={item.id}
								variant='ghost'
								onClick={() => scrollToSection(item.id)}
								className='justify-start px-6 py-3 text-left text-base font-medium text-brand-navy dark:text-brand-white hover:text-brand-gold hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors'>
								{item.label}
							</Button>
						))}
					</nav>
				</div>
			)}
		</header>
	);
}

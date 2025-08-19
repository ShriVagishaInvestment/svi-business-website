import { cn } from '@/lib/utils';
import { Button } from './buttons/button';
import { NAV_LINKS } from '@/text';

interface NavigationMenuProps {
	className?: string;
}

export function NavigationMenu({ className }: NavigationMenuProps) {
	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<nav className={cn('flex items-center gap-8', className)}>
			{NAV_LINKS.map(item => (
				<Button
					key={item.id}
					variant='link'
					onClick={() => scrollToSection(item.id)}
					className='text-sm font-medium text-muted-foreground hover:text-brand-gold transition-colors'>
					{item.label}
				</Button>
			))}
		</nav>
	);
}

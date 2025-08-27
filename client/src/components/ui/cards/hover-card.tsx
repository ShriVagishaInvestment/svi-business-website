import { useState, useEffect } from 'react';
import HoverCardInitial from './helper/hover-card-initial';
import HoverCardHovered from './helper/hover-card-hovered';

interface HoverCardProps {
	icon: React.ElementType;
	title: string;
	description: string[];
	gradient: string;
	color?: string;
}

const useMediaQuery = (query: string) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const media = window.matchMedia(query);
		if (media.matches !== matches) {
			setMatches(media.matches);
		}
		const listener = () => {
			setMatches(media.matches);
		};
		media.addEventListener('change', listener);
		return () => media.removeEventListener('change', listener);
	}, [matches, query]);

	return matches;
};

const HoverCard = ({
	icon,
	title,
	description,
	gradient,
	color,
}: HoverCardProps) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const isDesktop = useMediaQuery('(min-width: 768px)');

	const handleClick = () => {
		if (!isDesktop) {
			setIsFlipped(prev => !prev);
		}
	};

	const handleMouseEnter = () => {
		if (isDesktop) {
			setIsFlipped(true);
		}
	};

	const handleMouseLeave = () => {
		if (isDesktop) {
			setIsFlipped(false);
		}
	};

	return (
		<div
			className='relative w-full h-64 bg-white/90 dark:bg-gray-700/90 rounded-xl hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer border border-gray-200/30 dark:border-gray-600/30'
			onClick={handleClick}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			<div
				className={`absolute inset-0 transition-all duration-500 ${
					isFlipped
						? 'opacity-0 transform -translate-y-full'
						: 'opacity-100 transform translate-y-0'
				}`}>
				<HoverCardInitial
					icon={icon}
					title={title}
					gradient={gradient}
					color={color}
					isVisible={!isFlipped}
				/>
			</div>

			<div
				className={`absolute inset-0 transition-all duration-500 ${
					isFlipped
						? 'opacity-100 transform translate-y-0'
						: 'opacity-0 transform translate-y-full'
				}`}>
				<HoverCardHovered
					title={title}
					description={description}
					gradient={gradient}
					isVisible={isFlipped}
				/>
			</div>
		</div>
	);
};

export default HoverCard;

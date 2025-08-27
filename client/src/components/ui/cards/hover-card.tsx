import { useState } from 'react';
import HoverCardInitial from './helper/hover-card-initial';
import HoverCardHovered from './helper/hover-card-hovered';

interface HoverCardProps {
	icon: React.ElementType;
	title: string;
	description: string[];
	gradient: string;
	color?: string;
}

const HoverCard = ({
	icon,
	title,
	description,
	gradient,
	color,
}: HoverCardProps) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const [isHovered, setIsHovered] = useState(false);

	// Combined state for both hover and click
	const showFlippedState = isFlipped || isHovered;

	const handleClick = () => {
		setIsFlipped(!isFlipped);
	};

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return (
		<div
			className='relative w-full h-64 bg-white/90 dark:bg-gray-700/90 rounded-xl hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer border border-gray-200/30 dark:border-gray-600/30'
			onClick={handleClick}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}>
			{/* Initial state - visible when not flipped */}
			<div
				className={`absolute inset-0 transition-all duration-500 ${
					showFlippedState
						? 'opacity-0 transform translate-y-full scale-95'
						: 'opacity-100 transform translate-y-0 scale-100'
				}`}>
				<HoverCardInitial
					icon={icon}
					title={title}
					gradient={gradient}
					color={color}
					isVisible={!showFlippedState}
				/>
			</div>

			{/* Hovered/Flipped state - visible when flipped */}
			<div
				className={`absolute inset-0 transition-all duration-500 ${
					showFlippedState
						? 'opacity-100 transform translate-y-0'
						: 'opacity-0 transform translate-y-full'
				}`}>
				<HoverCardHovered
					title={title}
					description={description}
					gradient={gradient}
					isVisible={showFlippedState}
				/>
			</div>
		</div>
	);
};

export default HoverCard;

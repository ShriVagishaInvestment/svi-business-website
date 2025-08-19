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
	return (
		<div className='group relative w-full h-64 bg-white/90 dark:bg-gray-700/90 rounded-xl hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer border border-gray-200/30 dark:border-gray-600/30'>
			<HoverCardInitial
				icon={icon}
				title={title}
				gradient={gradient}
				color={color}
			/>
			<HoverCardHovered
				title={title}
				description={description}
				gradient={gradient}
			/>
		</div>
	);
};

export default HoverCard;

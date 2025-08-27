import React from 'react';
import { Aurora } from '../../Texts/aurora';

interface HoverCardHoveredProps {
	title: string;
	description: string[];
	gradient: string;
	isVisible: boolean;
}

const HoverCardHovered: React.FC<HoverCardHoveredProps> = ({
	description,
	gradient,
	isVisible,
}) => (
	<div
		className={`absolute inset-0 flex flex-col justify-center p-6 text-white transition-opacity duration-500 ${
			isVisible ? 'opacity-100' : 'opacity-0'
		}`}
		style={{ position: 'absolute' }}>
		<div
			className='absolute inset-0 w-full h-full rounded-xl pointer-events-none'
			style={{ background: gradient, opacity: 0.2, zIndex: 0 }}
		/>
		<div className='relative z-10'>
			<div className='space-y-3'>
				{description.map((point, index) => (
					<p
						key={index}
						className='text-white text-lg leading-relaxed text-center'>
						<Aurora>{point}</Aurora>
					</p>
				))}
			</div>
		</div>
	</div>
);

export default HoverCardHovered;

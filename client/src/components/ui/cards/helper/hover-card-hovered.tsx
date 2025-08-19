import React from 'react';
import { Aurora } from '../../Texts/aurora';

interface HoverCardHoveredProps {
	title: string;
	description: string[];
	gradient: string;
}

const HoverCardHovered: React.FC<HoverCardHoveredProps> = ({
	// title,
	description,
	gradient,
}) => (
	<div
		className='absolute inset-0 flex flex-col justify-center p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500'
		style={{ position: 'absolute' }}>
		<div
			className='absolute inset-0 w-full h-full rounded-xl pointer-events-none'
			style={{ background: gradient, opacity: 0.2, zIndex: 0 }}
		/>
		<div className='relative z-10'>
			{/* <h3 className='text-2xl font-bold mb-4 text-center text-white/90'>
				<Aurora>{title}</Aurora>
			</h3> */}
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

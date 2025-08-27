import React from 'react';

interface HoverCardInitialProps {
	icon: React.ElementType;
	title: string;
	gradient: string;
	color?: string;
	isVisible: boolean; // New prop to control visibility
}

const HoverCardInitial: React.FC<HoverCardInitialProps> = ({
	icon: Icon,
	title,
	gradient,
	color,
	isVisible,
}) => (
	<div
		className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-500 ${
			isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
		}`}>
		<div className='flex h-16 w-16 items-center justify-center mb-4'>
			<Icon className='h-8 w-8' style={color ? { color } : {}} />
		</div>
		<h3
			className='text-4xl font-bold text-center'
			style={{
				backgroundImage: gradient,
				WebkitBackgroundClip: 'text',
				WebkitTextFillColor: 'transparent',
				backgroundClip: 'text',
				opacity: 0.85,
			}}>
			{title}
		</h3>
	</div>
);

export default HoverCardInitial;

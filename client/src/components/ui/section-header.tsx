import { Aurora } from './Texts/aurora';
import React from 'react';

interface SectionHeaderProps {
	title: React.ReactNode;
	description: React.ReactNode;
	className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
	title,
	description,
	className = '',
}) => (
	<div
		className={`flex flex-col items-center justify-center text-center w-full ${className}`}>
		<Aurora className='text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary text-center'>
			{title}
		</Aurora>
		{Array.isArray(description) ? (
			description.map((desc, idx) => (
				<p
					key={idx}
					className='mt-8 text-lg md:text-xl lg:text-2xl text-text-secondary mx-auto leading-relaxed max-w-5xl text-center'>
					{desc}
				</p>
			))
		) : (
			<p className='mt-8 text-lg md:text-xl lg:text-2xl text-text-secondary mx-auto leading-relaxed max-w-5xl text-center'>
				{description}
			</p>
		)}
	</div>
);

import React from 'react';
import {
	WHY_US_SECTION_TITLE,
	WHY_US_SECTION_SUBTITLE,
	WHY_US_REASONS,
} from '../../text';
import HoverCard from '../ui/cards/hover-card';
import { getDarkerGradient } from '../ui/cards/helper/card-gradients';
import { SectionHeader } from '../ui/section-header';

const ICON_COLORS = [
	'#2563eb', // blue-600
	'#16a34a', // green-600
	'#eab308', // yellow-500
	'#db2777', // pink-600
	'#f97316', // orange-500
	'#7c3aed', // violet-600
	'#0ea5e9', // sky-500
	'#f43f5e', // rose-500
];

const WhyUsSection = () => {
	return (
		<section className='py-20 md:py-28' id='why-us'>
			<div className='container mx-auto px-6 text-center'>
				<SectionHeader
					title={WHY_US_SECTION_TITLE}
					description={WHY_US_SECTION_SUBTITLE}
				/>
				<div className='mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
					{WHY_US_REASONS.map(
						(
							reason: {
								icon: React.ElementType;
								title: string;
								description: string[];
							},
							index: number
						) => {
							const gradient = getDarkerGradient(index);
							const color = ICON_COLORS[index % ICON_COLORS.length];
							return (
								<HoverCard
									key={index}
									icon={reason.icon}
									title={reason.title}
									description={reason.description}
									gradient={gradient}
									color={color}
								/>
							);
						}
					)}
				</div>
			</div>
		</section>
	);
};

export default WhyUsSection;

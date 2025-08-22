// import { Check } from 'lucide-react';

import { SectionHeader } from '../ui/section-header';
import { Vortex } from '../ui/backgrounds/vortex';
import { ABOUT_TITLE, ABOUT_DESCRIPTION } from '../../text';

const AboutSection = () => {
	return (
		<Vortex rangeY={200} particleCount={100}>
			<div
				className='flex mt-10 p-20 items-center justify-center h-auto w-full'
				id='about'>
				<SectionHeader
					title={ABOUT_TITLE}
					description={ABOUT_DESCRIPTION}
					className='max-w-4xl'
				/>
			</div>
		</Vortex>
	);
};

export default AboutSection;

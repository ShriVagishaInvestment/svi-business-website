// import { Check } from 'lucide-react';

import { Aurora } from '../ui/Texts/aurora';
import { ABOUT_TITLE, ABOUT_DESCRIPTION } from '../../text';

const AboutSection = () => {
	return (
		<div
			className='flex mt-10 items-center justify-center h-auto w-full p-4'
			id='about'>
			<div className='text-center w-full max-w-7xl'>
				<Aurora className='text-5xl md:text-6xl lg:text-7xl font-extrabold text-text-primary'>
					{ABOUT_TITLE}
				</Aurora>
				<p className='flex mt-8 text-lg md:text-xl lg:text-2xl text-text-secondary mx-auto leading-relaxed'>
					{ABOUT_DESCRIPTION}
				</p>
			</div>
		</div>
	);
};

export default AboutSection;

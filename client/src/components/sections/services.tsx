import { SectionHeader } from '../ui/section-header';
import { Vortex } from '../ui/backgrounds/vortex';
import { ServicesCards } from '../ui/services-cards';
import {
	SERVICES_SECTION_TITLE,
	SERVICES_SECTION_DESCRIPTION,
	SERVICES_LIST,
} from '../../text';

const ServicesSection = () => {
	return (
		<section className='py-20 md:py-28' id='services'>
			<Vortex
				rangeY={400}
				particleCount={100}
				baseHue={120}
				className='flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full'>
				<div className='flex-row mx-auto w-full px-6 items-center justify-center'>
					<SectionHeader
						title={SERVICES_SECTION_TITLE}
						description={SERVICES_SECTION_DESCRIPTION}
					/>

					<div className='mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto'>
						<ServicesCards services={SERVICES_LIST} />
					</div>
				</div>
			</Vortex>
		</section>
	);
};

export default ServicesSection;

import { WavyBackground } from '../ui/backgrounds/wavy-background';
import { ShimmerButton } from '../ui/buttons/shimmer-button';
import { TextFlip } from '../ui/Texts/text-flip';
import ContactForm from '../ui/contact/ContactForm';
import { motion } from 'framer-motion';

import {
	HERO_TITLE,
	HERO_ROTATE,
	HERO_SUBTITLE,
	HERO_SERVICES_BUTTON,
	HERO_BOOK_BUTTON,
} from '../../text';

const Header = () => {
	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<>
			<WavyBackground
				className='flex top-[4vh] flex-col min-h-max min-w-screen items-center justify-between'
				id='home'>
				<div className='flex flex-col w-full h-full text-center lg:flex-row lg:text-left lg:items-center lg:justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex items-center justify-center flex-1 py-2 lg:py-0 lg:pr-8'>
						<div className='max-w-xl w-full'>
							<h1 className='text-black text-3xl font-black text-brand-white md:text-4xl lg:text-5xl xl:text-6xl leading-tight'>
								{HERO_TITLE}
							</h1>
							<h1 className='text-black text-3xl font-black text-brand-white md:text-4xl lg:text-5xl xl:text-6xl leading-tight'>
								<TextFlip words={HERO_ROTATE} />
							</h1>
							<p className='text-black mt-4 text-base font-light text-brand-white opacity-90 md:text-lg lg:text-xl leading-relaxed'>
								{HERO_SUBTITLE}
							</p>
							<div className='mt-8 flex flex-row sm:flex-row justify-center gap-4 lg:justify-start'>
								<ShimmerButton
									onClick={() => scrollToSection('services')}>
									{HERO_SERVICES_BUTTON}
								</ShimmerButton>
								<ShimmerButton
									onClick={() => scrollToSection('contact')}
									className='md:hidden'>
									{HERO_BOOK_BUTTON}
								</ShimmerButton>
							</div>
						</div>
					</div>

					<div className='flex items-center justify-center flex-1 lg:justify-end'>
						<motion.div className='hidden md:block relative gap-20 w-full max-w-xl m-2'>
							<ContactForm />
						</motion.div>
					</div>
				</div>
			</WavyBackground>
		</>
	);
};

export default Header;

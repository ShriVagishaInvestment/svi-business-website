import { Button } from '../ui/buttons/button';
import { WavyBackground } from '../ui/backgrounds/wavy-background';
// import RainbowButton from '../ui/buttons/rainbow-button';
import { TextFlip } from '../ui/Texts/text-flip';

import {
	HERO_TITLE,
	HERO_ROTATE,
	HERO_SUBTITLE,
	HERO_BOOK_BUTTON,
	HERO_SERVICES_BUTTON,
	HERO_IMAGE_ALT,
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
				className='flex top-[4vh] flex-col min-h-screen min-w-screen items-center justify-between '
				id='home'>
				<div className='flex flex-col w-full h-full text-center lg:flex-row lg:text-left lg:items-center lg:justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					{/* Text Content */}
					<div className='flex items-center justify-center flex-1 py-12 lg:py-0 lg:pr-8'>
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
							<div className='mt-8 flex flex-col sm:flex-row justify-center gap-4 lg:justify-start'>
								<Button
									onClick={() => scrollToSection('contact')}
									className='w-full sm:w-auto transform rounded-lg bg-brand-gold px-6 py-3 text-base font-bold text-brand-navy shadow-lg transition-all duration-200 hover:scale-105 hover:bg-brand-gold/90'>
									{HERO_BOOK_BUTTON}
								</Button>
								<Button
									onClick={() => scrollToSection('services')}
									variant='secondary'
									className='w-full sm:w-auto transform rounded-lg bg-brand-white px-6 py-3 text-base font-bold text-brand-navy shadow-lg transition-all duration-200 hover:scale-105 hover:bg-brand-white/90'>
									{HERO_SERVICES_BUTTON}
								</Button>
							</div>
						</div>
					</div>

					{/* Image Content */}
					<div className='flex items-center justify-center flex-1 lg:justify-end'>
						<img
							alt={HERO_IMAGE_ALT}
							src='https://lh3.googleusercontent.com/aida-public/AB6AXuDOKx-3ObjB9g5wcazoDPYkV2ZtBJZJ92exR9dUmP3U29lxauIaXufUbC8TqHRfLAKjxj_a9-f1zvh4B9Mgb0JB8PZg34FdrlwUvu5yfVWYx2WHAck4LG6cV9mVrFfyV2AAdkcbSeDWgeOAas4r7OJFDyOZEbS8kGSY21eC8HR9ac8pE7f0GSqPT40vmweXr1WsZkXHs8KIucDzqbQuTKV1YJ2RGEXP_b6MuxFoCrQfaoLkW82h2UsQDdjK2HWWzlRjCajRAYTvWCs'
							className='w-auto object-fill rounded-lg shadow-2xl'
						/>
					</div>
				</div>
			</WavyBackground>
		</>
	);
};

export default Header;

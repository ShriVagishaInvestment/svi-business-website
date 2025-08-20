import { BackgroundGradient } from '../ui/cards/aurora-card';
import { AnimatedGradientText } from '../ui/Texts/animated-gradient';
import { NumberTicker } from '../ui/Texts/number-ticker';

const StatsSection = () => {
	const stats = [
		{ number: 20, suffix: '+', label: 'Years Experience' },
		{ number: 1000, suffix: '+', label: 'Happy Clients' },
		{ number: 95, suffix: '%', label: 'Retention Rate' },
	];

	return (
		<section className='py-10 md:py-20'>
			<div className='container mx-auto px-6 text-center'>
				<div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
					{stats.map((stat, index) => (
						<BackgroundGradient
							className='rounded-[22px] max-w-sm p-2 sm:p-4 bg-white/80 dark:bg-zinc-900'
							key={index}
							id={index}>
							<AnimatedGradientText
								speed={2}
								className='text-5xl font-extrabold'>
								<NumberTicker value={stat.number} />
								{stat.suffix}
							</AnimatedGradientText>
							<p className='mt-2 text-lg text-text-primary'>
								{stat.label}
							</p>
						</BackgroundGradient>
					))}
				</div>
			</div>
		</section>
	);
};

export default StatsSection;

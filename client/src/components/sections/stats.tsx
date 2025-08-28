import { STATS_DATA } from '../../text';
import { BackgroundGradient } from '../ui/cards/aurora-card';
import { AnimatedGradientText } from '../ui/Texts/animated-gradient';
import { NumberTicker } from '../ui/Texts/number-ticker';

const StatsSection = () => {
	return (
		<section className='py-10 md:py-20'>
			<div className='container mx-auto px-6 text-center'>
				<div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
					{STATS_DATA.map((stat, index) => (
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

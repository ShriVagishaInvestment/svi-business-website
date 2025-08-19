import { BackgroundGradient } from '../ui/aurora-card';

const StatsSection = () => {
	const stats = [
		{ number: '20+', label: 'Years Experience' },
		{ number: '1000+', label: 'Happy Clients' },
		{ number: '95%', label: 'Retention Rate' },
	];

	return (
		<section className='py-20 md:py-28'>
			<div className='container mx-auto px-6 text-center'>
				<div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
					{stats.map((stat, index) => (
						<BackgroundGradient
							className='rounded-[22px] max-w-sm p-2 sm:p-4 bg-white/85 dark:bg-zinc-900'
							key={index}>
							<span className='text-5xl font-bold text-text-primary'>
								{stat.number}
							</span>
							<p className='mt-2 text-lg text-text-secondary'>
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

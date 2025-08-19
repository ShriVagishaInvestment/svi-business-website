import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const ServicesSection = () => {
	const services = [
		{
			title: 'Mutual Funds',
			description:
				'Diversify your portfolio and achieve your long-term wealth goals.',
		},
		{
			title: 'NPS',
			description:
				'Plan for a secure retirement with the National Pension System.',
		},
		{
			title: 'Insurance',
			description:
				"Protect yourself and your loved ones from life's uncertainties.",
		},
		{
			title: 'Bonds',
			description:
				'Invest in fixed-income securities for stable and predictable returns.',
		},
		{
			title: 'PAN Card Services',
			description: 'Assistance with all your PAN card related needs.',
		},
		{
			title: 'Loan Against Securities',
			description:
				'Unlock the value of your investments for your liquidity needs.',
		},
	];

	return (
		<section className='py-20 md:py-28' id='services'>
			<div className='container mx-auto px-6 text-center'>
				<h2 className='text-3xl font-bold text-text-primary md:text-4xl'>
					Our Services
				</h2>
				<p className='mx-auto mt-4 max-w-2xl text-lg text-text-secondary'>
					We offer a complete range of financial solutions to help you
					grow and secure your future.
				</p>

				<div className='mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
					{services.map((service, index) => (
						<Card
							key={index}
							className='transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-border bg-card text-left'>
							<CardHeader>
								<CardTitle className='text-xl font-bold text-text-primary'>
									{service.title}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-text-secondary'>
									{service.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;

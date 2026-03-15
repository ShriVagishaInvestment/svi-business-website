import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from './cards/card';
import React from 'react';

export interface Service {
	title: string;
	description: string;
}

interface ServicesCardsProps {
	services: Service[];
}

export const ServicesCards: React.FC<ServicesCardsProps> = ({
	services,
}) => (
	<>
		{services.map((service, index) => (
			<Card
				key={index}
				className='text-center border-black/20 relative hover:shadow-xl hover:scale-[1.02] transition-all duration-300'>
				<span className='pointer-events-none absolute inset-0 z-0 rounded-xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 blur-sm opacity-0 group-hover:opacity-15 transition-opacity duration-300' />
				<CardHeader>
					<CardTitle className='text-2xl text-center whitespace-normal break-words leading-tight font-bold tracking-tight bg-gradient-to-r from-[rgb(var(--brand-navy))] to-[rgb(var(--brand-gold))] bg-clip-text text-transparent'>
						{service.title}
					</CardTitle>
				</CardHeader>
				<CardContent>
					<p className='text-text-secondary text-center'>
						{service.description}
					</p>
				</CardContent>
			</Card>
		))}
	</>
);

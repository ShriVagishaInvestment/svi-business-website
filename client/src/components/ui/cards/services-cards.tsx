import { Card, CardContent, CardHeader, CardTitle } from './card';
import { TextHoverEffect } from '../Texts/text-hover-effect';
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
					<CardTitle className='text-4xl text-center whitespace-normal break-words leading-tight'>
						<TextHoverEffect text={service.title} />
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

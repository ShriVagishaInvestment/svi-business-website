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
				className='text-center border-black/20 relative'>
				<span className='pointer-events-none absolute inset-0 z-0 rounded-3xl opacity-0 group-hover:opacity-10 group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:via-blue-500 group-hover:to-purple-500 group-hover:blur-sm transition-all duration-300' />
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

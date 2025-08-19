import { cn } from '@/lib/utils';
import React from 'react';
import { motion } from 'motion/react';

export const BackgroundGradient = ({
	children,
	className,
	containerClassName,
}: {
	children?: React.ReactNode;
	className?: string;
	containerClassName?: string;
}) => {
	// Simple random palette selection
	const palettes = [
		['#00ccb1', '#7b61ff', '#ffc414', '#1ca0fb', '#141316'],
		['#ff6b6b', '#f7b801', '#6fffe9', '#355c7d', '#2a363b'],
		['#43cea2', '#185a9d', '#f7971e', '#ffd200', '#f44369'],
		['#ffb347', '#ffcc33', '#00b4d8', '#0077b6', '#023e8a'],
	];
	const palette =
		palettes[Math.floor(Math.random() * palettes.length)];
	const gradient = `
		radial-gradient(circle farthest-side at 0 100%,${palette[0]},transparent),
		radial-gradient(circle farthest-side at 100% 0,${palette[1]},transparent),
		radial-gradient(circle farthest-side at 100% 100%,${palette[2]},transparent),
		radial-gradient(circle farthest-side at 0 0,${palette[3]},${palette[4]})
	`;
	return (
		<div className={cn('relative p-[2px]', containerClassName)}>
			<motion.div
				animate={{
					backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
				}}
				transition={{
					duration: 5,
					repeat: Infinity,
					repeatType: 'reverse',
				}}
				style={{
					backgroundSize: '400% 400%',
					backgroundImage: gradient,
				}}
				className={cn(
					'absolute inset-0 rounded-3xl z-[1] opacity-70 blur-sm will-change-transform transition duration-500'
				)}
			/>
			<div className={cn('relative z-10', className)}>{children}</div>
		</div>
	);
};

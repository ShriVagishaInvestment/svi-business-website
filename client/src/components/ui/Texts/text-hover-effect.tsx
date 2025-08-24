'use client';
import { useRef, useEffect, useState, useId } from 'react';
import { motion } from 'motion/react';

export const TextHoverEffect = ({
	text,
	duration,
	fontSize = 48,
}: {
	text: string;
	duration?: number;
	automatic?: boolean;
	fontSize?: number;
}) => {
	const svgRef = useRef<SVGSVGElement>(null);
	const [cursor, setCursor] = useState({ x: 0, y: 0 });
	const [hovered, setHovered] = useState(false);
	const [maskPosition, setMaskPosition] = useState({
		cx: '50%',
		cy: '50%',
	});

	const uniqueId = useId();
	const gradientId = `textGradient-${uniqueId}`;
	const revealMaskId = `revealMask-${uniqueId}`;
	const textMaskId = `textMask-${uniqueId}`;

	useEffect(() => {
		if (svgRef.current && cursor.x !== null && cursor.y !== null) {
			const svgRect = svgRef.current.getBoundingClientRect();
			const cxPercentage =
				((cursor.x - svgRect.left) / svgRect.width) * 100;
			const cyPercentage =
				((cursor.y - svgRect.top) / svgRect.height) * 100;
			setMaskPosition({
				cx: `${cxPercentage}%`,
				cy: `${cyPercentage}%`,
			});
		}
	}, [cursor]);

	// Split text into lines if too long (basic word wrap for SVG)
	const maxCharsPerLine = 16;
	const lines = text.split(' ').reduce((acc: string[][], word) => {
		if (!acc.length) return [[word]];
		const lastLine = acc[acc.length - 1];
		if ((lastLine.join(' ') + ' ' + word).length > maxCharsPerLine) {
			acc.push([word]);
		} else {
			lastLine.push(word);
		}
		return acc;
	}, [] as string[][]);

	// SVG height based on number of lines
	const svgHeight = 60 + (lines.length - 1) * 48;

	return (
		<span
			className='inline-block w-full whitespace-normal break-words'
			style={{ lineHeight: 1.1 }}>
			<svg
				ref={svgRef}
				width='100%'
				height={svgHeight}
				viewBox={`0 0 300 ${svgHeight}`}
				xmlns='http://www.w3.org/2000/svg'
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
				onMouseMove={e => setCursor({ x: e.clientX, y: e.clientY })}
				className='select-none w-full h-auto'
				style={{ display: 'block' }}>
				<defs>
					<linearGradient
						id={gradientId}
						gradientUnits='userSpaceOnUse'
						cx='50%'
						cy='50%'
						r='25%'>
						<stop offset='0%' stopColor='#eab308' />
						<stop offset='25%' stopColor='#ef4444' />
						<stop offset='50%' stopColor='#3b82f6' />
						<stop offset='75%' stopColor='#06b6d4' />
						<stop offset='100%' stopColor='#8b5cf6' />
					</linearGradient>

					<motion.radialGradient
						id={revealMaskId}
						gradientUnits='userSpaceOnUse'
						r='20%'
						initial={{ cx: '50%', cy: '50%' }}
						animate={maskPosition}
						transition={{ duration: duration ?? 0, ease: 'easeOut' }}>
						<stop offset='0%' stopColor='white' />
						<stop offset='100%' stopColor='black' />
					</motion.radialGradient>
					<mask id={textMaskId}>
						<rect
							x='0'
							y='0'
							width='100%'
							height='100%'
							fill={`url(#${revealMaskId})`}
						/>
					</mask>
				</defs>
				{/* Outline text */}
				{lines.map((line, i) => (
					<text
						key={i}
						x='50%'
						fontSize={fontSize}
						y={40 + i * 48}
						textAnchor='middle'
						dominantBaseline='middle'
						strokeWidth='0.3'
						className='fill-transparent stroke-neutral-200 font-[helvetica] font-bold dark:stroke-neutral-800'
						style={{ opacity: hovered ? 0.7 : 0 }}>
						{line.join(' ')}
					</text>
				))}
				{/* Animated outline */}
				{lines.map((line, i) => (
					<motion.text
						key={i}
						x='50%'
						fontSize={fontSize}
						y={40 + i * 48}
						textAnchor='middle'
						dominantBaseline='middle'
						strokeWidth='2'
						className='fill-transparent stroke-neutral-200 font-[helvetica] font-bold dark:stroke-neutral-800'
						initial={{
							strokeDashoffset: 1000,
							strokeDasharray: 1000,
						}}
						animate={{
							strokeDashoffset: 0,
							strokeDasharray: 1000,
						}}
						transition={{
							duration: 4,
							ease: 'easeInOut',
						}}>
						{line.join(' ')}
					</motion.text>
				))}
				{/* Gradient fill inside text */}
				{lines.map((line, i) => (
					<text
						key={i}
						x='50%'
						fontSize={fontSize}
						y={40 + i * 48}
						textAnchor='middle'
						dominantBaseline='middle'
						fill={`url(#${gradientId})`}
						fillOpacity={hovered ? 0.5 : 0.4}
						className='font-[helvetica] font-bold pointer-events-none select-none'>
						{line.join(' ')}
					</text>
				))}
				{lines.map((line, i) => (
					<text
						key={i}
						x='50%'
						fontSize={fontSize}
						y={40 + i * 48}
						textAnchor='middle'
						dominantBaseline='middle'
						stroke={`url(#${gradientId})`}
						strokeWidth='2'
						mask={`url(#${textMaskId})`}
						className='fill-transparent font-bold'>
						{line.join(' ')}
					</text>
				))}
			</svg>
		</span>
	);
};

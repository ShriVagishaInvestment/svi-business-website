'use client';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';
import { createNoise3D } from 'simplex-noise';

export const WavyBackground = ({
	children,
	className,
	containerClassName,
	colors,
	waveWidth,
	backgroundFill,
	blur = 10,
	speed = 'fast',
	waveOpacity = 0.5,
	...props
}: {
	children?: React.ReactNode;
	className?: string;
	containerClassName?: string;
	colors?: string[];
	waveWidth?: number;
	backgroundFill?: string;
	blur?: number;
	speed?: 'slow' | 'fast';
	waveOpacity?: number;
	[key: string]: unknown;
}) => {
	const noise = createNoise3D();
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const animationIdRef = useRef<number | null>(null);
	const ntRef = useRef<number>(0);

	const getSpeed = () => {
		switch (speed) {
			case 'slow':
				return 0.001;
			case 'fast':
				return 0.002;
			default:
				return 0.001;
		}
	};

	const waveColors = colors ?? [
		'#38bdf8',
		'#818cf8',
		'#c084fc',
		'#e879f9',
		'#22d3ee',
	];

	const drawWave = (
		ctx: CanvasRenderingContext2D,
		w: number,
		h: number,
		n: number
	) => {
		ntRef.current += getSpeed();
		for (let i = 0; i < n; i++) {
			ctx.beginPath();
			ctx.lineWidth = waveWidth || 50;
			ctx.strokeStyle = waveColors[i % waveColors.length];
			for (let x = 0; x < w; x += 5) {
				const y = noise(x / 800, 0.3 * i, ntRef.current) * 100;
				ctx.lineTo(x, y + h * 0.5);
			}
			ctx.stroke();
			ctx.closePath();
		}
	};

	const render = () => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;
		const w = canvas.width;
		const h = canvas.height;
		ctx.filter = `blur(${blur}px)`;
		ctx.fillStyle = backgroundFill || 'white';
		ctx.globalAlpha = waveOpacity || 0.5;
		ctx.fillRect(0, 0, w, h);
		drawWave(ctx, w, h, 5);
		animationIdRef.current = requestAnimationFrame(render);
	};

	// Resize canvas to fill window
	const resizeCanvas = () => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	};

	useEffect(() => {
		resizeCanvas();
		ntRef.current = 0;
		render();
		window.addEventListener('resize', resizeCanvas);
		return () => {
			window.removeEventListener('resize', resizeCanvas);
			if (animationIdRef.current)
				cancelAnimationFrame(animationIdRef.current);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [isSafari, setIsSafari] = useState(false);
	useEffect(() => {
		// I'm sorry but i have got to support it on safari.
		setIsSafari(
			typeof window !== 'undefined' &&
				navigator.userAgent.includes('Safari') &&
				!navigator.userAgent.includes('Chrome')
		);
	}, []);

	return (
		<div
			className={cn(
				'w-screen h-screen flex flex-col items-center justify-center overflow-hidden',
				containerClassName
			)}
			style={{ left: 0, top: 0 }}>
			<canvas
				className='absolute inset-0 z-0 min-w-screen h-full'
				ref={canvasRef}
				id='canvas'
				style={{
					display: 'block',
					width: '100vw',
					height: '100vh',
					...(isSafari ? { filter: `blur(${blur}px)` } : {}),
				}}></canvas>
			<div className={cn('relative z-10', className)} {...props}>
				{children}
			</div>
		</div>
	);
};

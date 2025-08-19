import * as React from 'react';
import { cn } from '@/lib/utils';

const Card = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(
			'max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)]/60 bg-gray-100/60 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group',
			className
		)}
		{...props}
	/>
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn('flex flex-col space-y-1.5 p-6', className)}
		{...props}
	/>
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
	<h3
		ref={ref}
		className={cn(
			'text-2xl font-semibold leading-none tracking-tight',
			className
		)}
		{...props}
	/>
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<p
		ref={ref}
		className={cn('text-sm text-muted-foreground', className)}
		{...props}
	/>
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn('flex items-center p-6 pt-0', className)}
		{...props}
	/>
));
CardFooter.displayName = 'CardFooter';

export {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardDescription,
	CardContent,
};

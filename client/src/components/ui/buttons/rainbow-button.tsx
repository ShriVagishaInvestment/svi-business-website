import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import React from 'react';
import {
	rainbowButtonVariants,
	type RainbowButtonProps,
} from './rainbow-button-variants';

const RainbowButton = React.forwardRef<
	HTMLButtonElement,
	RainbowButtonProps
>(({ className, variant, size, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : 'button';
	return (
		<Comp
			data-slot='button'
			className={cn(
				rainbowButtonVariants({ variant, size, className })
			)}
			ref={ref}
			{...props}
		/>
	);
});

RainbowButton.displayName = 'RainbowButton';

export { RainbowButton, type RainbowButtonProps };
export default RainbowButton;

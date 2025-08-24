import { cn } from '@/lib/utils';
import React from 'react';

interface LabelInputContainerProps {
	children: React.ReactNode;
	className?: string;
}

const LabelInputContainer = ({
	children,
	className = '',
}: LabelInputContainerProps) => (
	<div className={cn('flex flex-col space-y-2 w-full', className)}>
		{children}
	</div>
);

export default LabelInputContainer;

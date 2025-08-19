// Gradient color array for cards (for backgrounds)
export const CARD_GRADIENTS = [
	'linear-gradient(135deg, rgba(34,197,94,0.18) 0%, rgba(59,130,246,0.18) 100%)', // green-blue
	'linear-gradient(135deg, rgba(251,191,36,0.18) 0%, rgba(244,63,94,0.18) 100%)', // gold-pink
	'linear-gradient(135deg, rgba(139,92,246,0.18) 0%, rgba(236,72,153,0.18) 100%)', // purple-pink
	'linear-gradient(135deg, rgba(16,185,129,0.18) 0%, rgba(59,130,246,0.18) 100%)', // teal-blue
	'linear-gradient(135deg, rgba(251,113,133,0.18) 0%, rgba(253,224,71,0.18) 100%)', // pink-yellow
];

// Helper to get a darker, more opaque version of the gradient for text/icons
export function getDarkerGradient(index: number) {
	const gradients = [
		'linear-gradient(135deg, rgba(34,197,94,0.7) 0%, rgba(59,130,246,0.7) 100%)',
		'linear-gradient(135deg, rgba(251,191,36,0.7) 0%, rgba(244,63,94,0.7) 100%)',
		'linear-gradient(135deg, rgba(139,92,246,0.7) 0%, rgba(236,72,153,0.7) 100%)',
		'linear-gradient(135deg, rgba(16,185,129,0.7) 0%, rgba(59,130,246,0.7) 100%)',
		'linear-gradient(135deg, rgba(251,113,133,0.7) 0%, rgba(253,224,71,0.7) 100%)',
	];
	return gradients[index % gradients.length];
}

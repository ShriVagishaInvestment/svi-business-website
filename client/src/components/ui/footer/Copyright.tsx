const Copyright = ({
	copyright,
	designedBy,
	developer,
}: {
	copyright: string;
	designedBy: string;
	developer: string;
}) => (
	<div className='text-sm opacity-70 space-y-2'>
		<p>{copyright}</p>
		<p>
			{designedBy}
			<span className='text-brand-gold font-medium'>{developer}</span>
		</p>
	</div>
);

export default Copyright;

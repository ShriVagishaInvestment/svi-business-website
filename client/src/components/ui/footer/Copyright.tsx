const Copyright = ({
	copyright,
	designedBy,
	developer,
	developerGithub,
}: {
	copyright: string;
	designedBy: string;
	developer: string;
	developerGithub: string;
}) => (
	<div className='text-sm opacity-70 space-y-2'>
		<p>{copyright}</p>
		<p>
			{designedBy}
			<a
				href={developerGithub}
				className='text-brand-gold font-medium'
				target='_blank'>
				{developer}
			</a>
		</p>
	</div>
);

export default Copyright;

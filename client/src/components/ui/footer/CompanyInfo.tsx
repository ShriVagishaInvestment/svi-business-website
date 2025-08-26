import { COMPANY_NAME } from '@/text';
type Link = { label: string; id: string };

const CompanyInfo = ({ links }: { links: Link[] }) => (
	<div>
		<h3 className='text-xl font-bold'>{COMPANY_NAME}</h3>
		<p className='mt-2 text-sm opacity-70 pb-4'>
			Your trusted partner in financial growth.
		</p>
		<ul className='space-y-2'>
			{links.map((link: Link) => (
				<li key={link.id}>
					<button
						onClick={() => {
							const el = document.getElementById(link.id);
							if (el) el.scrollIntoView({ behavior: 'smooth' });
						}}
						className='text-sm opacity-70 hover:text-brand-gold hover:opacity-100 transition-all'>
						{link.label}
					</button>
				</li>
			))}
		</ul>
	</div>
);

export default CompanyInfo;

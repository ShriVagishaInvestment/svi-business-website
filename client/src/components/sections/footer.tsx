/* eslint-disable @typescript-eslint/no-explicit-any */

import {
	FOOTER_LINKS,
	FOOTER_CONTACT,
	FOOTER_SOCIAL,
	FOOTER_MAP,
	FOOTER_COPYRIGHT,
} from '../../text.tsx';
import CompanyInfo from './footer/CompanyInfo.tsx';
import ContactInfo from './footer/ContactInfo.tsx';
import MapSection from './footer/MapSection.tsx';
import Copyright from './footer/Copyright.tsx';

const Footer = () => (
	<footer className='bg-brand-navy dark:bg-black/50 text-brand-white'>
		<div className='container mx-auto px-6 py-12'>
			<div className='grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left'>
				<CompanyInfo links={FOOTER_LINKS} />
				<ContactInfo
					contacts={FOOTER_CONTACT.contacts}
					socials={FOOTER_SOCIAL}
				/>
				<MapSection map={FOOTER_MAP} />
			</div>
			<div className='mt-12 border-t border-white/20 pt-8 text-center'>
				<Copyright {...FOOTER_COPYRIGHT} />
			</div>
		</div>
	</footer>
);

export default Footer;

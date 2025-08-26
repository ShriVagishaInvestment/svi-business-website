import React from 'react';

type Contact = {
	icon: React.ElementType;
	label: string;
	value: string;
	href: string | null;
};
type Social = {
	icon: React.ElementType;
	label: string;
	href: string;
	color: string;
};

const ContactInfo = ({
	contacts,
	socials,
}: {
	contacts: Contact[];
	socials: Social[];
}) => (
	<div>
		<h3 className='text-lg font-semibold mb-4'>Contact Us</h3>
		<div className='space-y-3'>
			{contacts.map((contact: Contact, index: number) => {
				const IconComponent = contact.icon;
				return (
					<div
						key={index}
						className='flex items-center justify-center md:justify-start gap-2'>
						<IconComponent size={16} className='opacity-70' />
						{contact.href ? (
							<a
								href={contact.href}
								className='text-sm opacity-70 hover:text-brand-gold hover:opacity-100 transition-all'>
								{contact.value}
							</a>
						) : (
							<span className='text-sm opacity-70'>
								{contact.value}
							</span>
						)}
					</div>
				);
			})}
			{socials.map((social: Social, index: number) => {
				const IconComponent = social.icon;
				return (
					<a
						key={index}
						href={social.href}
						target='_blank'
						rel='noopener noreferrer'
						className={`opacity-70 hover:opacity-100 transition-all ${social.color}`}
						aria-label={social.label}>
						<span className='flex gap-2 py-2 items-center justify-center sm:justify-start'>
							{social.label} <IconComponent size={20} />
						</span>
					</a>
				);
			})}
		</div>
	</div>
);

export default ContactInfo;

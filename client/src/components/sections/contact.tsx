'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '../ui/section-header';
import ContactForm from '../ui/contact/ContactForm';
import { CONTACT_FORM_TEXT } from '../../text';

export default function ContactSection() {
	return (
		<div
			className='min-h-screen bg-white dark:bg-black relative overflow-hidden flex flex-col items-center justify-center py-20 px-4 z-10 max-w-7xl mx-auto'
			id='contact'>
			<SectionHeader
				title={CONTACT_FORM_TEXT.heading || 'Contact Us'}
				description={
					CONTACT_FORM_TEXT.description ||
					'Connect with us and get to know more about our services, we will contact you soon!!'
				}
			/>
			<motion.div className='relative gap-20 w-full max-w-xl m-20'>
				<ContactForm />
			</motion.div>
		</div>
	);
}

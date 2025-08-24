import { useRef, useState, useEffect, type FormEvent } from 'react';
import { IconSend } from '@tabler/icons-react';
import { Toaster } from 'react-hot-toast';
import { Label } from '../label';
import { Input } from '../input';
import { ShineBorder } from '../cards/shine-border';
import LabelInputContainer from './LabelInputContainer';
import { CONTACT_FORM_TEXT } from '@/text';

const ContactForm = () => {
	const [isSubmitting] = useState(false);
	const [result, setResult] = useState('');
	const form = useRef<HTMLFormElement>(null);

	useEffect(() => {
		if (result && result !== CONTACT_FORM_TEXT.sending) {
			const timer = setTimeout(() => setResult(''), 2000);
			return () => clearTimeout(timer);
		}
	}, [result]);

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setResult(CONTACT_FORM_TEXT.sending);
		const formElement = event.target as HTMLFormElement;
		const formData = new FormData(formElement);
		formData.append('access_key', CONTACT_FORM_TEXT.accessKey);
		const response = await fetch(CONTACT_FORM_TEXT.apiUrl, {
			method: 'POST',
			body: formData,
		});
		const data = await response.json();
		if (data.success) {
			setResult(CONTACT_FORM_TEXT.success);
			formElement.reset();
		} else {
			setResult(data.message);
		}
	};

	return (
		<div className='w-full p-2 rounded-2xl'>
			<ShineBorder shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']} />
			<form
				className='space-y-6 w-full'
				ref={form}
				onSubmit={onSubmit}>
				<input
					type='hidden'
					name='access_key'
					value={CONTACT_FORM_TEXT.accessKey}
				/>
				<div className='space-y-4 m-4'>
					{CONTACT_FORM_TEXT.fields.map(field => (
						<LabelInputContainer key={field.name}>
							<Label htmlFor={field.id} className={field.labelClass}>
								{field.label}
							</Label>
							{field.type !== 'textarea' ? (
								<Input
									id={field.id}
									placeholder={field.placeholder}
									type={field.type}
									name={field.name}
									className={field.inputClass}
									required={field.required}
								/>
							) : (
								<textarea
									id={field.id}
									placeholder={field.placeholder}
									name={field.name}
									required={field.required}
									rows={5}
									className={field.textareaClass}
								/>
							)}
						</LabelInputContainer>
					))}
				</div>
				<button
					type='submit'
					disabled={isSubmitting}
					className={CONTACT_FORM_TEXT.buttonClass}>
					{isSubmitting ? (
						<>
							<div className='spinner w-4 h-4'></div>
							{CONTACT_FORM_TEXT.sending}
						</>
					) : (
						<>
							<IconSend className='w-4 h-4' />
							{CONTACT_FORM_TEXT.button}
						</>
					)}
				</button>
				{result && CONTACT_FORM_TEXT.renderResult(result)}
				<Toaster position='top-right' />
			</form>
		</div>
	);
};

export default ContactForm;

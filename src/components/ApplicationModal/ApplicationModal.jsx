import React, { useState } from 'react';
import s from './ApplicationModal.module.scss';
import Image from 'next/image';
import { Input, message } from 'antd';
import axios from 'axios';

const { TextArea } = Input;

const ApplicationModal = ({ setModal1Open }) => {
	const [messageApi, contextHolder] = message.useMessage();

	const [formData, setFormData] = useState({
		title: '',
		tel: '',
		email: '',
	});

	const [telError, setTelError] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Проверка валидности номера телефона
		if (!validatePhoneNumber(formData.tel)) {
			setTelError('Неправильный формат номера');
			return;
		} else {
			setTelError(null);
		}

		try {
			const response = await axios.post('https://express-mongodb-test.vercel.app/send-email', formData);
			showMessage('success', 'Успешно отправили сообщение. В течение 24 часов ответим.');
			setModal1Open(false);
			setFormData(formData.email = "", formData.tel = "", formData.title = "0");
		} catch (e) {
			showMessage('error', 'Неправильно написали данные или произошла ошибка на сервере.');
		}
	};

	const validatePhoneNumber = (phoneNumber) => {
		// Регулярное выражение для формата номера телефона с "0" в начале
		const regex = /^0[0-9]{9}$/;
		return regex.test(phoneNumber);
	};

	const showMessage = (type, content) => {
		messageApi.open({
			type: type,
			content: content,
			duration: 10,
		});
	};

	return (
		<form onSubmit={handleSubmit} className={s.application_modal}>
			{contextHolder}
			<h1>Отправьте заявку</h1>
			<div className={s.application_modal__profile}>
				<Image src="/consultant.jpg" alt="consultant.jpg" width={129} height={129} priority={true} />
				<h4>Мы проконсультируем Вас по каталогу, условиям доставки и оплаты и отправим расчет в течение 2 часов в рабочий день</h4>
			</div>
			<TextArea
				value={formData.title}
				onChange={(e) => setFormData({ ...formData, title: e.target.value })}
				placeholder="Напишите кратко о своём бизнесе: поставки на Wildberries/Ozon или у вас офлайн-магазин или продаете в соцсетях"
				maxLength={360}
				rows={4}
				autoSize={'none'}
				required
			/>
			<Input
				value={formData.tel}
				onChange={(e) => {
					setTelError(null);
					setFormData({ ...formData, tel: e.target.value });
				}}
				placeholder="0700000111"
				maxLength={12}
				required
				type="tel"
				autoComplete="tel"
			/>
			{telError && <p style={{ color: 'red' }}>{telError}</p>}
			<Input value={formData.email} required onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="E-mail" type="email" />
			<button type="submit">ОТПРАВИТЬ</button>
		</form>
	);
};

export default ApplicationModal;
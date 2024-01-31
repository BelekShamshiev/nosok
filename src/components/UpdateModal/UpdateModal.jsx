import React, { useEffect, useState } from 'react';
import s from './UpdateModal.module.scss';
import { Input } from 'antd';
import Image from 'next/image';
import axios from 'axios';

const { TextArea } = Input;


const UpdateModal = ({categoriesId , productId}) => {

	const [selectedFile, setSelectedFile] = useState(null);
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [secretKey, setSecretKey] = useState('');


	const handleFileChange = (event) => {
		setSelectedFile(event.target.files[0]);
	};


	useEffect(() => {
		if (typeof window !== 'undefined') {
			// Perform localStorage action
			setSecretKey(localStorage.getItem("SECRET_WORD"));
		}
	}, [])


	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const formData = new FormData();
			formData.append('image', selectedFile);
			formData.append('name', name);
			formData.append('description', description);
			formData.append('price', price);
			formData.append('secretKey', secretKey);
			formData.append('productId', productId);

			const response = await axios.put(`https://express-mongodb-test.vercel.app/update/${categoriesId}`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			setTimeout(() => {
				location.reload();
			}, 1000);
			// Добавьте код для обработки успешной загрузки изображения и обновления продукта
		} catch (error) {
			// Добавьте код для обработки ошибки
		}
	};

	return (
		<form onSubmit={handleSubmit} className={s.application_modal}>
			{/* {contextHolder} */}
			<h1>Изменить</h1>
			<Input
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder="Имя"
				required
				type="text"
			/>
			<TextArea
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				placeholder="Описание (новая строка через каждую точку и пробел)"
				maxLength={360}
				rows={4}
				autoSize={'none'}
				required
			/>
			<Input
				value={price}
				onChange={(e) => setPrice(e.target.value)}
				placeholder="Цена"
				type='number'
				required
			/>
			<Input type='file' onChange={handleFileChange} accept='image/*' />
			<button type="submit">ОТПРАВИТЬ</button>
		</form>
	);
};

export default UpdateModal;
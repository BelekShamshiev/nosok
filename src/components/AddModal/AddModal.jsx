import React, { useEffect, useState } from 'react';
import s from './AddModal.module.scss'
import axios from 'axios';
import { Input  , message} from 'antd';
import { useRouter } from 'next/router';


const { TextArea } = Input;

const AddModal = ({categoriesId}) => {
	const [messageApi, contextHolder] = message.useMessage();
	const [selectedFile, setSelectedFile] = useState(null);
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [secretKey, setSecretKey] = useState('');

	const router = useRouter();

	const handleFileChange = (event) => {
		setSelectedFile(event.target.files[0]);
	};

	useEffect(() => {
		if (typeof window !== 'undefined') {
			// Perform localStorage action
			setSecretKey(localStorage.getItem("SECRET_WORD"));
		}
	}, [])


	const handleUpload = async (e) => {
		e.preventDefault();
		try {
			const formData = new FormData();
			formData.append('image', selectedFile);
			formData.append('name', name);
			formData.append('description', description);
			formData.append('price', price);
			formData.append('secretKey', secretKey);

			const response = await axios.post(`https://express-mongodb-test.vercel.app/upload/${categoriesId}`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			showMessage('success', 'Продукт успешно добавлен');
			setTimeout(() => {
				location.reload();
			}, 2000);
			// Добавьте код для обработки успешного создания и загрузки продукта
		} catch (error) {
			showMessage('error', 'Продукт не был добавлен ошибка сервера либо в запросе');
			// Добавьте код для обработки ошибки
		}
	};

	const showMessage = (type, content) => {
		messageApi.open({
			type: type,
			content: content,
			duration: 10,
		});
	};


	return (
		<form onSubmit={handleUpload} className={s.application_modal}>
			{contextHolder}
			<h1>Добавить</h1>
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

export default AddModal;
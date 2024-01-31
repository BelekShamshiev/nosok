import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UpdateProduct = ({ categoriesId }) => {
	const [selectedFile, setSelectedFile] = useState(null);
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [secretKey, setSecretKey] = useState('')

	const handleFileChange = (event) => {
		setSelectedFile(event.target.files[0]);
	};

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handleDescriptionChange = (event) => {
		setDescription(event.target.value);
	};

	useEffect(() => {
		if (typeof window !== 'undefined') {
			// Perform localStorage action
			setSecretKey(localStorage.getItem("SECRET_WORD"));
		}
	})

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const formData = new FormData();
			formData.append('image', selectedFile);
			formData.append('name', name);
			formData.append('description', description);
			formData.append('secretKey', secretKey);

			const response = await axios.put(`https://express-mongodb-test.vercel.app/update/${categoriesId}`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});

			// Добавьте код для обработки успешной загрузки изображения и обновления продукта
		} catch (error) {
			// Добавьте код для обработки ошибки
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<input type="text" value={name} onChange={handleNameChange} />
			</label>
			<label>
				Description:
				<textarea value={description} onChange={handleDescriptionChange} />
			</label>
			<label>
				Choose an image:
				<input type="file" onChange={handleFileChange} accept="image/*" />
			</label>
			<button type="submit">Upload Image</button>
		</form>
	);
};

export default UpdateProduct;
import React, { useEffect, useState } from 'react';
import s from './AdminButton.module.scss'
import { Button, Modal , message } from 'antd';
import UpdateModal from '../UpdateModal/UpdateModal';
import axios from 'axios';

const AdminButton = ({ categoriesId, productId }) => {

	const [secretKey, setSecretKey] = useState('');
	const [messageApi, contextHolder] = message.useMessage();

	useEffect(() => {
		if (typeof window !== 'undefined') {
			// Perform localStorage action
			setSecretKey(localStorage.getItem("SECRET_WORD"));
		}
	}, [])

	const [modal2Open, setModal2Open] = useState(false);

	const handleDelete = async () => {
		try {
			const response = await axios.delete(`https://express-mongodb-test.vercel.app/delete/${categoriesId}/${productId}`, {
				data: { secretKey: secretKey }, // Передаем secretKey в теле запроса
			});
			showMessage("success" , "Успешно удалён")
			location.reload()
		} catch (error) {
			showMessage("error" , "Ошибка при удалении!")
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
		<div className={s.admin_button}>
			{contextHolder}
			<Button onClick={() => setModal2Open(true)} type='primary' style={{ width: '120px', height: "50px", }} >ИЗМЕНИТЬ</Button>
			<Button onClick={handleDelete} danger style={{ width: '120px', height: "50px", marginLeft: "20px" }} >УДАЛИТЬ</Button>

			<Modal
				centered
				open={modal2Open}
				onOk={() => setModal2Open(false)}
				onCancel={() => setModal2Open(false)}
				footer={null}
				width={600}
			>
				<UpdateModal productId={productId} categoriesId={categoriesId} />
			</Modal>
		</div>
	);
};

export default AdminButton;
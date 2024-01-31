import React, { useEffect, useState } from 'react';
import s from './ProductDetails.module.scss';
import Image from 'next/image'
import {  Modal } from 'antd';
import ApplicationModal from '../ApplicationModal/ApplicationModal';
import AdminButton from '../AdminButton/AdminButton';


const ProductDetails = ({ productsItem, categoriesId }) => {

	const [modal1Open, setModal1Open] = useState(false);
	const [secretKey, setSecretKey] = useState('');

	const pantsStyles = productsItem.description.split('. ');

	useEffect(() => {
		if (typeof window !== 'undefined') {
			// Perform localStorage action
			setSecretKey(localStorage.getItem("SECRET_WORD"));
		}
	}, [])

	return (
		<div className={s.product_details}>
			<Image  src={productsItem.img.data} width={470} height={555} alt={productsItem.img.contentType} />
			<div className={s.product_details__text_block}>
				<h2>{productsItem.name}</h2>
				<ul>
					{pantsStyles.map((style, index) => (
						<li key={index}>{style}</li>
					))}
				</ul>
				<div className={s.product_details__text_block__delivery}>
					<h5>Доставка и оплата</h5>
					<p>{productsItem.delivery}</p>
				</div>
				<div className={s.product_details__text_block__price}>
					<h4>от <span>{productsItem.price}₽</span></h4>
					<button onClick={() => setModal1Open(true)}>ПОЛУЧИТЬ РАСЧЕТ ПАРТИИ</button>
				</div>
				{secretKey === process.env.NEXT_PUBLIC_REACT_APP_SECRET_WORD && <AdminButton productId={productsItem._id} categoriesId={categoriesId} />}
			</div>
			<Modal
				centered
				open={modal1Open}
				onOk={() => setModal1Open(false)}
				onCancel={() => setModal1Open(false)}
				footer={null}
				width={600}
			>
				<ApplicationModal setModal1Open={setModal1Open} />
			</Modal>
		</div>
	);
};

export default ProductDetails;
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import s from './categoriesDetails.module.scss'
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import { Modal, Button } from "antd";
import AddModal from '@/components/AddModal/AddModal';

const categories = () => {

	const [selectedFile, setSelectedFile] = useState(null);
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [secretKey, setSecretKey] = useState('')
	const [dataCategories, setDataCategories] = useState([]); 4
	const [modalOpen, setModalOpen] = useState(false)

	const router = useRouter();

	const getCategoriesById = async () => {
		try {
			if (router.query.id == undefined) {
				console.error("Product ID is missing");
				return;
			}
			const res = await axios.get(`https://express-mongodb-test.vercel.app/categories/${router.query?.id}`);
			setDataCategories(res.data.categories.products);
		} catch (err) {

		}
	}

	useEffect(() => {
		if (typeof window !== 'undefined') {
			// Perform localStorage action
			setSecretKey(localStorage.getItem("SECRET_WORD"));
		}
	})


	useEffect(() => {
		if (!router.isReady) return;

		getCategoriesById()
	}, [router.isReady]);


	return (
		<section className={s.categories_section}>
			{secretKey === process.env.NEXT_PUBLIC_REACT_APP_SECRET_WORD && <Button onClick={() => setModalOpen(true)} type='primary' style={{ width: '120px', height: "50px", margin: "10px 0 30px 0" }} >Добавить</Button>}
			{dataCategories.map((productItem) => {
				return (
					<ProductDetails categoriesId={router.query.id} key={productItem._id} productsItem={productItem} />
				)
			})}
			<Modal
				centered
				open={modalOpen}
				onOk={() => setModalOpen(false)}
				onCancel={() => setModalOpen(false)}
				footer={null}
				width={600}
			>
				<AddModal  categoriesId={router.query.id} />
			</Modal>
		</section>
	);
};

export default categories;
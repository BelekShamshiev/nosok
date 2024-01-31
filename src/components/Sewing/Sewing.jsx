import React, { useEffect, useState } from 'react';
import s from './Sewing.module.scss'
import SewingCard from '../SewingCard/SewingCard';
import axios from 'axios'
import Loader from '../Loader/Loader';

const Sewing = () => {
	const [data, setData] = useState([]);


	useEffect(() => {
		getCategories()
	}, []);

	const getCategories = async () => {
		try {
			const res = await axios.get("https://express-mongodb-test.vercel.app/categories");
			setData(res.data)
		} catch (err) {
		}
	}

	return (
		<section className={s.sewing_section}>
			<h2>Что мы шьем?</h2>
			<div className={s.sewing_section__block}>
				{data.length <= 0 ? <Loader /> : data.map((categories) => {
					return (
						<SewingCard categories={categories} key={categories._id} />
					)
				})}
			</div>
		</section>
	);
};

export default Sewing;
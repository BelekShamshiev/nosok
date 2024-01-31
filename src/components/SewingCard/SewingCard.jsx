import React from 'react';
import s from './SewingCard.module.scss'
import Image from "next/image";
import { useRouter } from 'next/router';

const SewingCard = ({ categories }) => {
	const router = useRouter()

	return (
		<div className={s.sewing_card}>
			<Image src={categories.img.data} alt={categories.alt} width={595} height={375} />
			<div className={s.sewing_card__block}>
				<h4>{categories.name}</h4>
				<p>{categories.description}</p>
				<button className={s.btn} onClick={() => router.push(`/categories/${categories._id}`)}>Подробнее</button>
			</div>
		</div>
	);
};

export default SewingCard;
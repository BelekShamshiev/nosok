import React from 'react';
import s from './StagesCard.module.scss'
import Image from 'next/image'

const StagesCard = ({stage}) => {
	return (
		<div className={s.stages_card}>
			<div className={s.stages_card__title_block}>
				<h4><span>{stage.number}</span> {stage.name}</h4>
				<p>{stage.description}</p>
			</div>
			<Image src={stage.img} alt='img' width={550} height={333} />
		</div>
	);
};

const express = [

]

export default StagesCard;
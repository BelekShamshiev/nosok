import React from 'react';
import s from './Stages.module.scss'
import StagesCard from '../StagesCard/StagesCard';
import { stages } from '../../constans/stages'

const Stages = () => {



	return (
		<section className={s.stages_section}>
			<h2>Этапы заказа</h2>
			<div className={s.stages_section__block}>
				{stages.map(( stage ) => {
					return (
						<StagesCard key={stage.id} stage={stage}/>
					)
				})}
			</div>
		</section>
	);
};

export default Stages;
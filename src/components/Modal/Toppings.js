import React from 'react';

import { OptionWrap, OptionLabel, OptionCheckbox } from '../Style/OptionsStyle';


export const Toppings = ({toppings, checkToppings}) => {
	return (
		<>
			<h3>Добавки</h3>
			<OptionWrap>
				{toppings.map((item, i) => (
					<OptionLabel key={i}>
						<OptionCheckbox
							type="checkbox"
							checked={item.checked}
							onChange={() => checkToppings(i)}	
						/>
						{item.name}
					</OptionLabel>
				))}
			</OptionWrap>
		</>
	)
}
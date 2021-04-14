import React from 'react';

import { OptionWrap, OptionLabel, OptionCheckbox } from '../Style/OptionsStyle';

export const Choices = ({choice, changeChoices, openItem}) => {
	return (
		<>
			<h3>Выбирайте:</h3>
			<OptionWrap>
				{openItem.choices.map((item, i) => (
					<OptionLabel key={i}>
						<OptionCheckbox
							type="radio"
							name="choices"
							checked={choice === item}
							value={item}
							onChange={changeChoices}	
						/>
						{item}
					</OptionLabel>
				))}
			</OptionWrap>
		</>
	)
}
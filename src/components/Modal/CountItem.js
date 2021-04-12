import React from 'react';
import styled from 'styled-components';

const CountContent = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-top: 20px;
	padding: 0 53px 0 37px;
`;

const CountWrapper = styled.div`

`;

const CountInput = styled.input`
	width: 50px;
	font-size: 20px;

`;

const ButtonCount = styled.button`
	background-color: transparent;
	width: 30px;
`;


export function CountItem({ count, setCount, onChange }) {

	return (
		<CountContent>
			<span>Количество</span>
			<CountWrapper>
				<ButtonCount disabled={count <= 1} onClick={() => setCount(count - 1)}>-</ButtonCount>
				<CountInput type= 'number' min='1' max='10' value={count < 1 ? 1 : count} onChange={onChange}/>
				<ButtonCount onClick={() => setCount(count + 1)}>+</ButtonCount>
			</CountWrapper>
		</CountContent>
	)
}
import React from 'react';
import styled from 'styled-components';
import trashImg from '../img/trash.svg';


const OrderItemStyled = styled.li`
	display: flex;
	width: 100%;
	&:not(:last-of-type) {
		margin-bottom: 28px;
	}
`;

const ItemName = styled.span`
	flex-grow: 1;
`;

const ItemAmount = styled.span`

`;

const ItemPrice = styled.span`
	min-width: 65px;
	margin: 0 10px 0 20px;
	text-align: right;
`;

const TrashBtn = styled.button`
	width: 24px;
	height: 24px;
	border-color: transparent;
	background: url(${trashImg}) no-repeat;
	background-position: center;
	background-size: cover;
`;

export const OrderListItem = () => {
	return (
		<OrderItemStyled>
			<ItemName>Burger</ItemName>
			<ItemAmount>2</ItemAmount>
			<ItemPrice>450 P</ItemPrice>
			<TrashBtn/>
		</OrderItemStyled>
	)
};
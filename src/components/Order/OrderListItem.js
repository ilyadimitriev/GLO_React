import React from 'react';
import styled from 'styled-components';
import trashImg from './trash.svg';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { toLocaleCurrency } from '../Functions/secondaryFunction';


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

export const OrderListItem = ({ order }) => {
	return (
		<OrderItemStyled>
			<ItemName>{order.name}</ItemName>
			<ItemAmount>{order.count}</ItemAmount>
			<ItemPrice>{toLocaleCurrency(totalPriceItems(order))}</ItemPrice>
			<TrashBtn/>
		</OrderItemStyled>
	)
};
import React from 'react';
import styled from 'styled-components';
import trashImg from './trash.svg';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { toLocaleCurrency } from '../Functions/secondaryFunction';


const OrderItemStyled = styled.li`
	display: flex;
	flex-wrap: wrap;
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

const Toppings = styled.div`
	width: 100%;
	color: #9a9a9a;
	font-size: 14px;
`;

export const OrderListItem = ({ order, index, deleteItem, setOpenItem }) => {

	const topping = order.topping.filter(item => item.checked)
		.map(item => item.name)
		.join(', ');

	return (
		<OrderItemStyled onClick={() => setOpenItem({...order, index})}>
			<ItemName>{order.name} {order.choice}</ItemName>
			<ItemAmount>{order.count}</ItemAmount>
			<ItemPrice>{toLocaleCurrency(totalPriceItems(order))}</ItemPrice>
			<TrashBtn onClick={() => deleteItem(index)}/>
			{topping && <Toppings>{topping}</Toppings>}
		</OrderItemStyled>
	)
};
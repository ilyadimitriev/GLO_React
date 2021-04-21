import React, { useRef } from 'react';
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
	cursor: pointer;
`;

const ItemAmount = styled.span`
	cursor: pointer;
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
	cursor: pointer;
`;

export const OrderListItem = ({ order, index, deleteItem, setOpenItem }) => {

	const topping = order.topping.filter(item => item.checked)
		.map(item => item.name)
		.join(', ');

	const refDeleteButton = useRef(null);

	return (
		<OrderItemStyled onClick={(e) => e.target !== refDeleteButton.current && setOpenItem({...order, index})}>
			<ItemName>{order.name} {order.choice}</ItemName>
			<ItemAmount>{order.count}</ItemAmount>
			<ItemPrice>{toLocaleCurrency(totalPriceItems(order))}</ItemPrice>
			<TrashBtn ref={refDeleteButton} onClick={() => deleteItem(index)}/>
			{topping && <Toppings>{topping}</Toppings>}
		</OrderItemStyled>
	)
};
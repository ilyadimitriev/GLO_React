import React from 'react';
import styled from 'styled-components';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { toLocaleCurrency } from '../Functions/secondaryFunction';

const OrderStyled = styled.section`
	position: fixed;
	top: 80px;
	left: 0;
	display: flex;
	flex-direction: column;
	min-width: 380px;
	padding: 20px;
	background: #fff;
	height: calc(100% - 80px);
`;

const OrderTitle = styled.h2`
	display: block;
	margin-bottom: 70px;
	text-align: center;
`;

const OrderContent = styled.div`
	flex-grow: 1;
`;

const OrderList = styled.ul`
`;

const Total = styled.div`
	display: flex;
`;

const ConfirmBtn = styled.button`
	display: block;
	height: 65px;
	width: 250px;
	margin: 20px auto 43px;
	background: #299B01;
	color: white;
	font-family: Roboto;
	font-size: 21px;
	border: 2px solid #299B01;
	transition: color, background, 100ms;
	&:hover {
		background: white;
		color: #299B01;
		transition: color, background, 100ms;
	}
`;

const EmptyList = styled.p`
	text-align: center
`; 

export const Order = ({ orders }) => {

	const total = orders.reduce((result, order) => (totalPriceItems(order) + result), 0);

	return (
		<>
			<OrderStyled>
				<OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
				<OrderContent>
					{orders.length ?
						<OrderList>
							{orders.map(order => <OrderListItem order={order}/>)}
						</OrderList> :
						<EmptyList>Список заказов пуст</EmptyList>}
				</OrderContent>
				<Total>{toLocaleCurrency(total)}</Total>
				<ConfirmBtn>Оформить</ConfirmBtn>
			</OrderStyled>
		</>
	)
}

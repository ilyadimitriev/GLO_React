import React from 'react';
import styled from 'styled-components';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { toLocaleCurrency } from '../Functions/secondaryFunction';
import { projection } from '../Functions/secondaryFunction';

const OrderStyled = styled.section`
	position: fixed;
	top: 80px;
	left: 0;
	display: flex;
	flex-direction: column;
	width: 380px;
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
	justify-content: space-between;
	width: 100%;
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


const rulesData = {
	name: ['name'],
	price: ['price'],
	count: ['count'],
	topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name),
		arr => arr.length ? arr : 'no topping'],
	choice: ['choice', item => item ? item : 'no noo choices']
}

export const Order = ({ orders, setOrders, setOpenItem, authentication, logIn, firebaseDatabase }) => {

	const dataBase = firebaseDatabase();

	const sendOrder = () => {
		const newOrder = orders.map(projection(rulesData));
		dataBase.ref('orders').push().set({
			name: authentication.displayName,
			email: authentication.email,
			order: newOrder
		});
		setOrders([]);
	};

	const deleteItem = index => {
		const newOrders = orders.filter((item, i) => index !== i);

		newOrders.splice(index, 1);

		setOrders(newOrders);
	};

	const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);

	const totalCounter = orders.reduce((result, order) => order.count + result, 0);

	return (
		<>
			<OrderStyled>
				<OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
				<OrderContent>
					{orders.length ?
						<OrderList>
							{orders.map((order, index) => <OrderListItem
								key={index}
								order={order}
								deleteItem={deleteItem}
								index={index}
								setOpenItem={setOpenItem}
							/>)}
						</OrderList> :
						<EmptyList>Список заказов пуст</EmptyList>}
				</OrderContent>
				<Total>
					<span>Итого:</span>
					<span>{totalCounter}</span>
					{toLocaleCurrency(total)}
					</Total>
				<ConfirmBtn onClick={() => {
					if (authentication) {
						sendOrder();
					} else {
						logIn();
					}
				}}>Оформить</ConfirmBtn>
			</OrderStyled>
		</>
	)
}

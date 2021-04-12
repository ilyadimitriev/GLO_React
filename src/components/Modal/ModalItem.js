import React from 'react';
import styled from 'styled-components';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { toLocaleCurrency } from '../Functions/secondaryFunction';

const Overlay = styled.div`
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center; 
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 20;
	background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	// justify-content: center;
	background-color: #fff;
	width: 600px;
	height: 600px;
`;

const Banner = styled.div`
	width: 100%;
	height: 200px;
	background-image: url(${({img}) => img});
	background-size: cover;
	background-position: center;
`;

const ItemInfo = styled.div`
	display: flex;
	width: 100%;
	margin-top: 20px;
	padding: 0 53px 0 37px;
	font-family: Pacifico;
	font-size: 30px;
`;

const ItemName = styled.span``;

const ItemPrice = styled.span`
	margin-left: auto;
`;

const AddBtn = styled.button`
	display: block;
	height: 65px;
	width: 250px;
	margin-top: auto;
	margin-bottom: 43px;
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

const TotalPriceItem= styled.div`
	display: flex;
	justify-content: space-between;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

	const counter = useCount();

	const closeModal = (e) => {
		if (e.target.id === 'overlay') {
			setOpenItem(null);
		}
	}

	const order = {
		...openItem,
		count: counter.count
	};

	const addToOrder = () => {
		setOrders([...orders, order]);
		setOpenItem(null);
	}

	return (
		<Overlay id="overlay" onClick={closeModal}>
			<Modal>
				<Banner img={openItem.img}/>
				<ItemInfo>
					<ItemName>{openItem.name}</ItemName>
					<ItemPrice>
					{toLocaleCurrency(openItem.price)}</ItemPrice>
				</ItemInfo>
				<CountItem {...counter}/>
				<TotalPriceItem>
					<span>Цена:</span>
					<span>{toLocaleCurrency(totalPriceItems(order))}</span>
				</TotalPriceItem>
				<AddBtn onClick={addToOrder}>Добавить</AddBtn>
			</Modal>
		</Overlay>
	)
};


import React from 'react';
import styled from 'styled-components';
import { toLocaleCurrency } from '../Functions/secondaryFunction';

const List = styled.ul`
	display:flex;
	justify-content: space-around;
	flex-wrap: wrap;
`;

const Item = styled.li`
	position: relative;
	width: 400px;
	height: 155px;
	background-image: ${(props) => `url(${props.img})`};
	background-size: cover;
	background-position: center;
	margin-top: 30px;
	margin-right: 30px;
	padding: 15px;
	color: white;
	z-index: 1;
	&:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: black;
		opacity: 30%;
		z-index: -1;
	}
	&:hover {
		cursor: pointer;
		box-shadow: inset 0 0 50px 30px black;
		&::after {
			opacity: 0;
		}
	}
`;

export const ListItem = ({ itemList, setOpenItem }) => (
	<List>
		{itemList.map(item => (
			<Item
				key={item.id}
				img={item.img}
				onClick={() => setOpenItem(item)}
			>
				<p>{item.name}</p>
				<p>{toLocaleCurrency(item.price)}</p>
			</Item>
		))}
	</List>
);

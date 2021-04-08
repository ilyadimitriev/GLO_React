import React from 'react';
import styled from 'styled-components';

import dbMenu from './DBMenu';
import { ListItem } from './ListItem';

import bannerImg from '../img/banner.png';

const MenuStyled = styled.main`
	margin-top: 80px;
	margin-left: 380px;
	background-color: #ccc;
`;

const Banner = styled.div`
	width: 100%;
	height: 210px;
	background: url(${bannerImg}) no-repeat;
	background-position: center;
	background-size: contain;
	cursor: pointer;
`;

const SectionMenu = styled.section`
	padding: 30px;
`;

export const Menu = ({ setOpenItem }) => (
	<MenuStyled>
		<Banner/>
		<SectionMenu>
			<h2>Бургеры</h2>
			<ListItem
				itemList={dbMenu.burger}
				setOpenItem={setOpenItem}
			/>
		</SectionMenu>
		<SectionMenu>
			<h2>Закуски / Напитки</h2>
			<ListItem
				itemList={dbMenu.other}
				setOpenItem={setOpenItem}
			/>
		</SectionMenu>
	</MenuStyled>
);

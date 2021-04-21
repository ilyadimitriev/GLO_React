import React from 'react';
import styled from 'styled-components';

import { ListItem } from './ListItem';
import { useFetch } from '../Hooks/useFetch';

import bannerImg from './banner.png';

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

export const Menu = ({ setOpenItem }) => {
	const res = useFetch();
	const dbMenu = res.response;

	return (
		<MenuStyled>
			<Banner/>
			{ res.response ?
				<>
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
				</>
				: res.error ? 
				<div>We have some issues, sorry. Please, try later...</div>
				:
				<div>Loading...</div>
			}
		</MenuStyled>
	)
};

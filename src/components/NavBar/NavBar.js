import React from 'react';
import styled from 'styled-components';

import logoImg from './logo.svg';
import userImg from './user-logo.svg';

const NavBarStyled = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	height: 80px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px;
	background-color: #299B01;
	color: white;
`;

const Logo = styled.div`
	display: flex;
	align-items: center;
`;

const H1 = styled.h1`
	font-size: 24px;
	margin-left: 15px;
`;

const ImgLogo = styled.img`
	width: 50px;
`;

const UserButton = styled.button`
	background-color: transparent;
	border: none;
	color: white;
	text-align: center;
	margin-right: 10px;
	font-size: 16px;
`;

const UserLogo = styled.img`
	width: 32px;
`;

const User = styled.div`
	display: flex;
	align-items: center;
	text-align: center;
`;

const Logout = styled.span`
	font-size: 20px;
	font-weight: bold;
	cursor: pointer;
	margin-right: 30px;
`;

export const NavBar = ({ authentication, logIn, logOut }) => (
	<NavBarStyled>
		<Logo>
			<ImgLogo src={logoImg} alt='logo'/>
			<H1>MrDonald's</H1>
		</Logo>
		{authentication ? 
			<User onClick={logIn}>
				<figure>
					<UserLogo src={userImg} alt={authentication.displayName}/>
					<figcaption>{authentication.displayName}</figcaption>
				</figure>
				<Logout title="Выйти" onClick={logOut}>X</Logout>
			</User>
			:
			<UserButton onClick={logIn}>
				<figure>
					<UserLogo src={userImg} alt='user-logo'/>
					<figcaption>Войти</figcaption>
				</figure>
			</UserButton>
		}
	</NavBarStyled>
);
import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
	}

	*, *::before, *::after {
		box-sizing: inherit;
	}

	body {
		margin: 0;
		background-color: #fff;
		font-family: Roboto, sans-serif;
		font-size: 20px;
		color: black;
	}

	img {
		max-width: 100%;
		height: auto;
	}

	button {
		cursor: pointer;
	}

	input, button {
		font-family: inherit;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	h1, h2, h3 {
		font-family: Pacifico;
		margin: 0;
		padding: 0;
	}

	p {
		margin: 0;
		padding: 0;
	}
`;
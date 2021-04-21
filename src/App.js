import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { NavBar } from './components/NavBar/NavBar';
import { Menu } from './components/Menu/Menu';
import { GlobalStyle } from './components/Style/GlobalStyle';
import { ModalItem } from './components/Modal/ModalItem';
import { Order } from './components/Order/Order';
import { useOpenItem } from './components/Hooks/useOpenItem';
import { useOrders } from './components/Hooks/useOrders';
import { useAuth } from './components/Hooks/useAuth';
import { useTitle } from './components/Hooks/useTitle';

const firebaseConfig = {
	apiKey: "AIzaSyBTUGZyckqHbBHVpaIIUwp1VGJQ71jgNw4",
	authDomain: "mrdonalds-db647.firebaseapp.com",
	databaseURL: "https://mrdonalds-db647-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "mrdonalds-db647",
	storageBucket: "mrdonalds-db647.appspot.com",
	messagingSenderId: "566053232848",
	appId: "1:566053232848:web:f6c75aa3c95b8250e4bed5"
};

firebase.initializeApp(firebaseConfig);

function App() {

	const auth = useAuth(firebase.auth);

	const openItem = useOpenItem();
	const orders = useOrders();
	useTitle(openItem.openItem);

	return (
		<>
			<GlobalStyle/>
			<NavBar {...auth}/>
			<Order
				{...orders}
				{...openItem}
				{...auth}
				firebaseDatabase={firebase.database}
			/>
			<Menu {...openItem}/>
			{ openItem.openItem && <ModalItem {...openItem} {...orders}/> }
		</>
	);
}

export default App;

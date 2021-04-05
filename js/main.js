'use strict';

class HeaderJSX extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className="wrapper">
				<div className="header">
					<a href="#"><div className="header-logo"></div></a>
					<a href="tel:888" className="header-phone"></a>
					<div className="header-phonelink"><a href="tel:7(962)556-1234">+7(962)556-1234</a></div>
				</div>
			</div>
		);
	}
}

class MainJSX extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className="wrapper">
				<div className="main">
					<h1 className="main-head">Заголовок c уникальным торговым предложение по системе 4U</h1>
					<div className="main-small">Описания предлжения компании. Сайт рыбатекст поможет дизайнеру, верстальщику,
											вебмастеру сгенерировать несколько абзацев более.
					</div>
					<button className="btn main-btn"><span>Подробнее</span></button>
				</div>
			</div>
		);
	}
}



class SliderItemJSX extends React.Component {
	constructor(props) {
		super();
		this.state = {
			style: props.style,
			text: props.text
		}
	}
	render() {
		return (
			<div className="features-slider_item">
				<div className="features-img" style={this.state.style}></div>
				<div className="features-feature">{this.state.text}</div>
			</div>
		);
	}
}

class SliderArrowJSX extends React.Component {
	constructor(props) {
		super();
		this.state = {
			className: props.className
		}
	}
	render() {
		return (
			<button className={this.state.className}>
				<svg width="9" height="16" xmlns="http://www.w3.org/2000/svg">
					<path
							d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
					</path>
				</svg>
			</button>
		);
	}
}

class FeaturesJSX extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
		<div className="wrapper">
			<div className="features-wrapper">
				<h2 className="features-head">Уникальный заголовок для преимущества компании</h2>
				<div className="features-subhead">О нас</div>
				<div className="features-description">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
												сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему
												оратору отточить.
				</div>
				<div className="features-slider">
					<div className="features-slider_items">
						<SliderItemJSX text="Первое целевое преимущество" style="background-image: url(/images/1.svg)"/>
						<SliderItemJSX text="Второе целевое преимущество" style="background-image: url(/images/2.svg)"/>
						<SliderItemJSX text="Третье целевое преимущество" style="background-image: url(/images/3.svg)"/>
						<SliderItemJSX text="Четвертое целевое преимущество" style="background-image: url(/images/4.svg)"/>
					</div>
					<SliderArrowJSX className="features-slider-arrow features-slider-prev"/>
					<SliderArrowJSX className="features-slider-arrow features-slider-next"/>
				</div>
			</div>
		</div>
		);
	}
}

class ContactJSX extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className="wrapper">
				<div className="contact-wrapper">
					<h2 className="contact-title">Остались вопросы?</h2>
					<div className="contact-description">Оставьте номер телефона, и мы перезвоним вам</div>
					<form action="../mailer.smart.php" className="contact-form"><input type="text" placeholder="Ваше имя"/>
						<input type="tel" placeholder="Телефон"/> <input type="email" placeholder="E-mail"/>
						<button
								className="btn contact-btn"><span>Позвоните мне</span></button>
					</form>
					<div className="contact-personal">Я даю своё <a href="#">согласие</a> на обработку моих персональных данных.
					</div>
				</div>
			</div>
		);
	}
}

class FooterJSX extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className="footer">
				<div className="footer-logo"></div>
				<div className="footer-company"><span>© 2020 XXXcompany. Все права защищены.</span></div>
				<a href="tel:888"
						className="footer-phone"></a>
				<div className="footer-websurfer"><span className="footer-websurfer_build">Сделано</span> <a href="#"
						>Ваше имя</a></div>
				<div className="footer-phonelink"><a href="tel:888">+7(962)556-1234</a></div>
			</div>
		);
	}
}

ReactDOM.render(<HeaderJSX/>, document.querySelector('header'));
ReactDOM.render(<MainJSX/>, document.querySelector('main'));
ReactDOM.render(<FeaturesJSX/>, document.querySelector('.features'));
ReactDOM.render(<ContactJSX/>, document.querySelector('.contact'));
ReactDOM.render(<FooterJSX/>, document.querySelector('footer'));

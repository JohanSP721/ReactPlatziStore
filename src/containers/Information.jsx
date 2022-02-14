import { useContext, useRef } from 'react';

import AppContext from '../context/AppContext';

import { Link, useHistory } from 'react-router-dom';

import '../assets/styles/components/Information.scss';

const Information = () =>
{
	const { state:{ cart }, addToBuyer } = useContext(AppContext);

	const  formRef = useRef();

	const history = useHistory();

	const handleSumTotal = () =>
	{
		const reducer = (accumulator, currentValue) => currentValue.price * currentValue.quantity + accumulator;

		const sum = cart.reduce(reducer, 0);

		return sum;
	}

	const handleSubmit = () =>
	{
		const formData = new FormData(formRef.current);
		const buyer = 
		{
			'name':formData.get('name'),
			'email':formData.get('email'),
			'address':formData.get('address'),
			'apto':formData.get('apto'),
			'city':formData.get('city'),
			'country':formData.get('country'),
			'state':formData.get('state'),
			'cp':formData.get('cp'),
			'phone':formData.get('phone'),		
		}
		
		addToBuyer(buyer);
		history.push('/checkout/payment');
	}
	
	return(
		<section className="information">
			<article className="information-content">
				<aside className="information-head">
				<h2>Información de contacto:</h2>
				</aside>
				<article className="information-form">
					<form ref={formRef}>
						<input type="text" placeholder="Nombre completo" name="name" />
						<input type="email" placeholder="Correo Electrónico" name="email" />
						<input type="text" placeholder="Dirección" name="address" />
						<input type="number" min="0" placeholder="apto" name="apto" />
						<input type="text" placeholder="Ciudad" name="city" />
						<input type="text" placeholder="País" name="country" />
						<input type="text" placeholder="Estado" name="state" />
						<input type="text" placeholder="Código postal" name="cp" />
						<input type="tel" placeholder="Teléfono" name="phone" />
					</form>
				</article>
				<div className="information-buttons">
					<Link to="/checkout">
						<button type="button" className="information-back">Regresar</button>
					</Link>
					<button type="button" onClick={handleSubmit} className="information-next">pagar</button>
				</div>
			</article>
			<aside className="information-sidebar">
				<h3>Pedido:</h3>
				{
					cart.map(item =>
					(
						<article className="information-item" key={item.id}>
							<div className="information-element">
								<h4>{item.title}</h4>
								<b>{ item.quantity } x $ { item.price }</b>
							</div>
						</article>
					))
				}
				{
					cart.length > 0 &&
						<h4>Precio Total: <b>${handleSumTotal()}</b></h4>
				}
			</aside>
    	</section>
 	);
};

export default Information;

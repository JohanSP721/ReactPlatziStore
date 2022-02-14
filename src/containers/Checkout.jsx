import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../context/AppContext';
import CheckoutItem from '../components/CheckoutItem';

import '../assets/styles/components/Checkout.scss';


const Checkout = () =>
{	
	const { state:{ cart }, removeFromCart } = useContext(AppContext);

	const handleRemoveFromCart = product =>
	{
		removeFromCart(product);
	};

	const handleSumTotal = () =>
	{
		const reducer = (accumulator, currentValue) => currentValue.price * currentValue.quantity + accumulator;

		const sum = cart.reduce(reducer, 0);

		return sum;
	}
	
	return(
		<section className="checkout">
			<article className="checkout-content">
				{
					cart.length > 0
					? <h3>Lista de Pedidos:</h3>
					: <h3>Sin Pedidos...</h3>
				}
				{
					cart.length > 0
					?
					cart.map(item =>
					(
						<CheckoutItem key={item.id} {...item} handleRemoveFromCart={handleRemoveFromCart}/>
					))
					:
					<div className="loading"></div>
				}
				
			</article>
			{
				cart.length > 0 &&
				(
					<article className="checkout-sidebar">
						<h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
						<Link to="/checkout/information">
							<button type="button">Continuar pedido</button>
						</Link>
					</article>
				)
			}
			
		</section>
	);
};

export default Checkout;

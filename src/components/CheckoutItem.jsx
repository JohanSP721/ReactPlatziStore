const CheckoutItem = props =>
{
	const { title, quantity, price, handleRemoveFromCart } = props;

	return(
		<article className="checkout-item">
			<aside className="checkout-element">
				<h4>{ title }</h4>
				<span>{ quantity } x $ { price }</span>
			</aside>
				<button type="button" onClick={() => handleRemoveFromCart(props)}>
					<i className="fas fa-trash-alt"></i>
				</button>
		</article>
	);
};

export default CheckoutItem;

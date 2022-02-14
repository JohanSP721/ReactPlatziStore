const Product = props =>
{
	const { image, title, price, description, handleAddToCart } = props;

	return(
		<article className="products-item">
			<img src={image} alt={title}/>
			<div className="product-item-info">
				<h2>{title} <span>${price}</span></h2>
				<p>{description}</p>
			</div>
			<button className="button-item" type="button" onClick={() => handleAddToCart(props)} >Comprar</button>
		</article>
	);
};

export default Product;

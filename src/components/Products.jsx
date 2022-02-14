import { useContext } from 'react';

import Product from './Product';
import AppContext from '../context/AppContext';

import '../assets/styles/components/Products.scss';

const Products = () =>
{
	const { state: { products }, addToCart } = useContext(AppContext);

	const handleAddToCart = product =>
	{
		addToCart(product);
	}

	return(
		<section className="products">
			<article className="products-items">
				{
					products.map(product =>
					(
						<Product key={product.id} {...product} handleAddToCart={handleAddToCart}/>
					))
				}
			</article>
		</section>
	);
};

export default Products;

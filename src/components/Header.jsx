import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../context/AppContext';

import '../assets/styles/components/Header.scss';

const Header = () =>
{
	const { state: { cart } } = useContext(AppContext);

	const handleSumTotal = () =>
	{
		const reducer = (accumulator, currentValue) => currentValue.quantity + accumulator;

		const sum = cart.reduce(reducer, 0);

		return sum;
	}
	
	return(
		<header className='header'>
			<h1 className='header-title'><Link to="/">PlatziConf Merch</Link></h1>
			<article className="header-checkout">
				<Link to="/checkout">
					<i className="fas fa-shopping-basket"></i>
				</Link>
				{
					cart.length > 0  && 
						<aside className="header-alert">
							{handleSumTotal()}
						</aside>
				}
			</article>
		</header>
	);
};

export default Header;

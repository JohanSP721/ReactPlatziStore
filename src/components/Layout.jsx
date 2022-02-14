import Header from './Header';
import Footer from './Footer';

import '../assets/styles/components/Layout.scss';

const Layout = ({ children }) =>
{
	return(
		<main className='main'>
			<Header/>
			{children}
			<Footer/>
		</main>
	);
};

export default Layout;

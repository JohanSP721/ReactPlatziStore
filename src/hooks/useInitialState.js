import { useState } from 'react';

import initialState from '../initialState';

const useInitialState = () =>
{
	const [state, setState] = useState(initialState);

	const addToCart = payload =>
	{
		state.cart.some(item => item.id === payload.id)
		?
		setState(prev => (
			{
				...prev,
				cart:
				[
					...prev.cart.map(
						item => item.id === payload.id
						?
						{ ...item, quantity: item.quantity++ }
						:
						{ ...item }
					)
				]
			}
		))
		:
		setState(prev => (
			{
				...prev,
				cart:
				[
					...prev.cart,
					{ ...payload, quantity:1 }
				]
			}
		))
	};

	const removeFromCart = payload =>
	{
		const { quantity, id } = payload;

		quantity > 1
		?
		setState(prev => (
				{
					...prev,
					cart: prev.cart.map(item =>
					{
			  			if (item.id === id)
						{
							return { ...item, quantity: item.quantity - 1 };
			  			}
						else
						{
							return { ...item };
						}
			  			
					}),
		  		}
			)
		)
		:
		setState(prev => (
				{
					...prev,
					cart: prev.cart.filter(item => item.id !== id),
		 		}
			)
		)
	};

	const addToBuyer = payload =>
	{
		setState(prev => (
			{
				...prev,
				buyer: 
				[
					...prev.buyer, payload
				]
			}
		))
	}

	const addNewOrder = payload =>
	{
		setState(prev => (
			{
				...prev,
				orders:
				[
					...prev.orders, payload
				]
			}
		))
	}

	return {
		addToCart,
		removeFromCart,
		addToBuyer,
		addNewOrder,
		state
	};
};

export default useInitialState;
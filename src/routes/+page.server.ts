import { redirect } from '@sveltejs/kit';

export const load = () => {
	console.log('+page.server run');
	const possible_routes = ['a', 'b'];
	// simulates route selection logic so that destination is SSRed
	const wanted_route = possible_routes[Math.random() < 0.5 ? 0 : 1];
	redirect(307, wanted_route);
};

import { redirect } from '@sveltejs/kit';

export const load = () => {
	throw redirect(308, '/legal/privacy-policy.pdf');
};

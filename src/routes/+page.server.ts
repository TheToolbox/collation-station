import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = ({ params }) => {
	return {
		slug: 'hi',
	};
};

export const actions = {
    default: async (event) => {
        console.log('default action');
    }
} satisfies Actions;
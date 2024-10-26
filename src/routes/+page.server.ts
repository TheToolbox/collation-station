import db from '$lib/server/db';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = ({ params }) => {
	return {
		slug: 'hi',
	};
};

export const actions = {
    default: async (event) => {
        console.log('default action');
        console.log(db);
    }
} satisfies Actions;


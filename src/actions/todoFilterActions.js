import { FILTER_CATEGORY } from '../constants/todoFilterConstants';

export function filterCategory(filter){
	return({
		type: FILTER_CATEGORY,
		filter
	})
}


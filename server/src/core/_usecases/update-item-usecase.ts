import { makeItem } from '../item';

const updateUCItem = () => (itemInput, oldValue) => {
	return makeItem(itemInput);
};

export { updateUCItem };

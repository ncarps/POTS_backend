import { makeScheduleLine } from '../scheduleLine';

const updateUCScheduleLine = () => (scheduleLineInput, oldValue) => {
	return makeScheduleLine(scheduleLineInput);
};

export { updateUCScheduleLine };

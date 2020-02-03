export interface IDBModel<T> {
	insert: (input: any) => PromiseLike<T>;
	getById: (input: any) => PromiseLike<T>;
	getAll: () => PromiseLike<T>;
	// getAllByDriver: (input: any) => PromiseLike<T>;
	// getByDeliverId: (input: any) => PromiseLike<T>;
	deleteById: (input: any) => PromiseLike<T>;
	updateById: (input: any) => PromiseLike<T>;
	// submitDelivery: (input: any) => PromiseLike<T>;
}

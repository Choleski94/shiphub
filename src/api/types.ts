export interface IApiMethods {
	get: (url: string) => Promise<any>;
	remove: (url: string) => Promise<any>;
	post: (url: string, data: any) => Promise<any>;
	patch: (url: string, data: any) => Promise<any>;
}

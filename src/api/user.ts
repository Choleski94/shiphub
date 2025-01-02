import { IApiMethods } from './types';

const user = ({ post, get, remove, patch }: IApiMethods) => ({
	signup: (credentials: any) => post('/users/register', credentials)
		.then(({ data }) => data.result),
	login: (credentials: any) => post('/users/auth', credentials)
		.then(({ data }) => data.result),
	confirm: (token: string) => post('/users/confirm', { token })
		.then(({ data }) => data.result),
	resetPassword: (data: any) => post('/users/recover', data)
		.then(({ data }) => data.result),
	fetchCurrentUser: () => get('/users/account')
		.then(({ data }) => data.result),
});

export default user;

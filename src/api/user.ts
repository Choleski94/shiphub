import { IApiMethods } from './types';

const user = ({ post, get, remove, patch }: IApiMethods 	  	) => {
	const signup = (credentials: any) => post('/users/register', credentials);

	const login = (credentials: any) => post('/users/auth', credentials);

	const confirm = (token: string) => post('/users/confirm', { token });

	const resetPassword = (data: any) => post('/users/recover', data);

	const fetchCurrentUser = () => get('/users/account');

	return {
		login,
		signup,
		confirm,
		resetPassword,
		fetchCurrentUser,
	};
};

export default user;

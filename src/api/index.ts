import userApi from './user';
import workspaceApi from './user'; // TODO
import { IApiMethods } from './types';
import { useRequest } from './../utils/hooks';

const useApi = () => {
	const httpMethods: IApiMethods = useRequest();

	return {
		user: userApi(httpMethods),
		workspace: workspaceApi(httpMethods),
	};
};

export default useApi;

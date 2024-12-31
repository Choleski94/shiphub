import axios from 'axios';
import axiosRetry from 'axios-retry';

import config from './../config';
import { TApiResponse } from './types';

axios.defaults.baseURL = config.api.base_url;

axiosRetry(axios, {
    retries: config.api.retry_count,
    retryCondition: axiosRetry.isRetryableError,
});

const user = {
	login: credentials => axios.post(`/users/auth`, credentials, { withCredentials: true })
		.then(({ data }: TApiResponse) => data.result),
	signup: credentials => axios.post(`/users/register`, credentials, { withCredentials: true })
		.then(({ data }: TApiResponse) => data.result),
	confirm: token => axios.post(`/users/confirm`, { token })
		.then(({ data }: TApiResponse) => data.result),
	resetPassword: data => axios.post(`/users/recover`, data)
		.then(({ data }: TApiResponse) => data),
	fetchCurrentUser: () => axios.get(`/users/account`)
		.then(({ data }: TApiResponse) => data?.result),
};

export default user;

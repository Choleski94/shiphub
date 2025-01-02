import React from 'react';
import axiosRetry from 'axios-retry';
import { useSelector } from 'react-redux';
import axios, { AxiosResponse } from 'axios';

import config from './../../config';
import { selectToken } from './../../store/selectors/app';
import { selectWorkspace } from './../../store/selectors/workspace';

export type TApiResult<T> = {
    result: T;
};

export type TApiData<T> = {
    data: TApiResult<T>;
};

export type TApiResponse<T> = AxiosResponse<TApiData<T>>;

// Axios defaults.
axios.defaults.withCredentials = true;
axios.defaults.baseURL = config.api.base_url;

// Axios retry configuration.
axiosRetry(axios, {
    retries: config.api.retry_count,
    retryDelay: axiosRetry.exponentialDelay,
    retryCondition: axiosRetry.isRetryableError,
});

const setRequestHeaders = (authToken: string = '', workspaceId: string = '') => ({
    headers: {
        ...(authToken && { 'Authorization': `Bearer ${authToken}` }),
        'X-SHIPHUB-WORKSPACE': workspaceId,
    },
});

export const useRequest = () => {
    const authToken = useSelector(selectToken);
    const activeWorkspace = useSelector(selectWorkspace);

    const workspaceId = React.useMemo(() => (
        activeWorkspace?.id
    ), [activeWorkspace]);

    const get = (path: string) => axios.get(path, {
        ...setRequestHeaders(authToken, workspaceId),
    });

    const post = (path: string, jsonData: any) => axios.post(path, jsonData, {
        ...setRequestHeaders(authToken, workspaceId),
    });

    const patch = (path: string, jsonData: any) => axios.patch(path, jsonData, {
        ...setRequestHeaders(authToken, workspaceId),
    });

    const remove = (path: string) => axios.delete(path, {
        ...setRequestHeaders(authToken, workspaceId),
    });

    return {
        get,
        post,
        patch,
        remove,
    };
};

export default useRequest;

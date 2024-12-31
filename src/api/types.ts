import { AxiosResponse } from 'axios';

export type TApiResult = {
	result: any
}

export type TApiData = {
	data: TApiResult
}

export type TApiResponse = TApiData & AxiosResponse;

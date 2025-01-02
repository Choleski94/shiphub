import { BASE_API_URL, BASE_API_RETRY, GOOGLE_MAPS_APIKEY } from '@env';

const config = {
	api: {
		base_url: "http://192.168.100.106:3000/v1/", // BASE_API_URL,
		retry_count: Number(BASE_API_RETRY) || 3,
	},
	services: {
		googleMap: GOOGLE_MAPS_APIKEY,
	},
};

export default config;

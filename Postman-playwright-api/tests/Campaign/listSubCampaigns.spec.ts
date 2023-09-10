
import { test, expect } from "@playwright/test";
import { AUTH } from "../config/auth";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /campaign/listSubCampaigns?pageSize=10', () => {
	const auth = AUTH
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test v1/campaign/listSubCampaigns Response - 200 OK', async ({ request }) => {
		const Issues = await request.get('https://api.estidar.com/api/v1/campaign/listSubCampaigns?searchQuery=&createdByIceOpId=&createdByBusinessPartnerId=&createdByBusinessUserId=&influencerId=&categoryId=&createdTimeFromInMillis=&createdTimeToInMillis=&startTimeFromInMillis=&startTimeToInMillis=&sortBy=CREATED_TIME&orderBy=DESCENDING&page=1&pageSize=10',{headers:{Authorization:`Bearer ${auth}`}} );
		expect.soft(Issues.status()).toBe(200);
		const DataTypeParser: Record<string, any> = {'totalresults': 'number', 'pagesize': 'number', 'currentpage': 'number', 'subcampaigns': 'object'}
            		const jsonResult = await Issues.json()
                	for (const key in jsonResult) {
                    		expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
                	}
            	});

	test('Endpoint Test v1/campaign/listSubCampaigns Response - 400 Bad Request', async ({ request }) => {
		const Issues = await request.get('https://api.estidar.com/api/v1/campaign/listSubCampaigns?searchQuery=&createdByIceOpId=&createdByBusinessPartnerId=&createdByBusinessUserId=&influencerId=&categoryId=&createdTimeFromInMillis=&createdTimeToInMillis=&startTimeFromInMillis=&startTimeToInMillis=&sortBy=CREATED_TIME&orderBy=DESCENDING&page=0&pageSize=10',{headers:{Authorization:`Bearer ${auth}`}} );
		expect.soft(Issues.status()).toBe(400);
		const DataTypeParser: Record<string, any> = {'error': 'object'}
            		const jsonResult = await Issues.json()
                	for (const key in jsonResult) {
                    		expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
                	}
            	});

	test('Endpoint Test v1/campaign/listSubCampaigns Response - 401 Unauthorize', async ({ request }) => {
		const Issues = await request.get('https://api.estidar.com/api/v1/campaign/listSubCampaigns?searchQuery=&createdByIceOpId=&createdByBusinessPartnerId=&createdByBusinessUserId=&influencerId=&categoryId=&createdTimeFromInMillis=&createdTimeToInMillis=&startTimeFromInMillis=&startTimeToInMillis=&sortBy=CREATED_TIME&orderBy=DESCENDING&page=1&pageSize=10' );
		expect.soft(Issues.status()).toBe(401);
		const DataTypeParser: Record<string, any> = {'message': 'string'}
            		const jsonResult = await Issues.json()
                	for (const key in jsonResult) {
                    		expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
                	}
            	});
});
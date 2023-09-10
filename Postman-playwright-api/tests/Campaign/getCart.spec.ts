
import { test, expect } from "@playwright/test";
import { AUTH } from "../config/auth";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /campaign/getCart?campaignId=2446', () => {
	const auth = AUTH
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test v1/campaign/getCart Response - 200 OK', async ({ request }) => {
		const Issues = await request.get('https://api.estidar.com/api/v1/campaign/getCart?campaignId=2446',{headers:{Authorization:`Bearer ${auth}`}} );
		expect.soft(Issues.status()).toBe(200);
		const DataTypeParser: Record<string, any> = {'campaignid': 'number', 'totalprice': 'number', 'totaltax': 'number', 'totaltaxdeduction': 'number', 'totalchargeablepricewithtaxanddeduction': 'number', 'subcampaigns': 'object'}
            		const jsonResult = await Issues.json()
                	for (const key in jsonResult) {
                    		expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
                	}
            	});

	test('Endpoint Test v1/campaign/getCart Response - 404 Not Found', async ({ request }) => {
		const Issues = await request.get('https://api.estidar.com/api/v1/campaign/getCart?campaignId=114',{headers:{Authorization:`Bearer ${auth}`}} );
		expect.soft(Issues.status()).toBe(404);
		const DataTypeParser: Record<string, any> = {'error': 'string'}
            		const jsonResult = await Issues.json()
                	for (const key in jsonResult) {
                    		expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
                	}
            	});

	test('Endpoint Test v1/campaign/getCart Response - 401 Unauthorized', async ({ request }) => {
		const Issues = await request.get('https://api.estidar.com/api/v1/campaign/getCart?campaignId=2446' );
		expect.soft(Issues.status()).toBe(401);
		const DataTypeParser: Record<string, any> = {'message': 'string'}
            		const jsonResult = await Issues.json()
                	for (const key in jsonResult) {
                    		expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
                	}
            	});
});
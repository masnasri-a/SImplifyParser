
import { test, expect } from "@playwright/test";
import { AUTH } from "../config/auth";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /campaign/addSubCampaign', () => {
	const auth = AUTH
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test v1/campaign/addSubCampaign Response - 200 OK', async ({ request }) => {
		const Issues = await request.post('https://api.estidar.com/api/v1/campaign/addSubCampaign',{data: {'campaignId': '2448', 'serviceId': 524, 'isSubServiceSelected': false, 'subServiceId': null, 'quantity': 1},headers:{Authorization:`Bearer ${auth}`}} );
		expect.soft(Issues.status()).toBe(200);

        		const jsonText = await Issues.text();
        		expect.soft(typeof jsonText).toBe("string")
    	});

	test('Endpoint Test v1/campaign/addSubCampaign Response - 403 Forbidden', async ({ request }) => {
		const Issues = await request.post('https://api.estidar.com/api/v1/campaign/addSubCampaign',{data: {'campaignId': '2448', 'serviceId': 524, 'isSubServiceSelected': false, 'subServiceId': null, 'quantity': 1}} );
		expect.soft(Issues.status()).toBe(401);
		const DataTypeParser: Record<string, any> = {'message': 'string'}
            		const jsonResult = await Issues.json()
                	for (const key in jsonResult) {
                    		expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
                	}
            	});
});
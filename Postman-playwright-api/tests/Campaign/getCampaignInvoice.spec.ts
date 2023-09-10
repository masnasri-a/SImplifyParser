
import { test, expect } from "@playwright/test";
import { AUTH } from "../config/auth";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /campaign/getCampaignInvoice?campaignId=2446', () => {
	const auth = AUTH
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test v1/campaign/getCampaignInvoice Response - 200 OK', async ({ request }) => {
		const Issues = await request.get('https://api.estidar.com/api/v1/campaign/getCampaignInvoice?campaignId=2446',{headers:{Authorization:`Bearer ${auth}`}} );
		expect.soft(Issues.status()).toBe(200);
		const DataTypeParser: Record<string, any> = {'campaignid': 'number', 'invoicenumber': 'string', 'ordernumber': 'string', 'paymenttimeinmillis': 'number', 'campaigntitle': 'string', 'totalprice': 'number', 'totaltax': 'number', 'totaltaxdeduction': 'number', 'totalchargeablepricewithtaxanddeduction': 'number', 'idpaid': 'boolean', 'lastupdatedtimeinmillis': 'number', 'businessusername': 'string', 'businesspartnername': 'string', 'paymentmethod': 'string', 'subcampaigns': 'object'}
            		const jsonResult = await Issues.json()
                	for (const key in jsonResult) {
						console.log(key, jsonResult[key]);
						
                    		expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
                	}
            	});

	test('Endpoint Test v1/campaign/getCampaignInvoice Response - 400 Bad Request', async ({ request }) => {
		const Issues = await request.get('https://api.estidar.com/api/v1/campaign/getCampaignInvoice?campaignId=92',{headers:{Authorization:`Bearer ${auth}`}} );
		expect.soft(Issues.status()).toBe(400);
		const DataTypeParser: Record<string, any> = {'error': 'string'}
            		const jsonResult = await Issues.json()
                	for (const key in jsonResult) {
                    		expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
                	}
            	});
});
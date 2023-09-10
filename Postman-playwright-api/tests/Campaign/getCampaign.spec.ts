
import { test, expect } from "@playwright/test";
import { AUTH } from "../config/auth";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /campaign/getCampaign?campaignId=2446', () => {
	const auth = AUTH
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test v1/campaign/getCampaign Response - 200 OK', async ({ request }) => {
		const Issues = await request.get('https://api.estidar.com/api/v1/campaign/getCampaign?campaignId=955',{headers:{Authorization:`Bearer ${auth}`}} );
		expect.soft(Issues.status()).toBe(200);
		const DataTypeParser: Record<string, any> = {'campaignid': 'number', 'createdbyuserid': 'number', 'createdbyusertype': 'string', 'forbusinessuserid': 'number', 'forbusinessusername': 'string', 'title': 'string', 'productname': 'string', 'campaignimagelink': 'string', 'campaignimagelinkkey': 'string', 'description': 'string', 'objective': 'string', 'referencelink': 'string', 'starttimeinmillis': 'number', 'endtimeinmillis': 'number', 'createdtimeinmillis': 'number', 'totalprice': 'number', 'totaltax': 'number', 'totaltaxdeduction': 'number', 'totalchargeablepricewithtaxanddeduction': 'number', 'invoicenumber': 'string', 'ordernumber': 'string', 'proofofpaymentfilelink': 'string', 'proofofpaymentfilelinkkey': 'string', 'proofofpaymentbankname': 'string', 'proofofpaymentbankaccnumber': 'string', 'isproofofpaymentvalid': 'boolean', 'proofofpaymentrejectionreason': 'string', 'proofofpaymentupdatetimeinmillis': 'number', 'status': 'string', 'rejectionreason': 'string', 'categories': 'object', 'productfilelinks': 'object', 'subcampaigns': 'object', 'createdbyusername': 'string'}
            		const jsonResult = await Issues.json()
                	for (const key in jsonResult) {
                    		expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
                	}
            	});

	test('Endpoint Test v1/campaign/getCampaign Response - 404 Not Found', async ({ request }) => {
		const Issues = await request.get('https://api.estidar.com/api/v1/campaign/getCampaign?campaignId=2160000',{headers:{Authorization:`Bearer ${auth}`}} );
		expect.soft(Issues.status()).toBe(404);
		const DataTypeParser: Record<string, any> = {'error': 'string'}
            		const jsonResult = await Issues.json()
                	for (const key in jsonResult) {
                    		expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
                	}
            	});

	test('Endpoint Test v1/campaign/getCampaign Response - 400 Bad Request', async ({ request }) => {
		const Issues = await request.get('https://api.estidar.com/api/v1/campaign/getCampaign?campaignId=dsd',{headers:{Authorization:`Bearer ${auth}`}} );
		expect.soft(Issues.status()).toBe(400);
		const DataTypeParser: Record<string, any> = {'error': 'string'}
            		const jsonResult = await Issues.json()
                	for (const key in jsonResult) {
                    		expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
                	}
            	});

	test('Endpoint Test v1/campaign/getCampaign Response - 401 Unauthorized', async ({ request }) => {
		const Issues = await request.get('https://api.estidar.com/api/v1/campaign/getCampaign?campaignId=2446' );
		expect.soft(Issues.status()).toBe(401);
		const DataTypeParser: Record<string, any> = {'message': 'string'}
            		const jsonResult = await Issues.json()
                	for (const key in jsonResult) {
                    		expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
                	}
            	});
});
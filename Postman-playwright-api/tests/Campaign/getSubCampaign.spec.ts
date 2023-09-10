
import { test, expect } from "@playwright/test";
import { AUTH } from "../config/auth";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /campaign/getSubCampaign?subCampaignId=2100', () => {
	const auth = AUTH
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test v1/campaign/getSubCampaign Response - 200 OK', async ({ request }) => {
		const Issues = await request.get('https://api.estidar.com/api/v1/campaign/getSubCampaign?subCampaignId=2100',{headers:{Authorization:`Bearer ${auth}`}} );
		expect.soft(Issues.status()).toBe(200);
		const DataTypeParser: Record<string, any> = {'subcampaignid': 'number', 'campaignid': 'number', 'createdbyuserid': 'number', 'campaigncreatedbyusertype': 'string', 'campaigncreatedbyusername': 'string', 'forbusinessuserid': 'number', 'forbusinessusername': 'string', 'campaigntitle': 'string', 'campaignimagelinkkey': 'string', 'campaignstarttimeinmillis': 'number', 'campaignendtimeinmillis': 'number', 'influencerid': 'number', 'influencername': 'string', 'influencercity': 'string', 'influencerprofileimagelinkkey': 'string', 'isinfluencerindividual': 'boolean', 'isinfluencerbusiness': 'boolean', 'ispkp': 'boolean', 'socialplatformtypeid': 'number', 'socialplatformtype': 'string', 'servicetypeid': 'number', 'servicetype': 'string', 'servicedescription': 'string', 'serviceprice': 'number', 'servicemarkupprice': 'number', 'issubserviceselected': 'boolean', 'subservicetype': 'string', 'subserviceprice': 'number', 'subservicemarkupprice': 'number', 'quantity': 'number', 'price': 'number', 'markupprice': 'number', 'invoicenumber': 'string', 'ordernumber': 'string', 'totaltax': 'number', 'totalchargeableprice': 'number', 'isconfirmedbyinfluencer': 'boolean', 'influencerrejectionreason': 'string', 'isconfirmedtimeinmillis': 'number', 'iscontentvalid': 'boolean', 'contentrejectionreason': 'string', 'contentupdatetimeinmillis': 'number', 'isproofofpostvalid': 'boolean', 'proofofpostrejectionreason': 'string', 'proofofpostupdatetimeinmillis': 'number', 'isproofofinsightvalid': 'boolean', 'proofofinsightrejectionreason': 'string', 'proofofinsightupdatetimeinmillis': 'number', 'status': 'string', 'campaignimagelink': 'string', 'influencerprofileimagelink': 'string', 'contentfilelinks': 'object', 'proofofpostfilelinks': 'object', 'proofofinsightfilelinks': 'object'}
            		const jsonResult = await Issues.json()
                	for (const key in jsonResult) {
                    		expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
                	}
            	});

	test('Endpoint Test v1/campaign/getSubCampaign Response - 403 Forbidden', async ({ request }) => {
		const Issues = await request.get('https://api.estidar.com/api/v1/campaign/getSubCampaign?subCampaignId=2100' );
		expect.soft(Issues.status()).toBe(401);
		const DataTypeParser: Record<string, any> = {'message': 'string'}
            		const jsonResult = await Issues.json()
                	for (const key in jsonResult) {
                    		expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
                	}
            	});

	test('Endpoint Test v1/campaign/getSubCampaign Response - 401 Unauthorized', async ({ request }) => {
		const Issues = await request.get('https://api.estidar.com/api/v1/campaign/getSubCampaign?subCampaignId=2100' );
		expect.soft(Issues.status()).toBe(401);
		const DataTypeParser: Record<string, any> = {'message': 'string'}
            		const jsonResult = await Issues.json()
                	for (const key in jsonResult) {
                    		expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
                	}
            	});
});
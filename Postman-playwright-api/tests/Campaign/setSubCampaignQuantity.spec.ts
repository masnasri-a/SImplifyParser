
import { test, expect } from "@playwright/test";
import { AUTH } from "../config/auth";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /campaign/setSubCampaignQuantity?subCampaignId=2123&quantity=2', () => {
	const auth = AUTH
	const expectResult = {};
	let campaignId = 0
	let subcampaigns = 0
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test v1/campaign/createCampaign Response - 200 OK', async ({ request }) => {
		const Issues = await request.post('https://api.estidar.com/api/v1/campaign/createCampaign', { data: { 'title': 'Test API Campaign 2', 'productName': 'test create campaign', 'categoryIds': [5], 'campaignImageLinkKey': '345658286_970115157328312_3782093863021317392_n_waifu2x_photo_noise1_scale-lm0szbbt.png', 'productFileLinkKeys': ['345658286_970115157328312_3782093863021317392_n_waifu2x_photo_noise1_scale-lm0sztgv.png'], 'description': 'anjae', 'objective': 'ibjdasdasd', 'referenceLink': 'ice.id', 'startTimeInMillis': 1733936400000, 'endTimeInMillis': 1734714000000 }, headers: { Authorization: `Bearer ${auth}` } });
		expect.soft(Issues.status()).toBe(200);
		const DataTypeParser: Record<string, any> = { 'campaignid': 'number', 'createdbyuserid': 'number', 'createdbyusertype': 'string', 'forbusinessuserid': 'number', 'title': 'string', 'productname': 'string', 'campaignimagelink': 'string', 'campaignimagelinkkey': 'string', 'description': 'string', 'objective': 'string', 'referencelink': 'string', 'starttimeinmillis': 'number', 'endtimeinmillis': 'number', 'createdtimeinmillis': 'number', 'totalprice': 'number', 'totaltax': 'number', 'totaltaxdeduction': 'number', 'totalchargeablepricewithtaxanddeduction': 'number', 'invoicenumber': 'string', 'ordernumber': 'string', 'proofofpaymentfilelink': 'string', 'proofofpaymentfilelinkkey': 'string', 'proofofpaymentbankname': 'string', 'proofofpaymentbankaccnumber': 'string', 'isproofofpaymentvalid': 'boolean', 'proofofpaymentrejectionreason': 'string', 'proofofpaymentupdatetimeinmillis': 'number', 'status': 'string', 'rejectionreason': 'string', 'forbusinessusername': 'string', 'createdbyusername': 'string', 'categories': 'object', 'productfilelinks': 'object' }
		const jsonResult = await Issues.json()
		for (const key in jsonResult) {
			expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
		}
		campaignId = jsonResult['campaignId'];

	});
	test('Endpoint Test v1/campaign/addSubCampaign Response - 200 OK', async ({ request }) => {
		console.log(campaignId);
		const Issues = await request.post('https://api.estidar.com/api/v1/campaign/addSubCampaign', { data: { 'campaignId': campaignId.toString(), 'serviceId': 524, 'isSubServiceSelected': false, 'subServiceId': null, 'quantity': 1 }, headers: { Authorization: `Bearer ${auth}` } });
		expect.soft(Issues.status()).toBe(200);
		const jsonText = await Issues.text();
		expect.soft(typeof jsonText).toBe("string")
		console.log(jsonText);

	});

	test('Endpoint Test v1/campaign/getCampaign Response - 200 OK', async ({ request }) => {
		const Issues = await request.get('https://api.estidar.com/api/v1/campaign/getCampaign?campaignId=' + campaignId, { headers: { Authorization: `Bearer ${auth}` } });
		expect.soft(Issues.status()).toBe(200);
		const DataTypeParser: Record<string, any> = { 'campaignid': 'number', 'createdbyuserid': 'number', 'createdbyusertype': 'string', 'forbusinessuserid': 'number', 'forbusinessusername': 'string', 'title': 'string', 'productname': 'string', 'campaignimagelink': 'string', 'campaignimagelinkkey': 'string', 'description': 'string', 'objective': 'string', 'referencelink': 'string', 'starttimeinmillis': 'number', 'endtimeinmillis': 'number', 'createdtimeinmillis': 'number', 'totalprice': 'number', 'totaltax': 'number', 'totaltaxdeduction': 'number', 'totalchargeablepricewithtaxanddeduction': 'number', 'invoicenumber': 'string', 'ordernumber': 'string', 'proofofpaymentfilelink': 'string', 'proofofpaymentfilelinkkey': 'string', 'proofofpaymentbankname': 'string', 'proofofpaymentbankaccnumber': 'string', 'isproofofpaymentvalid': 'boolean', 'proofofpaymentrejectionreason': 'string', 'proofofpaymentupdatetimeinmillis': 'number', 'status': 'string', 'rejectionreason': 'string', 'categories': 'object', 'productfilelinks': 'object', 'subcampaigns': 'object', 'createdbyusername': 'string' }
		const jsonResult = await Issues.json()
		subcampaigns = jsonResult['subCampaigns'][0]['subCampaignId']

	});

	test('Endpoint Test v1/campaign/setSubCampaignQuantity Response - 200 OK', async ({ request }) => {
		const Issues = await request.put('https://api.estidar.com/api/v1/campaign/setSubCampaignQuantity?subCampaignId=' + subcampaigns + '&quantity=2', { headers: { Authorization: `Bearer ${auth}` } });
		expect.soft(Issues.status()).toBe(200);
	});

	test('Endpoint Test v1/campaign/setSubCampaignQuantity Response - 400 Bad Request', async ({ request }) => {
		const Issues = await request.put('https://api.estidar.com/api/v1/campaign/setSubCampaignQuantity?subCampaignId=dsf&quantity=1', { headers: { Authorization: `Bearer ${auth}` } });
		expect.soft(Issues.status()).toBe(400);
		const DataTypeParser: Record<string, any> = { 'error': 'string' }
		const jsonResult = await Issues.json()
		for (const key in jsonResult) {
			expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
		}
	});

	test('Endpoint Test v1/campaign/setSubCampaignQuantity Response - 403 Forbidden', async ({ request }) => {
		const Issues = await request.put('https://api.estidar.com/api/v1/campaign/setSubCampaignQuantity?subCampaignId=3659&quantity=1');
		expect.soft(Issues.status()).toBe(401);
		const DataTypeParser: Record<string, any> = { 'message': 'string' }
		const jsonResult = await Issues.json()
		for (const key in jsonResult) {
			expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
		}
	});
});
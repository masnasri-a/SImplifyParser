
import { test, expect } from "@playwright/test";
import { AUTH } from "../config/auth";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /campaign/setProofOfPayment', () => {
	const auth = AUTH
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();
	let campaignId = 0

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

	test('Endpoint Test v1/campaign/setNonUpFrontPayment Response - 200 OK', async ({ request }) => {
		const Issues = await request.put('https://api.estidar.com/api/v1/campaign/setNonUpFrontPayment?campaignId=' + campaignId, { headers: { Authorization: `Bearer ${auth}` } });
		expect.soft(Issues.status()).toBe(200);
		const DataTypeParser: Record<string, any> = { 'campaignid': 'number', 'status': 'string' }
		const jsonResult = await Issues.json()
		for (const key in jsonResult) {
			expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
		}
	});


	test('Endpoint Test v1/campaign/setProofOfPayment Response - 200 OK', async ({ request }) => {
		const Issues = await request.put('https://api.estidar.com/api/v1/campaign/setProofOfPayment', { data: { 'campaignId': campaignId, 'bankId': 55, 'bankAccNumber': '12345678', 'proofOfPaymentImageLinkKey': 'shutterstock_1451974007-leff21pz.jpg' }, headers: { Authorization: `Bearer ${auth}` } });
		expect.soft(Issues.status()).toBe(200);
	});

	test('Endpoint Test v1/campaign/setProofOfPayment Response - 404 Bad Request', async ({ request }) => {
		const Issues = await request.put('https://api.estidar.com/api/v1/campaign/setProofOfPayment', { data: { 'campaignId': 208, 'bankId': 55, 'bankAccNumber': '12345678', 'proofOfPaymentImageLinkKey': 'shutterstock_1451974007-leff21pz.jpg' }, headers: { Authorization: `Bearer ${auth}` } });
		expect.soft(Issues.status()).toBe(404);
		const DataTypeParser: Record<string, any> = { 'error': 'string' }
		const jsonResult = await Issues.json()
		for (const key in jsonResult) {
			expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
		}
	});

	test('Endpoint Test v1/campaign/setProofOfPayment Response - 400 Bad Request', async ({ request }) => {
		const Issues = await request.put('https://api.estidar.com/api/v1/campaign/setProofOfPayment', { data: { 'campaignId': 208,'proofOfPaymentImageLinkKey': 'shutterstock_1451974007-leff21pz.jpg' }, headers: { Authorization: `Bearer ${auth}` } });
		expect.soft(Issues.status()).toBe(400);
	});

	test('Endpoint Test v1/campaign/setProofOfPayment Response - 401 UnAuthorize', async ({ request }) => {
		const Issues = await request.put('https://api.estidar.com/api/v1/campaign/setProofOfPayment', { data: { 'campaignId': 208, 'bankId': 55, 'bankAccNumber': '12345678', 'proofOfPaymentImageLinkKey': 'shutterstock_1451974007-leff21pz.jpg' } });
		expect.soft(Issues.status()).toBe(401);
		const DataTypeParser: Record<string, any> = { 'message': 'string' }
		const jsonResult = await Issues.json()
		for (const key in jsonResult) {
			expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
		}
	});
});
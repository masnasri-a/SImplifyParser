
import { test, expect } from "@playwright/test";
import { AUTH, TOKEN } from "../config/auth";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /campaign/verifyProofOfPost?subCampaignId=2122&isProofOfPostValid=true', () => {
	const auth = AUTH
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	let campaignId = 0
	let subcampaigns = 0

	test('Endpoint Test v1/campaign/createCampaign Response - 200 OK', async ({ request }) => {
		const Issues = await request.post('https://api.estidar.com/api/v1/campaign/createCampaign', { data: { 'title': 'Test API Campaign 2', 'productName': 'test create campaign', 'categoryIds': [5], 'campaignImageLinkKey': '345658286_970115157328312_3782093863021317392_n_waifu2x_photo_noise1_scale-lm0szbbt.png', 'productFileLinkKeys': ['345658286_970115157328312_3782093863021317392_n_waifu2x_photo_noise1_scale-lm0sztgv.png'], 'description': 'anjae', 'objective': 'ibjdasdasd', 'referenceLink': 'ice.id', 'startTimeInMillis': 1733936400000, 'endTimeInMillis': 1734714000000 }, headers: { Authorization: `Bearer ${auth}` } });
		expect.soft(Issues.status()).toBe(200);
		const DataTypeParser: Record<string, any> = { 'campaignid': 'number', 'createdbyuserid': 'number', 'createdbyusertype': 'string', 'forbusinessuserid': 'number', 'title': 'string', 'productname': 'string', 'campaignimagelink': 'string', 'campaignimagelinkkey': 'string', 'description': 'string', 'objective': 'string', 'referencelink': 'string', 'starttimeinmillis': 'number', 'endtimeinmillis': 'number', 'createdtimeinmillis': 'number', 'totalprice': 'number', 'totaltax': 'number', 'totaltaxdeduction': 'number', 'totalchargeablepricewithtaxanddeduction': 'number', 'invoicenumber': 'string', 'ordernumber': 'string', 'proofofpaymentfilelink': 'string', 'proofofpaymentfilelinkkey': 'string', 'proofofpaymentbankname': 'string', 'proofofpaymentbankaccnumber': 'string', 'isproofofpaymentvalid': 'boolean', 'proofofpaymentrejectionreason': 'string', 'proofofpaymentupdatetimeinmillis': 'number', 'status': 'string', 'rejectionreason': 'string', 'forbusinessusername': 'string', 'createdbyusername': 'string', 'categories': 'object', 'productfilelinks': 'object' }
		const jsonResult = await Issues.json()
		for (const key in jsonResult) {
			expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
		}
		campaignId = jsonResult['campaignId'];
		console.log(campaignId);

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
		const confirm = await request.put('https://internal-api.estidar.com/api/v1/campaign/verifyProofOfPayment?campaignId=' + campaignId + '&isPaymentProofValid=true&rejectionReason=', {
			headers: {
				'Auth-Token': TOKEN
			}
		})
		expect.soft(confirm.status()).toBe(200)
		const confirmSubCampaign = await request.put('https://internal-api.estidar.com/api/v1/campaign/confirmSubCampaign?subCampaignId=' + subcampaigns + '&isConfirmed=true', {
			headers: {
				'Auth-Token': TOKEN
			}
		})
		const setContent = await request.post('https://internal-api.estidar.com/api/v1/campaign/setContent?subCampaignId=' + subcampaigns, {
			data: ["SUBCAMPAIGN/1317/DRAFT/1694160797879-345658286_970115157328312_3782093863021317392_n_waifu2x_photo_noise1_scale.png"], headers: {
				'Auth-Token': TOKEN
			}
		})
		console.log(confirm.status());
		console.log(confirmSubCampaign.status());
		console.log(setContent.status());


	});
	test('Endpoint Test v1/campaign/verifyContent Response - 200 OK', async ({ request }) => {
		console.log(subcampaigns);

		const Issues = await request.put('https://api.estidar.com/api/v1/campaign/verifyContent?subCampaignId=' + subcampaigns + '&isContentValid=true', { headers: { Authorization: `Bearer ${auth}` } });
		expect.soft(Issues.status()).toBe(200);

		const jsonText = await Issues.text();
		expect.soft(typeof jsonText).toBe("string")

		const setContent = await request.post('https://internal-api.estidar.com/api/v1/campaign/setProofOfPost?subCampaignId=' + subcampaigns, {
			data: ["SUBCAMPAIGN/1317/DRAFT/1694160797879-345658286_970115157328312_3782093863021317392_n_waifu2x_photo_noise1_scale.png"], headers: {
				'Auth-Token': TOKEN
			}
		})
		console.log(setContent.status());

	});



	test('Endpoint Test v1/campaign/verifyProofOfPost Response - 200 OK', async ({ request }) => {
		const Issues = await request.put('https://api.estidar.com/api/v1/campaign/verifyProofOfPost?subCampaignId='+subcampaigns+'&isProofOfPostValid=true',{headers:{Authorization:`Bearer ${auth}`}} );
		expect.soft(Issues.status()).toBe(200);

        		const jsonText = await Issues.text();
        		expect.soft(typeof jsonText).toBe("string")
    	});


	test('Endpoint Test v1/campaign/verifyProofOfPost Response - 401 Forbidden', async ({ request }) => {
		const Issues = await request.put('https://api.estidar.com/api/v1/campaign/verifyProofOfPost?subCampaignId=285&isProofOfPostValid=true' );
		expect.soft(Issues.status()).toBe(401);
		const DataTypeParser: Record<string, any> = {'message': 'string'}
            		const jsonResult = await Issues.json()
                	for (const key in jsonResult) {
                    		expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
                	}
            	});
});
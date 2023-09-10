
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /campaign/listSubCampaignActivityHistory?subCampaignId=12', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test v1/campaign/listSubCampaignActivityHistory Response - 200 OK', async ({ request }) => {
		const Issues = await request.get('https://api.estidar.com/api/v1/campaign/listSubCampaignActivityHistory?subCampaignId=2122', { headers: { Authorization: `${auth}` } });
		expect.soft(Issues.status()).toBe(200);
		const DataTypeParser: Record<string, any> = { 'timeInMillis': 'number', 'action': 'string', 'subCampaign': 'object', 'subCampaign_result': { 'subCampaignId': 'number', 'campaignId': 'number', 'campaignCreatedByUserId': 'number', 'campaignCreatedByUserType': 'string', 'forBusinessUserId': 'number', 'campaignTitle': 'string', 'campaignImageLinkKey': 'string', 'campaignStartTimeInMillis': 'number', 'campaignEndTimeInMillis': 'number', 'campaignImageLink': 'string', 'campaignCreatedByUserName': 'string', 'forBusinessUserName': 'string', 'categories': 'object', 'influencerId': 'number', 'influencerName': 'string', 'influencerCity': 'string', 'influencerProfileImageLinkKey': 'string', 'influencerProfileImageLink': 'string', 'isInfluencerIndividual': 'number', 'isInfluencerBusiness': 'number', 'socialPlatformTypeId': 'number', 'socialPlatformType': 'string', 'serviceTypeId': 'number', 'serviceType': 'string', 'serviceDescription': 'string', 'servicePrice': 'number', 'serviceMarkupPrice': 'number', 'isSubServiceSelected': 'number', 'subServiceType': 'string', 'subServicePrice': 'number', 'subServiceMarkupPrice': 'number', 'quantity': 'number', 'price': 'number', 'markupPrice': 'number', 'invoiceNumber': 'string', 'orderNumber': 'string', 'totalTax': 'number', 'totalChargeablePrice': 'number', 'isConfirmedByInfluencer': 'number', 'influencerRejectionReason': 'string', 'isConfirmedTimeInMillis': 'number', 'isContentValid': 'number', 'contentRejectionReason': 'string', 'contentUpdateTimeInMillis': 'number', 'status': 'string', 'isProofOfPostValid': 'number', 'proofOfPostRejectionReason': 'string', 'proofOfPostUpdateTimeInMillis': 'number', 'contentFileLinks': 'object', 'proofOfPostFileLinks': 'object', 'proofOfInsightFileLinks': 'object' }, 'contentRevisionNumber': 'number' }
		const jsonResult = await Issues.json()
		for (const items of jsonResult) {
			for (const key in items) {
				console.log(items[key]);
			}
			break

		}
	});

	test('Endpoint Test v1/campaign/listSubCampaignActivityHistory Response - 403 Forbidden', async ({ request }) => {
		const Issues = await request.get('https://api.estidar.com/api/v1/campaign/listSubCampaignActivityHistory?subCampaignId=2122');
		expect.soft(Issues.status()).toBe(403);
		const DataTypeParser: Record<string, any> = { 'message': 'string' }
		const jsonResult = await Issues.json()
		for (const key in jsonResult) {
			expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key])
		}
	});
});
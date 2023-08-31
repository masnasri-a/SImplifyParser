
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /campaign/setProofOfPayment', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();
	const requestBody = {'campaignId': 208, 'bankId': 55, 'bankAccNumber': '12345678', 'proofOfPaymentImageLinkKey': 'shutterstock_1451974007-leff21pz.jpg'}

	test('Endpoint Test /campaign/setProofOfPayment without auth', async ({ request }) => {
		const Issues = await request.get('/campaign/setProofOfPayment');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /campaign/setProofOfPayment', async ({ request }) => {
		const Issues = await request.put('/campaign/setProofOfPayment',{data: requestBody,headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});
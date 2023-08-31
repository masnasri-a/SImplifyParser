
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /influencer/influencer/updateSubService', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();
	const requestBody = {'subServiceId': 44, 'serviceId': 147, 'socialPlatformId': 128, 'influencerId': 103, 'subServiceType': 'video 1 menit - updated', 'price': 1200000}

	test('Endpoint Test /influencer/influencer/updateSubService without auth', async ({ request }) => {
		const Issues = await request.get('/influencer/influencer/updateSubService');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /influencer/influencer/updateSubService', async ({ request }) => {
		const Issues = await request.put('/influencer/influencer/updateSubService',{data: requestBody,headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});
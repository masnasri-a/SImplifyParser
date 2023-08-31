
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /influencer/influencer/updateService', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();
	const requestBody = {'serviceId': 147, 'socialPlatformId': 128, 'serviceTypeId': 6, 'influencerId': 103, 'description': 'This is new service description for Post. updated', 'price': 250000}

	test('Endpoint Test /influencer/influencer/updateService without auth', async ({ request }) => {
		const Issues = await request.get('/influencer/influencer/updateService');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /influencer/influencer/updateService', async ({ request }) => {
		const Issues = await request.put('/influencer/influencer/updateService',{data: requestBody,headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});

import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /influencer/influencer/addSubService', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();
	const requestBody = {'serviceId': 147, 'influencerId': 103, 'socialPlatformId': 128, 'subServiceType': 'video 1 menit', 'price': 1200000}

	test('Endpoint Test /influencer/influencer/addSubService without auth', async ({ request }) => {
		const Issues = await request.get('/influencer/influencer/addSubService');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /influencer/influencer/addSubService', async ({ request }) => {
		const Issues = await request.post('/influencer/influencer/addSubService',{data: requestBody,headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});
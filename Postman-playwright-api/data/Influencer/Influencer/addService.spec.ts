
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /influencer/influencer/addService', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();
	const requestBody = {'socialPlatformId': 128, 'influencerId': 103, 'serviceTypeId': 6, 'price': 1112, 'description': 'Post', 'subServices': [{'socialPlatformId': 128, 'influencerId': 103, 'subServiceType': 'slide 2 photo', 'price': 1012}]}

	test('Endpoint Test /influencer/influencer/addService without auth', async ({ request }) => {
		const Issues = await request.get('/influencer/influencer/addService');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /influencer/influencer/addService', async ({ request }) => {
		const Issues = await request.post('/influencer/influencer/addService',{data: requestBody,headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});
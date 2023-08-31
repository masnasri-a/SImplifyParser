
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /campaign/getCart?campaignId=115', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test /campaign/getCart?campaignId=115 without auth', async ({ request }) => {
		const Issues = await request.get('/campaign/getCart?campaignId=115');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /campaign/getCart?campaignId=115', async ({ request }) => {
		const Issues = await request.get('/campaign/getCart?campaignId=115',{headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});
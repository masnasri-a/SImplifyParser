
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /util/listNotifications?page=1&pageSize=5', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test /util/listNotifications?page=1&pageSize=5 without auth', async ({ request }) => {
		const Issues = await request.get('/util/listNotifications?page=1&pageSize=5');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /util/listNotifications?page=1&pageSize=5', async ({ request }) => {
		const Issues = await request.get('/util/listNotifications?page=1&pageSize=5',{headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});
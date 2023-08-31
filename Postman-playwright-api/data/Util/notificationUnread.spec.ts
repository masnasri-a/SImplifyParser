
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /util/notificationUnread', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test /util/notificationUnread without auth', async ({ request }) => {
		const Issues = await request.get('/util/notificationUnread');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /util/notificationUnread', async ({ request }) => {
		const Issues = await request.get('/util/notificationUnread',{headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});
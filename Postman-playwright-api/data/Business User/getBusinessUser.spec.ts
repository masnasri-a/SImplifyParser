
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /businessUser/getBusinessUser', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test /businessUser/getBusinessUser without auth', async ({ request }) => {
		const Issues = await request.get('/businessUser/getBusinessUser');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /businessUser/getBusinessUser', async ({ request }) => {
		const Issues = await request.get('/businessUser/getBusinessUser',{headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});
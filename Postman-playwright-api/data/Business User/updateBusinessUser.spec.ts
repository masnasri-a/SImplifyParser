
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /businessUser/updateBusinessUser', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();
	const requestBody = {'name': ''}

	test('Endpoint Test /businessUser/updateBusinessUser without auth', async ({ request }) => {
		const Issues = await request.get('/businessUser/updateBusinessUser');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /businessUser/updateBusinessUser', async ({ request }) => {
		const Issues = await request.put('/businessUser/updateBusinessUser',{data: requestBody,headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});
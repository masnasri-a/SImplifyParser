
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /businessUser/createBusinessUser', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();
	const requestBody = {'name': 'Test Business User', 'email': 'test@mail.com', 'phoneNumber': '0813146771321'}

	test('Endpoint Test /businessUser/createBusinessUser without auth', async ({ request }) => {
		const Issues = await request.get('/businessUser/createBusinessUser');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /businessUser/createBusinessUser', async ({ request }) => {
		const Issues = await request.post('/businessUser/createBusinessUser',{data: requestBody,headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});
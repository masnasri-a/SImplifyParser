
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /businessUser/listChatRooms', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test /businessUser/listChatRooms without auth', async ({ request }) => {
		const Issues = await request.get('/businessUser/listChatRooms');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /businessUser/listChatRooms', async ({ request }) => {
		const Issues = await request.get('/businessUser/listChatRooms',{headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});
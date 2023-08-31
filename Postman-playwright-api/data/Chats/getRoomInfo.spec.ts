
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /chats/getRoomInfo?roomName=I_57_C_59', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test /chats/getRoomInfo?roomName=I_57_C_59 without auth', async ({ request }) => {
		const Issues = await request.get('/chats/getRoomInfo?roomName=I_57_C_59');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /chats/getRoomInfo?roomName=I_57_C_59', async ({ request }) => {
		const Issues = await request.get('/chats/getRoomInfo?roomName=I_57_C_59',{headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});
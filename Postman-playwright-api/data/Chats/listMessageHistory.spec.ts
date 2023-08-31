
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /chats/listMessageHistory?messageCount=10&roomName=I_57_C_59&lastId=I_57_C_59&lastSortkey=2023-07-06T08:38:18.409Z%23I_55_C_393_ljqwb50q', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test /chats/listMessageHistory?messageCount=10&roomName=I_57_C_59&lastId=I_57_C_59&lastSortkey=2023-07-06T08:38:18.409Z%23I_55_C_393_ljqwb50q without auth', async ({ request }) => {
		const Issues = await request.get('/chats/listMessageHistory?messageCount=10&roomName=I_57_C_59&lastId=I_57_C_59&lastSortkey=2023-07-06T08:38:18.409Z%23I_55_C_393_ljqwb50q');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /chats/listMessageHistory?messageCount=10&roomName=I_57_C_59&lastId=I_57_C_59&lastSortkey=2023-07-06T08:38:18.409Z%23I_55_C_393_ljqwb50q', async ({ request }) => {
		const Issues = await request.get('/chats/listMessageHistory?messageCount=10&roomName=I_57_C_59&lastId=I_57_C_59&lastSortkey=2023-07-06T08:38:18.409Z%23I_55_C_393_ljqwb50q',{headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});
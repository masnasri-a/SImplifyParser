
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /chats/joinChatRoom?roomName=I_102_C_216&userName=Andi Iskandar Abdulah', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test /chats/joinChatRoom?roomName=I_102_C_216&userName=Andi Iskandar Abdulah without auth', async ({ request }) => {
		const Issues = await request.get('/chats/joinChatRoom?roomName=I_102_C_216&userName=Andi Iskandar Abdulah');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /chats/joinChatRoom?roomName=I_102_C_216&userName=Andi Iskandar Abdulah', async ({ request }) => {
		const Issues = await request.get('/chats/joinChatRoom?roomName=I_102_C_216&userName=Andi Iskandar Abdulah',{headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});
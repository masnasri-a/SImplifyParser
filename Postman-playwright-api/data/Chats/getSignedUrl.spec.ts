
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /chats/getSignedUrl?key=I_191_C_184/chat-80b81a5gl.jpeg', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test /chats/getSignedUrl?key=I_191_C_184/chat-80b81a5gl.jpeg without auth', async ({ request }) => {
		const Issues = await request.get('/chats/getSignedUrl?key=I_191_C_184/chat-80b81a5gl.jpeg');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /chats/getSignedUrl?key=I_191_C_184/chat-80b81a5gl.jpeg', async ({ request }) => {
		const Issues = await request.get('/chats/getSignedUrl?key=I_191_C_184/chat-80b81a5gl.jpeg',{headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});
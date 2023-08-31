
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /chats/updateLastMessage', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();
	const requestBody = {'lastMessage': 'hello', 'messageType': 'text', 'lastMessageTimeInMillis': 122, 'influencerId': 54, 'campaignId': 53}

	test('Endpoint Test /chats/updateLastMessage without auth', async ({ request }) => {
		const Issues = await request.get('/chats/updateLastMessage');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /chats/updateLastMessage', async ({ request }) => {
		const Issues = await request.post('/chats/updateLastMessage',{data: requestBody,headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});
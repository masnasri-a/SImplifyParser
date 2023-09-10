
import { test, expect } from "@playwright/test";
import { AUTH } from "../config/auth";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /chats/updateLastMessage', () => {
	const auth = AUTH
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test v1/chats/updateLastMessage Response - 200 OK', async ({ request }) => {
		const Issues = await request.post('https://api.estidar.com/api/v1/chats/updateLastMessage', { data: { 'lastMessage': 'hello', 'messageType': 'text', 'lastMessageTimeInMillis': 122, 'influencerId': 54, 'campaignId': 53 }, headers: { Authorization: `Bearer ${auth}` } });
		expect.soft(Issues.status()).toBe(200);
		const DataTypeParser: Record<string, any> = { 'lastmessage': 'string', 'messagetype': 'string', 'lastmessagetimeinmillis': 'number', 'campaignid': 'number' }
		const jsonResult = await Issues.json()
		for (const key in jsonResult) {
			expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
		}
	});
});
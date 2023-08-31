
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /chats/generateUploadUrl', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();
	const requestBody = {'roomName': 'I_102_C_216', 'fileExtension': 'jpeg'}

	test('Endpoint Test /chats/generateUploadUrl without auth', async ({ request }) => {
		const Issues = await request.get('/chats/generateUploadUrl');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /chats/generateUploadUrl', async ({ request }) => {
		const Issues = await request.post('/chats/generateUploadUrl',{data: requestBody,headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});
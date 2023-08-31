
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /util/generateUploadUrl', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();
	const requestBody = {'fileKey': 'temporary/cat-2.jpeg', 'contentType': 'image/jpeg'}

	test('Endpoint Test /util/generateUploadUrl without auth', async ({ request }) => {
		const Issues = await request.get('/util/generateUploadUrl');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /util/generateUploadUrl', async ({ request }) => {
		const Issues = await request.post('/util/generateUploadUrl',{data: requestBody,headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});
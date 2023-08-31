
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /util/getSignedUrl?key=temporary/cat-2.jpeg', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test /util/getSignedUrl?key=temporary/cat-2.jpeg without auth', async ({ request }) => {
		const Issues = await request.get('/util/getSignedUrl?key=temporary/cat-2.jpeg');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /util/getSignedUrl?key=temporary/cat-2.jpeg', async ({ request }) => {
		const Issues = await request.get('/util/getSignedUrl?key=temporary/cat-2.jpeg',{headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});

import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /util/getPublicSignedUrl?key=assets/creator-3.png', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test /util/getPublicSignedUrl?key=assets/creator-3.png without auth', async ({ request }) => {
		const Issues = await request.get('/util/getPublicSignedUrl?key=assets/creator-3.png');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /util/getPublicSignedUrl?key=assets/creator-3.png', async ({ request }) => {
		const Issues = await request.get('/util/getPublicSignedUrl?key=assets/creator-3.png',{headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});
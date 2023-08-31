
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /util/getOptImgUrl?key=dodol.jpg&w=300&h=300&q=60', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test /util/getOptImgUrl?key=dodol.jpg&w=300&h=300&q=60 without auth', async ({ request }) => {
		const Issues = await request.get('/util/getOptImgUrl?key=dodol.jpg&w=300&h=300&q=60');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /util/getOptImgUrl?key=dodol.jpg&w=300&h=300&q=60', async ({ request }) => {
		const Issues = await request.get('/util/getOptImgUrl?key=dodol.jpg&w=300&h=300&q=60',{headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});
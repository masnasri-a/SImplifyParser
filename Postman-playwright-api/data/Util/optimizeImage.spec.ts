
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /util/optimizeImage?key=https://miro.medium.com/v2/resize:fit:4800/format:webp/1*eOJo0nDC2HSmmHn9_UKL2g.png&w=128&h=128&q=100', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test /util/optimizeImage?key=https://miro.medium.com/v2/resize:fit:4800/format:webp/1*eOJo0nDC2HSmmHn9_UKL2g.png&w=128&h=128&q=100 without auth', async ({ request }) => {
		const Issues = await request.get('/util/optimizeImage?key=https://miro.medium.com/v2/resize:fit:4800/format:webp/1*eOJo0nDC2HSmmHn9_UKL2g.png&w=128&h=128&q=100');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /util/optimizeImage?key=https://miro.medium.com/v2/resize:fit:4800/format:webp/1*eOJo0nDC2HSmmHn9_UKL2g.png&w=128&h=128&q=100', async ({ request }) => {
		const Issues = await request.get('/util/optimizeImage?key=https://miro.medium.com/v2/resize:fit:4800/format:webp/1*eOJo0nDC2HSmmHn9_UKL2g.png&w=128&h=128&q=100',{headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});
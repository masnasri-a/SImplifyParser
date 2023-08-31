
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /util/getPublicUrl?key=sitemap/sitemap-influencer.xml', () => {
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test /util/getPublicUrl?key=sitemap/sitemap-influencer.xml', async ({ request }) => {
		const Issues = await request.get('/util/getPublicUrl?key=sitemap/sitemap-influencer.xml' );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});

import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /util/checkPublicInfluencer?visitorId=SyRNAgxko59Xt5dK0vJn&type=search', () => {
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test /util/checkPublicInfluencer?visitorId=SyRNAgxko59Xt5dK0vJn&type=search', async ({ request }) => {
		const Issues = await request.get('/util/checkPublicInfluencer?visitorId=SyRNAgxko59Xt5dK0vJn&type=search' );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});
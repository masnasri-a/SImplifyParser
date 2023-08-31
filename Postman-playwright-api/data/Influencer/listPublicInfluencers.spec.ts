
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /influencer/listPublicInfluencers?platformSource=ICE_WEBSITE&page=3&pageSize=10&sortBy=createdAt&orderBy=desc', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test /influencer/listPublicInfluencers?platformSource=ICE_WEBSITE&page=3&pageSize=10&sortBy=createdAt&orderBy=desc without auth', async ({ request }) => {
		const Issues = await request.get('/influencer/listPublicInfluencers?platformSource=ICE_WEBSITE&page=3&pageSize=10&sortBy=createdAt&orderBy=desc');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /influencer/listPublicInfluencers?platformSource=ICE_WEBSITE&page=3&pageSize=10&sortBy=createdAt&orderBy=desc', async ({ request }) => {
		const Issues = await request.get('/influencer/listPublicInfluencers?platformSource=ICE_WEBSITE&page=3&pageSize=10&sortBy=createdAt&orderBy=desc',{headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});
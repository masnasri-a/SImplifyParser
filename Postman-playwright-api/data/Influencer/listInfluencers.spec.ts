
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /influencer/listInfluencers?socialPlatformId=&categoryId=12&cityId=&profileStatus=&gender=&isVisible=&sortBy=&orderBy=&page=1&searchQuery=tes&pageSize=10&createdBy=', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test /influencer/listInfluencers?socialPlatformId=&categoryId=12&cityId=&profileStatus=&gender=&isVisible=&sortBy=&orderBy=&page=1&searchQuery=tes&pageSize=10&createdBy= without auth', async ({ request }) => {
		const Issues = await request.get('/influencer/listInfluencers?socialPlatformId=&categoryId=12&cityId=&profileStatus=&gender=&isVisible=&sortBy=&orderBy=&page=1&searchQuery=tes&pageSize=10&createdBy=');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /influencer/listInfluencers?socialPlatformId=&categoryId=12&cityId=&profileStatus=&gender=&isVisible=&sortBy=&orderBy=&page=1&searchQuery=tes&pageSize=10&createdBy=', async ({ request }) => {
		const Issues = await request.get('/influencer/listInfluencers?socialPlatformId=&categoryId=12&cityId=&profileStatus=&gender=&isVisible=&sortBy=&orderBy=&page=1&searchQuery=tes&pageSize=10&createdBy=',{headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});
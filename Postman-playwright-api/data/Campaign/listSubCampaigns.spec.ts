
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /campaign/listSubCampaigns?searchQuery=&createdByIceOpId=&createdByBusinessPartnerId=&createdByBusinessUserId=&influencerId=&categoryId=&createdTimeFromInMillis=&createdTimeToInMillis=&startTimeFromInMillis=&startTimeToInMillis=&sortBy=CREATED_TIME&orderBy=DESCENDING&page=1&pageSize=10', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test /campaign/listSubCampaigns?searchQuery=&createdByIceOpId=&createdByBusinessPartnerId=&createdByBusinessUserId=&influencerId=&categoryId=&createdTimeFromInMillis=&createdTimeToInMillis=&startTimeFromInMillis=&startTimeToInMillis=&sortBy=CREATED_TIME&orderBy=DESCENDING&page=1&pageSize=10 without auth', async ({ request }) => {
		const Issues = await request.get('/campaign/listSubCampaigns?searchQuery=&createdByIceOpId=&createdByBusinessPartnerId=&createdByBusinessUserId=&influencerId=&categoryId=&createdTimeFromInMillis=&createdTimeToInMillis=&startTimeFromInMillis=&startTimeToInMillis=&sortBy=CREATED_TIME&orderBy=DESCENDING&page=1&pageSize=10');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /campaign/listSubCampaigns?searchQuery=&createdByIceOpId=&createdByBusinessPartnerId=&createdByBusinessUserId=&influencerId=&categoryId=&createdTimeFromInMillis=&createdTimeToInMillis=&startTimeFromInMillis=&startTimeToInMillis=&sortBy=CREATED_TIME&orderBy=DESCENDING&page=1&pageSize=10', async ({ request }) => {
		const Issues = await request.get('/campaign/listSubCampaigns?searchQuery=&createdByIceOpId=&createdByBusinessPartnerId=&createdByBusinessUserId=&influencerId=&categoryId=&createdTimeFromInMillis=&createdTimeToInMillis=&startTimeFromInMillis=&startTimeToInMillis=&sortBy=CREATED_TIME&orderBy=DESCENDING&page=1&pageSize=10',{headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});
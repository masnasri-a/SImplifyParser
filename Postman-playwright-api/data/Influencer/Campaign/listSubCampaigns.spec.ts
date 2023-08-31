
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /influencer/campaign/listSubCampaigns?searchQuery=Irwan&status=,AWAITING_CONFIRMATION,AWAITING_CONTENT,AWAITING_CONTENT,AWAITING_CONTENT_VERIFICATION,AWAITING_POP,AWAITING_POP_VERIFICATION,LIVE_AND_AWAITING_POI,LIVE_AND_AWAITING_POI_VERIFICATION,COMPLETED,REJECTED&createdByIceOpId=&createdByBusinessPartnerId=&createdByBusinessUserId=&influencerId=&categoryId=&createdTimeFromInMillis=&createdTimeToInMillis=&startTimeFromInMillis=&startTimeToInMillis=&sortBy=&orderBy=&page=1&pageSize=10', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test /influencer/campaign/listSubCampaigns?searchQuery=Irwan&status=,AWAITING_CONFIRMATION,AWAITING_CONTENT,AWAITING_CONTENT,AWAITING_CONTENT_VERIFICATION,AWAITING_POP,AWAITING_POP_VERIFICATION,LIVE_AND_AWAITING_POI,LIVE_AND_AWAITING_POI_VERIFICATION,COMPLETED,REJECTED&createdByIceOpId=&createdByBusinessPartnerId=&createdByBusinessUserId=&influencerId=&categoryId=&createdTimeFromInMillis=&createdTimeToInMillis=&startTimeFromInMillis=&startTimeToInMillis=&sortBy=&orderBy=&page=1&pageSize=10 without auth', async ({ request }) => {
		const Issues = await request.get('/influencer/campaign/listSubCampaigns?searchQuery=Irwan&status=,AWAITING_CONFIRMATION,AWAITING_CONTENT,AWAITING_CONTENT,AWAITING_CONTENT_VERIFICATION,AWAITING_POP,AWAITING_POP_VERIFICATION,LIVE_AND_AWAITING_POI,LIVE_AND_AWAITING_POI_VERIFICATION,COMPLETED,REJECTED&createdByIceOpId=&createdByBusinessPartnerId=&createdByBusinessUserId=&influencerId=&categoryId=&createdTimeFromInMillis=&createdTimeToInMillis=&startTimeFromInMillis=&startTimeToInMillis=&sortBy=&orderBy=&page=1&pageSize=10');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /influencer/campaign/listSubCampaigns?searchQuery=Irwan&status=,AWAITING_CONFIRMATION,AWAITING_CONTENT,AWAITING_CONTENT,AWAITING_CONTENT_VERIFICATION,AWAITING_POP,AWAITING_POP_VERIFICATION,LIVE_AND_AWAITING_POI,LIVE_AND_AWAITING_POI_VERIFICATION,COMPLETED,REJECTED&createdByIceOpId=&createdByBusinessPartnerId=&createdByBusinessUserId=&influencerId=&categoryId=&createdTimeFromInMillis=&createdTimeToInMillis=&startTimeFromInMillis=&startTimeToInMillis=&sortBy=&orderBy=&page=1&pageSize=10', async ({ request }) => {
		const Issues = await request.get('/influencer/campaign/listSubCampaigns?searchQuery=Irwan&status=,AWAITING_CONFIRMATION,AWAITING_CONTENT,AWAITING_CONTENT,AWAITING_CONTENT_VERIFICATION,AWAITING_POP,AWAITING_POP_VERIFICATION,LIVE_AND_AWAITING_POI,LIVE_AND_AWAITING_POI_VERIFICATION,COMPLETED,REJECTED&createdByIceOpId=&createdByBusinessPartnerId=&createdByBusinessUserId=&influencerId=&categoryId=&createdTimeFromInMillis=&createdTimeToInMillis=&startTimeFromInMillis=&startTimeToInMillis=&sortBy=&orderBy=&page=1&pageSize=10',{headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});
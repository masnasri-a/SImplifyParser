
import { test, expect } from "@playwright/test";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /influencer/influencer/bulkAddOrUpdateSocialPlatforms', () => {
	const auth = process.env.AUTH!
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();
	const requestBody = [{'socialPlatformId': 127, 'influencerId': 103, 'socialPlatformType': 'Instagram', 'socialPlatformTypeId': 1, 'username': 'testinfluencer1', 'noOfFollowers': 35000, 'socialProfileLink': 'www.instagram.com/testinfluencer1', 'services': [{'serviceId': 135, 'socialPlatformId': 127, 'influencerId': 95, 'serviceTypeId': 1, 'serviceType': 'Feed', 'price': 1200000, 'description': 'testinfluencer1', 'isServiceActive': True, 'subservices': []}, {'serviceId': 135, 'socialPlatformId': 127, 'influencerId': 95, 'serviceTypeId': 5, 'serviceType': 'Reels', 'price': 2300000, 'description': 'testinfluencer1', 'isServiceActive': True, 'subservices': []}]}, {'socialPlatformId': 128, 'influencerId': 95, 'socialPlatformType': 'Tiktok', 'socialPlatformTypeId': 2, 'username': 'testinfluencer1', 'noOfFollowers': 1200, 'socialProfileLink': 'www.tiktok.com/testinfluencer1', 'services': [{'serviceId': 136, 'socialPlatformId': 128, 'influencerId': 95, 'serviceTypeId': 6, 'serviceType': 'Post', 'price': 1600000, 'description': 'testinfluencer1', 'isServiceActive': True, 'subservices': []}, {'serviceId': 136, 'socialPlatformId': 128, 'influencerId': 95, 'serviceTypeId': 7, 'serviceType': 'Live', 'price': 2800000, 'description': 'testinfluencer1 -updated', 'isServiceActive': True, 'subservices': []}]}]

	test('Endpoint Test /influencer/influencer/bulkAddOrUpdateSocialPlatforms without auth', async ({ request }) => {
		const Issues = await request.get('/influencer/influencer/bulkAddOrUpdateSocialPlatforms');
		expect.soft(Issues.status(401)).toBe();
	});


	test('Endpoint Test /influencer/influencer/bulkAddOrUpdateSocialPlatforms', async ({ request }) => {
		const Issues = await request.post('/influencer/influencer/bulkAddOrUpdateSocialPlatforms',{data: requestBody,headers:{Authorization:`Bearer ${auth}`}} );
		expect(Issues.ok()).toBeTruthy();
		const sortedResult = Object.keys(await Issues.json()).sort();
		expect(Object.keys(sortedResult)).toEqual(sortedKeyResult);
	});
});
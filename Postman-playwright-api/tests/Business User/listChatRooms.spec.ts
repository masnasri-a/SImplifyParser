
import { test, expect } from "@playwright/test";
import { AUTH } from "../config/auth";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /businessUser/listChatRooms', () => {
	const auth = AUTH
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test v1/businessUser/listChatRooms Response - 200 OK', async ({ request }) => {
		const Issues = await request.get('https://api.estidar.com/api/v1/businessUser/listChatRooms',{headers:{Authorization:`Bearer ${auth}`}} );
		expect.soft(Issues.status()).toBe(200);
		const DataTypeParser: Record<string, any> = {'influencerId': 'number', 'campaignId': 'number', 'roomName': 'string', 'influencerName': 'string', 'campaignTitle': 'string', 'subCampaignCount': 'number', 'lastMessage': 'string', 'messageType': 'string', 'lastMessageTimeInMillis': 'number', 'influencerImageKey': 'string', 'influencerImageUrl': 'string'}
            		const jsonResult = await Issues.json()
                	for (const items of jsonResult){
                	for (const key in items) {
                    		expect.soft(typeof items[key]).toBe(DataTypeParser[key])
                	}
                break
                
	}
            	});

	test('Endpoint Test v1/businessUser/listChatRooms Response - 403 Forbidden', async ({ request }) => {
		const Issues = await request.get('https://api.estidar.com/api/v1/businessUser/listChatRooms' );
		expect.soft(Issues.status()).toBe(401);
		const DataTypeParser: Record<string, any> = {'message': 'string'}
            		const jsonResult = await Issues.json()
                	for (const key in jsonResult) {
                    		expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
                	}
            	});
});
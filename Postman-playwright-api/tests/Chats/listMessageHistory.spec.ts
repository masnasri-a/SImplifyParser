
import { test, expect } from "@playwright/test";
import { AUTH } from "../config/auth";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /chats/listMessageHistory?messageCount=10&roomName=I_57_C_59&lastId=I_57_C_59&lastSortkey=2023-07-06T08:38:18.409Z%23I_55_C_393_ljqwb50q', () => {
	const auth = AUTH
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test v1/chats/listMessageHistory Response - 200 OK', async ({ request }) => {
		const Issues = await request.get('https://api.estidar.com/api/v1/chats/listMessageHistory?roomName=I_102_C_216&lastId=I_102_C_216&lastSortkey=2023-03-02T07:36:48.441Z%23leqsmptm',{headers:{Authorization:`Bearer ${auth}`}} );
		expect.soft(Issues.status()).toBe(200);
		const DataTypeParser: Record<string, any> = {'items': 'object', 'lastkey': 'object'}
            		const jsonResult = await Issues.json()
                	for (const key in jsonResult) {
                    		expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
                	}
            	});

	test('Endpoint Test v1/chats/listMessageHistory Response - 400 Bad Request', async ({ request }) => {
		const Issues = await request.get('https://api.estidar.com/api/v1/chats/listMessageHistory?lastId=I_102_C_216&lastSortkey=2023-01-26T05:00:51.572Z%23ldcmncok',{headers:{Authorization:`Bearer ${auth}`}} );
		expect.soft(Issues.status()).toBe(400);
		const DataTypeParser: Record<string, any> = {'error': 'string'}
            		const jsonResult = await Issues.json()
                	for (const key in jsonResult) {
                    		expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
                	}
            	});

	test('Endpoint Test v1/chats/listMessageHistory Response - 401 Unathorize', async ({ request }) => {
		const Issues = await request.get('https://api.estidar.com/api/v1/chats/listMessageHistory?roomName=I_102_C_216&lastId=I_102_C_216&lastSortkey=2023-01-26T05:00:51.572Z%23ldcmncok' );
		expect.soft(Issues.status()).toBe(401);
		const DataTypeParser: Record<string, any> = {'message': 'string'}
            		const jsonResult = await Issues.json()
                	for (const key in jsonResult) {
                    		expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
                	}
            	});
});

import { test, expect } from "@playwright/test";
import { AUTH } from "../config/auth";
test.describe.configure({ mode: 'serial' });

test.describe('Test Endpoint /chats/getRoomInfo?roomName=I_259_C_1006', () => {
	const auth = AUTH
	const expectResult = {};
	const sortedKeyResult = Object.keys(expectResult).sort();

	test('Endpoint Test v1/chats/getRoomInfo Response - 200 OK', async ({ request }) => {
		const Issues = await request.get('https://api.estidar.com/api/v1/chats/getRoomInfo?roomName=I_102_C_216',{headers:{Authorization:`Bearer ${auth}`}} );
		expect.soft(Issues.status()).toBe(200);
		const DataTypeParser: Record<string, any> = {'id': 'string', 'status': 'string'}
            		const jsonResult = await Issues.json()
                	for (const key in jsonResult) {
                    		expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
                	}
            	});

	test('Endpoint Test v1/chats/getRoomInfo Response - 400 Bad Request', async ({ request }) => {
		const Issues = await request.get('https://api.estidar.com/api/v1/chats/getRoomInfo?roomName=',{headers:{Authorization:`Bearer ${auth}`}} );
		expect.soft(Issues.status()).toBe(400);
		const DataTypeParser: Record<string, any> = {'error': 'string'}
            		const jsonResult = await Issues.json()
                	for (const key in jsonResult) {
                    		expect.soft(typeof jsonResult[key]).toBe(DataTypeParser[key.toLowerCase()])
                	}
            	});
});